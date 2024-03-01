import {
  SimpleGrid,
  Card,
  Stack,
  Button,
  List,
  Text,
  ThemeIcon,
  Group,
} from "@mantine/core";
import { Plot } from "../interfaces/Plot.interface";
import {
  SensorDataTitle,
  SensorDataUnit,
} from "../interfaces/SensorData.interface";
import {
  temperatureRange,
  phRange,
  tdsRange,
  waterLevelRange,
  SensorDateRangeColor,
} from "../utils/sensorDataRanges";
import { IconCircle } from "@tabler/icons-react";

interface PlotStatusProps {
  plotsData: Plot[];
  selectedPlot: number;
  onPlotSelect: (index: number) => void;
}

const PlotStatus = ({
  plotsData,
  selectedPlot,
  onPlotSelect,
}: PlotStatusProps) => {
  /** Render **/
  const getTemperatureColor = (temperature: number) => {
    if (
      temperature >= temperatureRange.good.min &&
      temperature <= temperatureRange.good.max
    ) {
      return SensorDateRangeColor.GOOD;
    } else if (
      (temperature >= temperatureRange.warn[0].min &&
        temperature <= temperatureRange.warn[0].max) ||
      (temperature >= temperatureRange.warn[1].min &&
        temperature <= temperatureRange.warn[1].max)
    ) {
      return SensorDateRangeColor.WARN;
    } else {
      return SensorDateRangeColor.DANGER;
    }
  };

  const getPHColor = (ph: number) => {
    if (ph >= phRange.good.min && ph <= phRange.good.max) {
      return SensorDateRangeColor.GOOD;
    } else if (
      (ph >= phRange.warn[0].min && ph <= phRange.warn[0].max) ||
      (ph >= phRange.warn[1].min && ph <= phRange.warn[1].max)
    ) {
      return SensorDateRangeColor.WARN;
    } else {
      return SensorDateRangeColor.DANGER;
    }
  };

  const getTDSColor = (tds: number) => {
    if (tds >= tdsRange.good.min && tds <= tdsRange.good.max) {
      return SensorDateRangeColor.GOOD;
    } else if (
      (tds >= tdsRange.warn[0].min && tds <= tdsRange.warn[0].max) ||
      (tds >= tdsRange.warn[1].min && tds <= tdsRange.warn[1].max)
    ) {
      return SensorDateRangeColor.WARN;
    } else {
      return SensorDateRangeColor.DANGER;
    }
  };

  const getWaterLevelColor = (waterLevel: number) => {
    if (
      waterLevel >= waterLevelRange.good.min &&
      waterLevel <= waterLevelRange.good.max
    ) {
      return SensorDateRangeColor.GOOD;
    } else if (
      (waterLevel >= waterLevelRange.warn[0].min &&
        waterLevel <= waterLevelRange.warn[0].max) ||
      (waterLevel >= waterLevelRange.warn[1].min &&
        waterLevel <= waterLevelRange.warn[1].max)
    ) {
      return SensorDateRangeColor.WARN;
    } else {
      return SensorDateRangeColor.DANGER;
    }
  };

  return (
    <SimpleGrid cols={4}>
      {plotsData.map((plot, index) => (
        <Card
          key={index}
          shadow="sm"
          radius="md"
          style={{ textAlign: "center" }}
          padding="xs"
        >
          <Stack gap="xs" justify="flex-start">
            <Button
              key={index}
              onClick={() => onPlotSelect(index)}
              color={selectedPlot === index ? "black" : "gray"}
            >
              Plot {index + 1}
            </Button>
            <List style={{ textAlign: "left" }}>
              <List.Item
                icon={
                  <Group gap="xs">
                    <ThemeIcon
                      color={getTemperatureColor(
                        plot.data[plot.data.length - 1].temperature,
                      )}
                      size={12}
                      radius="xl"
                    >
                      <IconCircle />
                    </ThemeIcon>
                    <Text size="md" fw={500}>
                      {SensorDataTitle.TEMPERATURE}
                    </Text>
                  </Group>
                }
              >
                {`${plot.data[plot.data.length - 1].temperature}${SensorDataUnit.TEMPERATURE}`}
              </List.Item>
              <List.Item
                icon={
                  <Group gap="xs">
                    <ThemeIcon
                      color={getPHColor(plot.data[plot.data.length - 1].pH)}
                      size={12}
                      radius="xl"
                    >
                      <IconCircle />
                    </ThemeIcon>
                    <Text size="md" fw={500}>
                      {SensorDataTitle.PH}
                    </Text>
                  </Group>
                }
              >
                {`${plot.data[plot.data.length - 1].pH}`}
              </List.Item>
              <List.Item
                icon={
                  <Group gap="xs">
                    <ThemeIcon
                      color={getTDSColor(plot.data[plot.data.length - 1].tds)}
                      size={12}
                      radius="xl"
                    >
                      <IconCircle />
                    </ThemeIcon>
                    <Text size="md" fw={500}>
                      {SensorDataTitle.TDS}
                    </Text>
                  </Group>
                }
              >
                {`${plot.data[plot.data.length - 1].tds} ${SensorDataUnit.TDS}`}
              </List.Item>
              <List.Item
                icon={
                  <Group gap="xs">
                    <ThemeIcon
                      color={getWaterLevelColor(
                        plot.data[plot.data.length - 1].waterLevel,
                      )}
                      size={12}
                      radius="xl"
                    >
                      <IconCircle />
                    </ThemeIcon>
                    <Text size="md" fw={500}>
                      {SensorDataTitle.WATERLEVEL}
                    </Text>
                  </Group>
                }
              >
                {`${plot.data[plot.data.length - 1].waterLevel} ${SensorDataUnit.WATERLEVEL}`}
              </List.Item>
            </List>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default PlotStatus;
