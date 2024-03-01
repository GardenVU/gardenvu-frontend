import { LineChart } from "@mantine/charts";
import {
  SensorData,
  SensorDataColors,
  SensorDataName,
  SensorDataTitle,
  SensorDataUnit,
} from "../interfaces/SensorData.interface";
import { Group, Title } from "@mantine/core";
import GraphTooltip from "./GraphTooltip";

interface GraphProps {
  data: SensorData[];
  value: SensorDataName;
  dataKey: SensorDataName;
}

const Graph = ({ data, value, dataKey }: GraphProps) => {
  /** Render **/
  return (
    <Group gap="xs">
      <Title order={3}>
        {value === SensorDataName.PH
          ? SensorDataTitle[value.toUpperCase() as keyof typeof SensorDataTitle]
          : `${SensorDataTitle[value.toUpperCase() as keyof typeof SensorDataTitle]} (${
              SensorDataUnit[value.toUpperCase() as keyof typeof SensorDataUnit]
            })`}
      </Title>
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
        tooltipProps={{
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          content: ({ label, payload }) => (
            <GraphTooltip label={label} payload={payload} />
          ),
        }}
      />
    </Group>
  );
};

export default Graph;
