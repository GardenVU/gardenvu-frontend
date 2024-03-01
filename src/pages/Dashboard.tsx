import { createTestPlotData } from "../data/test-data";
import GraphPanel from "../components/GraphPanel";
import { useState } from "react";
import PlotStatus from "../components/PlotStatus";

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
      <PlotStatus
        plotsData={plotsData}
        selectedPlot={selectedPlot}
        onPlotSelect={setSelectedPlot}
      />
    </div>
  );
};

export default Dashboard;
