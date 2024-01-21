import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import NearbyJobCard from "../../components/jobs/nearbycard";

const JobSearch = () => {
  const left = require("../../assets/chevron-left.png");
  const right = require("../../assets/chevron-right.png");
  const params = useSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key":
            "555cd1e31amshd42d7eb3a9406e1p109585jsn07af4bdaef09",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView className="bg-[#120126]">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Search Jobs",
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: 16, rowGap: 16 }}
        ListHeaderComponent={() => (
          <>
            <View className="w-full">
              <Text
                className="font-bold text-[24px] text-white"
                style={{ fontFamily: "Nunito_700Bold" }}
              >
                {params.id}
              </Text>
              <Text
                className="mt-2 font-semibold text-[12px] text-zinc-200"
                style={{ fontFamily: "Nunito_600SemiBold" }}
              >
                Job Opportunities
              </Text>
            </View>
            <View className="mt-[16px]">
              {searchLoader ? (
                <ActivityIndicator size="large" color="#312651" />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View className="mt-[12px] justify-center items-center flex flex-row gap-3">
            <Pressable
              className="w-[30px] h-[30px] rounded-[5px] justify-center items-center bg-[#ffffff]"
              onPress={() => handlePagination("left")}
            >
              <Image
                source={left}
                className="w-[60%] h-[60%] "
                resizeMode="contain"
              />
            </Pressable>
            <View className="w-[30px] h-[30px] rounded-[5px] justify-center items-center bg-violet-300">
              <Text className="text-[#000] font-bold">{page}</Text>
            </View>
            <Pressable
              className="w-[30px] h-[30px] rounded-[5px] justify-center items-center bg-[#ffffff] "
              onPress={() => handlePagination("right")}
            >
              <Image
                source={right}
                className="w-[60%] h-[60%]"
                resizeMode="contain"
              />
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
