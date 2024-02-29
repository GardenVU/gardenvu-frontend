import { Button, Card, List, SimpleGrid, Stack, Text } from "@mantine/core";
import { createTestPlotData } from "../data/test-data";
import GraphPanel from "../components/GraphPanel";
import { useState } from "react";
import {
  SensorDataTitle,
  SensorDataUnit,
} from "../interfaces/SensorData.interface";

const plotsData = [
  createTestPlotData(),
  createTestPlotData(),
  createTestPlotData(),
  createTestPlotData(),
];

const Dashboard = () => {
  /** States and Context **/
  const [selectedPlot, setSelectedPlot] = useState<number>(0);

  /** Render **/
  return (
    <div>
      <GraphPanel data={plotsData[selectedPlot].data} />
      <SimpleGrid cols={4}>
        {plotsData.map((plot, index) => (
          <Card
            key={index}
            shadow="sm"
            radius="md"
            style={{ textAlign: "center" }}
          >
            <Stack gap="xs" justify="flex-start">
              <Button
                key={index}
                onClick={() => setSelectedPlot(index)}
                color={selectedPlot === index ? "yellow" : "gray"}
              >
                Plot {index + 1}
              </Button>
              <List style={{ textAlign: "left" }}>
                <List.Item
                  icon={
                    <Text size="md" fw={500}>
                      {SensorDataTitle.TEMPERATURE}
                    </Text>
                  }
                >
                  {`${plot.data[plot.data.length - 1].temperature}${SensorDataUnit.TEMPERATURE}`}
                </List.Item>
                <List.Item
                  icon={
                    <Text size="md" fw={500}>
                      {SensorDataTitle.PH}
                    </Text>
                  }
                >
                  {`${plot.data[plot.data.length - 1].pH}${SensorDataUnit.PH}`}
                </List.Item>
                <List.Item
                  icon={
                    <Text size="md" fw={500}>
                      {SensorDataTitle.TDS}
                    </Text>
                  }
                >
                  {`${plot.data[plot.data.length - 1].tds}${SensorDataUnit.TDS}`}
                </List.Item>
                <List.Item
                  icon={
                    <Text size="md" fw={500}>
                      {SensorDataTitle.WATERLEVEL}
                    </Text>
                  }
                >
                  {`${plot.data[plot.data.length - 1].waterLevel}${SensorDataUnit.WATERLEVEL}`}
                </List.Item>
              </List>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Dashboard;
