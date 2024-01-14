import { Stack } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView className="bg-[#eee] text-[#181818]">
        <Stack.Screen options={{ title: "Home", headerShown: true }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
