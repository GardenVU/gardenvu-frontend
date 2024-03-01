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
} from "../utils/sensorDataRanges.util";
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
  const getColorByRange = (
    value: number,
    range: {
      good: { min: number; max: number };
      warn: { min: number; max: number }[];
    },
  ) => {
    if (value >= range.good.min && value <= range.good.max) {
      return SensorDateRangeColor.GOOD;
    } else if (
      range.warn.some((warn) => value >= warn.min && value <= warn.max)
    ) {
      return SensorDateRangeColor.WARN;
    }
    return SensorDateRangeColor.DANGER;
  };

  const getTemperatureColor = (temperature: number) => {
    const range = { good: temperatureRange.good, warn: temperatureRange.warn };
    return getColorByRange(temperature, range);
  };

  const getPHColor = (ph: number) => {
    const range = { good: phRange.good, warn: phRange.warn };
    return getColorByRange(ph, range);
  };

  const getTDSColor = (tds: number) => {
    const range = { good: tdsRange.good, warn: tdsRange.warn };
    return getColorByRange(tds, range);
  };

  const getWaterLevelColor = (waterLevel: number) => {
    const range = { good: waterLevelRange.good, warn: waterLevelRange.warn };
    return getColorByRange(waterLevel, range);
  };

  return (
    <SimpleGrid cols={4}>
      {plotsData.map((plot, index) => (
        <Card
          key={index}
          shadow="md"
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
              {[
                {
                  title: SensorDataTitle.TEMPERATURE,
                  value: plot.data[plot.data.length - 1].temperature,
                  unit: SensorDataUnit.TEMPERATURE,
                  getColor: getTemperatureColor,
                },
                {
                  title: SensorDataTitle.PH,
                  value: plot.data[plot.data.length - 1].pH,
                  unit: "",
                  getColor: getPHColor,
                },
                {
                  title: SensorDataTitle.TDS,
                  value: plot.data[plot.data.length - 1].tds,
                  unit: SensorDataUnit.TDS,
                  getColor: getTDSColor,
                },
                {
                  title: SensorDataTitle.WATERLEVEL,
                  value: plot.data[plot.data.length - 1].waterLevel,
                  unit: SensorDataUnit.WATERLEVEL,
                  getColor: getWaterLevelColor,
                },
              ].map((sensorData, i) => (
                <List.Item
                  key={i}
                  icon={
                    <Group gap="xs">
                      <ThemeIcon
                        color={sensorData.getColor(sensorData.value)}
                        size={12}
                        radius="xl"
                      >
                        <IconCircle />
                      </ThemeIcon>
                      <Text size="md" fw={500}>
                        {sensorData.title}
                      </Text>
                    </Group>
                  }
                >
                  {`${sensorData.value}${sensorData.title === SensorDataTitle.TEMPERATURE ? sensorData.unit : ` ${sensorData.unit}`}`}
                </List.Item>
              ))}
            </List>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default PlotStatus;
