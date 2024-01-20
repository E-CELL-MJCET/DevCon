<<<<<<< HEAD
import React from "react";
import { View, Text } from "react-native";

function Jobs() {
  return (
    <View>
      <Text>Jobs</Text>
    </View>
  );
}
=======
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
    <SafeAreaView className="bg-[#f4f4f4]">
      <Stack.Screen options={{ title: "Jobs", headerShown: false }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-3">
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
>>>>>>> 6bf89b37cfe50fcbeb3c13d824012a568be3dd72

export default Jobs;
