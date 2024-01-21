import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import Search from "../../components/jobs/search";
import Popularjobs from "../../components/jobs/popular";
import Nearbyjobs from "../../components/jobs/nearby";

const Jobs = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView className="" style={{ backgroundColor: "#120126" }}>
      <Stack.Screen
        options={{
          title: "Jobs",
          headerShown: false,
          statusBarColor: "#120126",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-3 bg-[#120126]">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Jobs;
