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
import { supabase } from "../../utils/supabase";
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Search = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const [name, setName] = useState("");
  const [userid, setUserID] = useState("");

  const search = require("../../assets/search.png");

  async function getData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUserID(user.id);
  }
  getData();

  async function getName() {
    const { data, error } = await supabase
      .from("users")
      .select("name")
      .eq("uid", userid);

    const jsonString = JSON.stringify(data);
    const regexResult = /"name":"([^"]+)"/.exec(jsonString);
    const extractedName = regexResult ? regexResult[1] : null;

    if (extractedName) {
      setName(extractedName);
    }
  }

  getName();

  return (
    <View className="w-full mt-6 px-3">
      <View className="w-full">
        <Text
          className="font-medium text-[20px] text-gray-100 mt-6 "
          style={{ fontFamily: "Nunito_400Regular" }}
        >
          Hello {name}
        </Text>
        <Text
          className="font-bold text-[24px] text-white my-2"
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          Find your perfect job
        </Text>
      </View>

      <View className="flex-row justify-center items-center mt-1 h-[50px]">
        <View className="flex-1 h-full w-full rounded-l-md bg-violet-200 text-white  placeholder:text-white items-center justify-center">
          <TextInput
            className="font-regular w-full h-5 pl-4 placeholder:text-black"
            style={{ fontFamily: "Nunito_600SemiBold" }}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <Pressable
          className="w-12 h-full bg-violet-600 rounded-r-md flex items-center justify-center"
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
