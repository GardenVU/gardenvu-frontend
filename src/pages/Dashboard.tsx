import { testPlotsData } from "../data/test-data";
import GraphPanel from "../components/GraphPanel";
import { useState } from "react";
import PlotStatus from "../components/PlotStatus";
// import { getPlotInformation, getSensorData } from "../api/api";
// import { Plot } from "../interfaces/Plot.interface";
// import { useQuery } from "@tanstack/react-query";
// import { SensorData } from "../interfaces/SensorData.interface";
// import { mergeData } from "../utils/mergeData.util";
// import { useEffect } from "react";

const Dashboard = () => {
  /** States and Context **/
  const [selectedPlot, setSelectedPlot] = useState<number>(0);
  // const [plotData, setPlotData] = useState<Plot[]>([]);

  // /** Hooks **/
  // const {
  //   data: plotInfo,
  //   isLoading: plotInfoLoading,
  //   status: plotInfoStatus,
  //   isError: plotInfoError,
  // } = useQuery<Plot[]>({
  //   queryKey: ["plotInfo"],
  //   queryFn: () => getPlotInformation(),
  // });

  // const {
  //   data: sensorData,
  //   isLoading: sensorDataLoading,
  //   status: sensorDataStatus,
  //   isError: sensorDataError,
  // } = useQuery<SensorData[]>({
  //   queryKey: ["sensorData"],
  //   queryFn: () => getSensorData(20),
  // });

  // useEffect(() => {
  //   if (
  //     plotInfo &&
  //     sensorData &&
  //     plotInfoStatus === "success" &&
  //     sensorDataStatus === "success"
  //   ) {
  //     setPlotData(mergeData(plotInfo, sensorData));
  //   }
  // }, [plotInfo, sensorData, plotInfoStatus, sensorDataStatus]);

  // if (plotInfoLoading || sensorDataLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (plotInfoError || sensorDataError) {
  //   return <p>Error...</p>;
  // }

  // console.log(plotData);

  /** Render **/
  return (
    <div>
      <GraphPanel data={testPlotsData[selectedPlot].data} />
      <PlotStatus
        plotsData={testPlotsData}
        selectedPlot={selectedPlot}
        onPlotSelect={setSelectedPlot}
      />
    </div>
  );
};

export default Dashboard;
