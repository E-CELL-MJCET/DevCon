import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useFetch from "../../hook/useFetch";
import NearbyJobCard from "./nearbycard";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "India Developer",
    num_pages: "1",
  });

  return (
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-lg font-medium text-[#312651]">Nearby jobs</Text>
      </View>

      <View className="mt-1 ">
        {isLoading ? (
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
