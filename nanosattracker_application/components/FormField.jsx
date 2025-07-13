import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-3 ${otherStyles}`}>
      <Text className="text-base text-white font-pmedium">{title}</Text>

      <View className="w-full h-14 px-4 bg-black-100 rounded-xl border border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-pregular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          style={{ fontSize: 16 }}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            className="p-2"
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor="#7B7B8B"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;