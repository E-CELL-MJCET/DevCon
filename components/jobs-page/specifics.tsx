import { View, Text } from "react-native";

const Specifics = ({ title, points }) => {
  return (
    <View className="mt-[16px] bg-[#ffffff] rounded-xl p-[12px]">
      <Text className="text-[16px] text-[#312651] font-bold">{title}:</Text>

      <View className="my-[8px]">
        {points.map((item, index) => (
          <View
            className="flex flex-row justify-start items-start"
            key={item + index}
          >
            <View className="w-[6px] h-[6px] rounded-[6px] bg-[#C1C0C8] mt-[6px]" />
            <Text className="text-[10px] mt-[6px] text-[#83829A] ml-[8px]">
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
