import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import PopularJobCard from "./popularcard";
import useFetch from "../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View className="mt-1">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-medium text-[#312651]">Popular jobs</Text>
        <TouchableOpacity>
          <Text className="font-medium text-[#83829A]">Show all</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-1">
        {isLoading ? (
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ gap: 16 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
