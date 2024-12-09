import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  onChange,
  otherStyles,
  ...props
}) => {
  return (
    <View className={`${otherStyles}`}>
      <View className="w-full h-16 bg-black-100 rounded-2xl border-black-200 border-2 focus:border-secondary flex flex-row items-center">
        <TextInput
          value={value}
          className="flex-1 text-white  font-pregular px-4"
          onChangeText={onChange}
          placeholder="Search for a video by topic"
          placeholderTextColor="#CDCDE0"
        />
        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-5 h-5 m-3"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
