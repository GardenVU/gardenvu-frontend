/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LineChartCurveType } from "@mantine/charts";
import { createContext, useContext, useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

// Settings context type
interface SettingsContextType {
  curveType: LineChartCurveType;
  setCurveType: (_: LineChartCurveType) => void;
}

// Create settings context
const SettingsContext = createContext<SettingsContextType>({
  curveType: "step",
  setCurveType: (_: LineChartCurveType) => {},
});

// Create settings context provider
export const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [curveType, setCurveType] = useState<LineChartCurveType>("step");

  useEffect(() => {
    const storedCurveType = localStorage.getItem("curveType");
    if (storedCurveType) {
      setCurveType(storedCurveType as LineChartCurveType);
    }
  }, []);

  const updateCurveType = (newCurveType: LineChartCurveType) => {
    setCurveType(newCurveType);
    localStorage.setItem("curveType", newCurveType);
  };

  const value = { curveType, setCurveType: updateCurveType };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

// Hook to use settings context
export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
