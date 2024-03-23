import {
  SimpleGrid,
  Card,
  Stack,
  Button,
  List,
  Text,
  ThemeIcon,
  Group,
  Autocomplete,
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
  SensorDateRangeColor,
} from "../utils/sensorDataRanges.util";
import { IconCircle } from "@tabler/icons-react";
import { useState } from "react";

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
  /** States and Context **/
  const [search, setSearch] = useState<string>("");
  const [filteredPlots, setFilteredPlots] = useState<Plot[]>(plotsData);

  /** Render **/
  const numCols = Math.min(filteredPlots.length, 4);

  const filterPlots = (search: string) => {
    setSearch(search);
    setFilteredPlots(
      plotsData.filter((plot) =>
        plot.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

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

  return (
    <>
      <Autocomplete
        data={plotsData.map((plot) => plot.name)}
        value={search}
        onChange={filterPlots}
        placeholder="Search plots"
        mb={0.5}
      />
      <SimpleGrid cols={numCols} spacing="xs" verticalSpacing="xs">
        {filteredPlots.map((plot, index) => (
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
                onClick={() =>
                  onPlotSelect(plotsData.findIndex((p) => p.name === plot.name))
                }
                color={
                  selectedPlot ===
                  plotsData.findIndex((p) => p.name === plot.name)
                    ? "blue"
                    : "gray"
                }
              >
                {plot.name}
              </Button>
              <List style={{ textAlign: "left" }}>
                {[
                  {
                    title: SensorDataTitle.TEMPERATURE,
                    value:
                      plot.sensorData[plot.sensorData.length - 1].temperature,
                    unit: SensorDataUnit.TEMPERATURE,
                    getColor: getTemperatureColor,
                  },
                  {
                    title: SensorDataTitle.PH,
                    value: plot.sensorData[plot.sensorData.length - 1].pH,
                    unit: "",
                    getColor: getPHColor,
                  },
                  {
                    title: SensorDataTitle.TDS,
                    value: plot.sensorData[plot.sensorData.length - 1].tds,
                    unit: SensorDataUnit.TDS,
                    getColor: getTDSColor,
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
    </>
  );
};

export default PlotStatus;
