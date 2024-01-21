import { Tabs } from "expo-router";
import { Icon } from "react-native-elements";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8a48f0",
        },
        tabBarStyle: {
          backgroundColor: "#8a48f0",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => <Icon name="home" size={30} color="#fff" />,
        }}
      />

      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: () => (
            <Icon
              name="newspaper-o"
              type="font-awesome"
              size={30}
              color="#fff"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: () => (
            <Icon name="briefcase" type="font-awesome" color="#fff" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => (
            <Icon name="compass" type="font-awesome" size={30} color="#fff" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
