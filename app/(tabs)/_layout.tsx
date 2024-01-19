import { Tabs } from "expo-router";

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
        }}
      />
      {/* <Tabs.Screen
        name="favourites"
        options={{
          title: "Settings",
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
        }}
      /> */}
      {/* <Tabs.Screen
				name="account"
				options={{
					title: 'Account',
				}}
			/> */}
    </Tabs>
  );
};

export default TabLayout;
