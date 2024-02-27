import { AppShell, Group, Title } from "@mantine/core";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header withBorder>
        <Group justify="center">
          <Title order={1}>GardenVU</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
