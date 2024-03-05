import { Button, Group, Select, Text } from "@mantine/core";
import { Plot } from "../interfaces/Plot.interface";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import GraphPanel from "../components/GraphPanel";
import FileSaver from "file-saver";
import { getHistory, getPlotInformation } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { SensorData } from "../interfaces/SensorData.interface";

const History = () => {
  /** States and Context **/
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  /** Handlers **/
  const handleDateChange = (value: [Date | null, Date | null]) => {
    if (value[0] && value[1]) {
      const start = new Date(value[0]);
      const end = new Date(value[1]);
      start.setHours(0, 0, 0);
      end.setHours(23, 59, 59);
      setDateRange([start, end]);
    } else {
      setDateRange(value);
    }
  };

  const downloadData = () => {
    const data =
      historyData?.map((row) => ({
        ...row,
        time_collected: new Date(row.time_collected).toISOString(),
      })) || [];
    const header = Object.keys(data[0]).join(",");
    const csv = `${header}\n${data
      .map((row) => Object.values(row).join(","))
      .join("\n")}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    FileSaver.saveAs(blob, `${selectedPlot?.name}.csv`);
  };

  /** Hooks **/
  const {
    data: plotInfo,
    isLoading: plotInfoLoading,
    // status: plotInfoStatus,
    isError: plotInfoError,
  } = useQuery<Plot[]>({
    queryKey: ["plotInfo"],
    queryFn: () => getPlotInformation(),
  });

  const {
    data: historyData,
    isLoading: historyDataLoading,
    // status: historyDataStatus,
    isError: historyDataError,
  } = useQuery<SensorData[]>({
    queryKey: ["historyData"],
    queryFn: () => getHistory(selectedPlot?.id || 0, dateRange),
    enabled: !!selectedPlot && dateRange[0] !== null && dateRange[1] !== null,
  });

  /** Render **/
  const plotOptions = plotInfo?.map((plot: Plot) => ({
    value: plot.id.toString(),
    label: plot.name,
  }));

  if (plotInfoLoading || historyDataLoading) {
    return <Text>{`Loading...`}</Text>;
  }

  if (plotInfoError || historyDataError) {
    return <Text>{`Error!`}</Text>;
  }

  return (
    <>
      <Group mb={20} justify="center">
        <Select
          key={selectedPlot?.id}
          data={plotOptions}
          label="Select plot"
          placeholder="Select plot"
          value={selectedPlot?.id.toString()}
          onChange={(value) => {
            setSelectedPlot(
              plotInfo?.find((plot) => plot.id.toString() === value) || null,
            );
          }}
          clearable
        />
        <DatePickerInput
          type="range"
          label="Select date range"
          placeholder="Select date range"
          value={dateRange}
          onChange={(value) => handleDateChange(value)}
          clearable
          minDate={
            selectedPlot?.created_at
              ? new Date(selectedPlot?.created_at)
              : undefined
          }
          maxDate={new Date()}
          disabled={!selectedPlot}
          firstDayOfWeek={0}
          allowSingleDateInRange
        />
      </Group>
      {dateRange[0] && dateRange[1] && selectedPlot && historyData && (
        <>
          <GraphPanel data={historyData} />
          <Group mt={20} justify="center">
            <Button onClick={downloadData} color="black">
              <Text>{`Download Data`}</Text>
            </Button>
          </Group>
        </>
      )}
    </>
  );
};

export default History;
