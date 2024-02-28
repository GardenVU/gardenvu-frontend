import { LineChart } from "@mantine/charts";
import {
  SensorData,
  SensorDataColors,
  SensorDataName,
} from "../interfaces/SensorData.interface";
import { Group, Title } from "@mantine/core";

interface GraphProps {
  data: SensorData[];
  value: SensorDataName;
  dataKey: SensorDataName;
}

const Graph = ({ data, value, dataKey }: GraphProps) => {
  const title =
    value === "temperature"
      ? "Temperature"
      : value === "pH"
        ? "pH"
        : value === "tds"
          ? "TDS"
          : "Water Level";

  return (
    <Group>
      <Title order={3}>{title}</Title>
      <LineChart
        h={225}
        data={data}
        dataKey={dataKey}
        series={[
          {
            name: value,
            color:
              SensorDataColors[
                value.toUpperCase() as keyof typeof SensorDataColors
              ],
          },
        ]}
        xAxisProps={{
          tickCount: data.length,
          tickFormatter: (value: string) =>
            new Date(value).toLocaleTimeString(),
          style: {
            textTransform: "capitalize",
          },
        }}
        curveType="step"
      />
    </Group>
  );
};

export default Graph;
