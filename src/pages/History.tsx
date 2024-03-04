import { Button, Group, Select, Text } from "@mantine/core";
import { Plot } from "../interfaces/Plot.interface";
import { useState } from "react";
import { testPlotsData } from "../data/test-data";
import { DatePickerInput } from "@mantine/dates";
import GraphPanel from "../components/GraphPanel";
import FileSaver from "file-saver";

const History = () => {
  /** States and Context **/
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  /** Handlers **/
  const downloadData = () => {
    const data = selectedPlot?.data || [];
    const header = Object.keys(data[0]).join(",");
    const csv = `${header}\n${data
      .map((row) => Object.values(row).join(","))
      .join("\n")}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    FileSaver.saveAs(blob, `${selectedPlot?.name}.csv`);
  };

  /** Render **/
  const plotOptions = testPlotsData.map((plot) => ({
    value: plot._id.toString(),
    label: plot.name,
  }));

  return (
    <div>
      <Group mb={20} justify="center">
        <Select
          key={selectedPlot?._id}
          data={plotOptions}
          label="Select plot"
          placeholder="Select plot"
          value={selectedPlot?._id.toString()}
          onChange={(value) => {
            setSelectedPlot(
              testPlotsData.find((plot) => plot._id.toString() === value) ||
                null,
            );
          }}
          clearable
        />
        <DatePickerInput
          type="range"
          label="Select date range"
          placeholder="Select date range"
          value={dateRange}
          onChange={(value) => setDateRange(value)}
          clearable
          minDate={
            selectedPlot?.createdAt
              ? new Date(selectedPlot.createdAt)
              : undefined
          }
          maxDate={new Date()}
          disabled={!selectedPlot}
          firstDayOfWeek={0}
          allowSingleDateInRange
        />
      </Group>
      {dateRange[0] && dateRange[1] && selectedPlot && (
        <>
          <GraphPanel data={selectedPlot.data} />
          <Group mt={20} justify="center">
            <Button onClick={downloadData} color="black">
              <Text>{`Download Data`}</Text>
            </Button>
          </Group>
        </>
      )}
    </div>
  );
};

export default History;
