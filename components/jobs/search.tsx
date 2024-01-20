import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Search = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const search = require("../../assets/search.png");

  return (
    <View className="w-full">
      <View className="w-full">
        <Text className="font-medium text-[20px] text-[#444262]">
          Hello Abid
        </Text>
        <Text className="font-bold text-[24px] text-[#312651] mt-2">
          Find your perfect job
        </Text>
      </View>

      <View className="flex-row justify-center items-center mt-1 h-[50px]">
        <View className="flex-1 h-full w-full rounded-l-2xl bg-[#ffffff] rounded-medium items-center justify-center">
          <TextInput
            className="font-regular w-full h-5 pl-4 "
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <Pressable
          className="w-12 h-full bg-[#191f91] rounded-r-2xl flex items-center justify-center"
          onPress={handleClick}
        >
          <Image
            source={search}
            resizeMode="contain"
            style={{ width: "50%", height: "50%", tintColor: "#ffffff" }}
          />
        </Pressable>
      </View>

      <View className="w-full mt-4">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <Pressable
              className={`py-1 px-2 rounded-medium border ${
                activeJobType === item ? "border-[#444262]" : "border-[#C1C0C8]"
              }`}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text
                className={`font-medium ${
                  activeJobType === item ? "text-[#444262]" : "text-[#C1C0C8]"
                }`}
              >
                {item}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 12 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Search;
