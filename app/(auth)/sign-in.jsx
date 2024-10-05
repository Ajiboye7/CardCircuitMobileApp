import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { icons } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Redirect, router,Link } from "expo-router";
import { TouchableOpacity } from "react-native";


const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="pl-3 pr-1 py-3 h-full mt-8">
      <ScrollView>
        <View className=" bg-secondary rounded-full w-[40px] h-[40px] justify-center items-center mb-8">
        <TouchableOpacity></TouchableOpacity>
          <Image
            source={icons.arrowLeft}
            resizeMode="contain"
            className="w-[30px] h-[30px]"
          />
        </View>
        <Text className="text-white text-[32px] font-600 font-sfProRoundedMedium mb-5">
          Sign I
          />
        </View>

        <View className="flex-row\ gap-2 pt-5">
          <Text className="text-lg text-gray-100 font-sfPro">Don't have an account ?</Text>
          <Link href="/sign-in" className="text-secondary text-lg">Sign Up </Link>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
