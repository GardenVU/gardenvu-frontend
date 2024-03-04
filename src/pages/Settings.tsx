import { Group, Select, Stack, Text, Title } from "@mantine/core";
import { useSettingsContext } from "../context/settings.context";
import { LineChartCurveType } from "@mantine/charts";

const Settings = () => {
  /** States and Context **/
  const { curveType, setCurveType } = useSettingsContext();

  /** Render **/
  const curveOptions = [
    { value: "linear", label: "Linear" },
    { value: "step", label: "Step" },
    { value: "monotone", label: "Monotone" },
  ];

  return (
    <>
      <Stack>
        <Group justify="center">
          <Title order={3}>{`Settings`}</Title>
        </Group>
        <Group justify="center">
          <Text>{`Curve type: `}</Text>
          <Select
            data={curveOptions}
            defaultValue={curveType ? curveType : "step"}
            value={curveType}
            onChange={(value) => setCurveType(value as LineChartCurveType)}
          />
        </Group>
      </Stack>
    </>
  );
};

export default Settings;
