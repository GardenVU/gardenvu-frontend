import { Button, Grid, Stack } from "@mantine/core";
import {
  SensorData,
  SensorDataColors,
  SensorDataName,
  SensorDataTitle,
} from "../interfaces/SensorData.interface";
import Graph from "./Graph";
import { useState } from "react";

interface GraphPanelProps {
  sensorData: SensorData[];
}

const GraphPanel = ({ sensorData }: GraphPanelProps) => {
  /** States and Context **/
  const [selected, setSelected] = useState<SensorDataName>(
    SensorDataName.TEMPERATURE,
  );

  /** Render **/
  return (
    <Grid justify="center" align="center" mb={10}>
      <Grid.Col span="content">
        <Stack>
          <Button
            onClick={() => setSelected(SensorDataName.TEMPERATURE)}
            color={
              selected === SensorDataName.TEMPERATURE
                ? SensorDataColors.TEMPERATURE
                : SensorDataColors.DEFAULT
            }
          >
            {SensorDataTitle.TEMPERATURE}
          </Button>
          <Button
            onClick={() => setSelected(SensorDataName.PH)}
            color={
              selected === SensorDataName.PH
                ? SensorDataColors.PH
                : SensorDataColors.DEFAULT
            }
          >
            {SensorDataTitle.PH}
          </Button>
          <Button
            onClick={() => setSelected(SensorDataName.TDS)}
            color={
              selected === SensorDataName.TDS
                ? SensorDataColors.TDS
                : SensorDataColors.DEFAULT
            }
          >
            {SensorDataTitle.TDS}
          </Button>
          <Button
            onClick={() => setSelected(SensorDataName.WATERLEVEL)}
            color={
              selected === SensorDataName.WATERLEVEL
                ? SensorDataColors.WATERLEVEL
                : SensorDataColors.DEFAULT
            }
          >
            {SensorDataTitle.WATERLEVEL}
          </Button>
        </Stack>
      </Grid.Col>
      <Grid.Col span={9}>
        <Graph
          data={sensorData}
          value={selected}
          dataKey={SensorDataName.TIME_COLLECTED}
        />
      </Grid.Col>
    </Grid>
  );
};

export default GraphPanel;
