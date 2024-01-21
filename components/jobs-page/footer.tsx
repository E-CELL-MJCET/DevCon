import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

const Footer = ({ url }) => {
  return (
    <View className="absolute bottom-0 pb-8  bg-opacity-0 justify-between items-center flex flex-row left-0 right-0 px-5 mb-3">
      <TouchableOpacity
        className="flex flex-1 bg-[#FE7654] h-[100%] justify-center items-center  rounded-xl"
        onPress={() => Linking.openURL(url)}
      >
        <Text className="text-[#ffffff] p-4 font-bold text-[12px]">
          Apply for job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
