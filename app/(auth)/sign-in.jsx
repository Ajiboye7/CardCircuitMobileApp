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
          Sign In into your account
        </Text>
        <Text className="text-white text-[14px] leading-[20px] font-light">
         Sign in to manage and track all your cards today on{" "}
          <Text className="font-bold">CardCircuit</Text>
        </Text>

        <View className="">
          <FormField
            title="Email Address"
            value={form.email}
            placeholder="name@example.com"
            keyboardType="email-address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />

          <FormField
            title="password"
            value={form.password}
            placeholder="Password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
        </View>
        <View className="flex items-center justify-center mt-8">
          <CustomButton
            title="Sign In "
            containerStyles="w-[174.2px] h-[50px]"
            textStyles="text-[16px]"
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
