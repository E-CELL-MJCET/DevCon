import { Tabs } from "expo-router";
import { Icon } from "react-native-elements";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f472b6",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Icon name="home" size={30} color="#900" />,
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
              color="#300"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: () => <Icon name="briefcase" type="font-awesome" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => (
            <Icon name="compass" type="font-awesome" size={30} color="#900" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
