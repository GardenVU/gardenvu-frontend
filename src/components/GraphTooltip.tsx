import { Paper, Text } from "@mantine/core";
import {
  SensorDataTitle,
  SensorDataUnit,
} from "../interfaces/SensorData.interface";

interface GraphTooltipProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: Record<string, any>[] | undefined;
}

const GraphTooltip = ({ label, payload }: GraphTooltipProps) => {
  if (!payload) return null;
  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {new Date(label).toDateString()}
      </Text>
      <Text mb={5}>{new Date(label).toLocaleTimeString()}</Text>
      {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {payload.map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {
            SensorDataTitle[
              item.name.toUpperCase() as keyof typeof SensorDataTitle
            ]
          }
          :{" "}
          {`${item.value}${SensorDataUnit[item.name.toUpperCase() as keyof typeof SensorDataTitle]}`}
        </Text>
      ))}
    </Paper>
  );
};

export default GraphTooltip;
