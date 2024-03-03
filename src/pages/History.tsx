import { Group, Select } from "@mantine/core";
import { Plot } from "../interfaces/Plot.interface";
import { useState } from "react";
import { testPlotsData } from "../data/test-data";
import { DatePickerInput } from "@mantine/dates";
import GraphPanel from "../components/GraphPanel";

const History = () => {
  /** States and Context **/
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  /** Render **/
  const plotOptions = testPlotsData.map((plot) => ({
    value: plot._id,
    label: plot.name,
  }));

  return (
    <div>
      <Group mb={10} justify="center">
        <Select
          key={selectedPlot?._id}
          data={plotOptions}
          label="Select plot"
          placeholder="Select plot"
          value={selectedPlot?._id}
          onChange={(value) => {
            setSelectedPlot(
              testPlotsData.find((plot) => plot._id === value) || null,
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
        <GraphPanel data={selectedPlot.data} />
      )}
    </div>
  );
};

export default History;
