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
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Search = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const search = require("../../assets/search.png");

  return (
    <View className="w-full mt-6">
      <View className="w-full">
        <Text
          className="font-medium text-[20px] text-gray-100 mt-6 "
          style={{ fontFamily: "Nunito_400Regular" }}
        >
          Hello Abid
        </Text>
        <Text
          className="font-bold text-[24px] text-white my-2"
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          Find your perfect job
        </Text>
      </View>

      <View className="flex-row justify-center items-center mt-1 h-[50px]">
        <View className="flex-1 h-full w-full rounded-md-xl bg-violet-200 text-white rounded-medium placeholder:text-white items-center justify-center">
          <TextInput
            className="font-regular w-full h-5 pl-4 placeholder:text-white"
            style={{ fontFamily: "Nunito_600SemiBold" }}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <Pressable
          className="w-12 h-full bg-violet-600 rounded-r-2xl flex items-center justify-center"
          onPress={handleClick}
        >
          <Image
            source={search}
            resizeMode="contain"
            style={{ width: "50%", height: "50%", tintColor: "#ffffff" }}
          />
        </Pressable>
      </View>

      <View className="w-full mt-5 mb-2">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <Pressable
              className={`py-1 px-2 rounded-medium border ${
                activeJobType === item
                  ? "border-violet-300"
                  : "border-[#C1C0C8]"
              }`}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text
                className={`font-semibold ${
                  activeJobType === item ? "text-violet-300" : "text-[#C1C0C8]"
                } `}
                style={{ fontFamily: "Nunito_600SemiBold" }}
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
