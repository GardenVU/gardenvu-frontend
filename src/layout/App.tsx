import { AppShell, Group, Title, Text } from "@mantine/core";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Dashboard", link: "dashboard" },
    { label: "History", link: "history" },
    { label: "Settings", link: "settings" },
  ];

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header withBorder>
        <Group ml={20} mt={10}>
          <Title order={1}>GardenVU</Title>
          <Group>
            {tabs.map((tab) => (
              <Text
                key={tab.link}
                onClick={() => navigateToPage(tab.link)}
                style={{
                  textDecoration:
                    location.pathname === `/${tab.link}` ? "underline" : "none",
                  cursor: "pointer",
                  marginRight: "16px",
                }}
              >
                {tab.label}
              </Text>
            ))}
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
