import { testPlotsData } from "../data/test-data";
import GraphPanel from "../components/GraphPanel";
import { useState } from "react";
import PlotStatus from "../components/PlotStatus";

const Dashboard = () => {
  /** States and Context **/
  const [selectedPlot, setSelectedPlot] = useState<number>(0);

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
