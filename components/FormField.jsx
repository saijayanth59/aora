import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  onChange,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium mb-2">{title}</Text>
      <View className="w-full h-16 bg-black-100 rounded-2xl border-black-200 border-2 focus:border-secondary flex flex-row items-center">
        <TextInput
          value={value}
          className="flex-1 text-white text-base font-pmedium px-4"
          onChangeText={onChange}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              className="w-6 h-6 m-1 p-3"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
