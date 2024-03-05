import GraphPanel from "../components/GraphPanel";
import { useState } from "react";
import PlotStatus from "../components/PlotStatus";
import { getPlotInformation, getSensorData } from "../api/api";
import { Plot } from "../interfaces/Plot.interface";
import { useQuery } from "@tanstack/react-query";
import { SensorData } from "../interfaces/SensorData.interface";
import { mergeData } from "../utils/mergeData.util";
import { useEffect } from "react";
import { Text } from "@mantine/core";

const Dashboard = () => {
  /** States and Context **/
  const [selectedPlot, setSelectedPlot] = useState<number>(0);
  const [plotData, setPlotData] = useState<Plot[]>([]);

  /** Hooks **/
  const {
    data: plotInfo,
    isLoading: plotInfoLoading,
    status: plotInfoStatus,
    isError: plotInfoError,
  } = useQuery<Plot[]>({
    queryKey: ["plotInfo"],
    queryFn: () => getPlotInformation(),
  });

  const {
    data: sensorDataResp,
    isLoading: sensorDataLoading,
    status: sensorDataStatus,
    isError: sensorDataError,
  } = useQuery<{ plot_id: number; data: SensorData[] }[]>({
    queryKey: ["sensorData"],
    queryFn: () => getSensorData(20),
  });

  useEffect(() => {
    if (
      plotInfo &&
      sensorDataResp &&
      plotInfoStatus === "success" &&
      sensorDataStatus === "success"
    ) {
      setPlotData(mergeData(plotInfo, sensorDataResp));
    }
  }, [plotInfo, sensorDataResp, plotInfoStatus, sensorDataStatus]);

  if (plotInfoLoading || sensorDataLoading) {
    return <Text>{`Loading...`}</Text>;
  }

  if (plotInfoError || sensorDataError) {
    return <Text>{`Error!`}</Text>;
  }

  /** Render **/
  return (
    <>
      {plotData.length > 0 && (
        <>
          <GraphPanel data={plotData[selectedPlot].data} />
          <PlotStatus
            plotsData={plotData}
            selectedPlot={selectedPlot}
            onPlotSelect={setSelectedPlot}
          />
        </>
      )}
    </>
  );
};

export default Dashboard;
