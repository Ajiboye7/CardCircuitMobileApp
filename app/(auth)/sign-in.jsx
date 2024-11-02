import { Text, View, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import axios from "axios";
import { icons } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { useRouter, Link } from "expo-router";
import useSignIn from "../../context/useSignIn";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  
  const {logIn} = useSignIn()
  const handleSignIn = async () => {

      try{
        await logIn({
          email: form.email,
          password: form.password
        })
        Alert.alert("Success", "Sign in  successfully!");
      router.replace("/home");
        
    } catch (error) {
      console.error("Sign-up error:", error);
      Alert.alert("Error", error.response?.data?.error || "SignIn failed.");
    }
  };

  return (
    <SafeAreaView className="pl-3 pr-1 py-3 h-full mt-8">
      <ScrollView>
        <View className="bg-secondary rounded-full w-[40px] h-[40px] justify-center items-center mb-8">
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

        <View>
          <FormField
            title="Email Address"
            value={form.email}
            placeholder="name@example.com"
            keyboardType="email-address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder="Password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
        </View>
        <View className="flex items-center justify-center mt-8">
          <CustomButton
            title="Sign In"
            containerStyles="w-[174.2px] h-[50px]"
            textStyles="text-[16px]"
            handlePress={handleSignIn}
          />
        </View>

        <View className="flex-row gap-2 pt-5">
          <Text className="text-lg text-gray-100 font-sfPro">
            Don't have an account?
          </Text>
          <Link href="/sign-up" className="text-secondary text-lg">
            Sign Up
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );s
};

export default SignIn;
