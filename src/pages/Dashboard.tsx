import { Button, Card, List, SimpleGrid, Stack, Text } from "@mantine/core";
import { createTestPlotData } from "../data/test-data";
import GraphPanel from "../components/GraphPanel";
import { useState } from "react";
import { SensorDataTitle } from "../interfaces/SensorData.interface";

const plotsData = [
  createTestPlotData(),
  createTestPlotData(),
  createTestPlotData(),
];

const Dashboard = () => {
  const [selectedPlot, setSelectedPlot] = useState<number>(0);

  return (
    <div>
      <GraphPanel data={plotsData[selectedPlot]} />
      <SimpleGrid cols={plotsData.length}>
        {plotsData.map((data, index) => (
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
                  {data[data.length - 1].temperature}
                </List.Item>
                <List.Item
                  icon={
                    <Text size="md" fw={500}>
                      {SensorDataTitle.PH}
                    </Text>
                  }
                >
                  {data[data.length - 1].pH}
                </List.Item>
                <List.Item
                  icon={
                    <Text size="md" fw={500}>
                      {SensorDataTitle.TDS}
                    </Text>
                  }
                >
                  {data[data.length - 1].tds}
                </List.Item>
                <List.Item
                  icon={
                    <Text size="md" fw={500}>
                      {SensorDataTitle.WATERLEVEL}
                    </Text>
                  }
                >
                  {data[data.length - 1].waterLevel}
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
