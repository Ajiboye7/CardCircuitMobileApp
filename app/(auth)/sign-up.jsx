import { Text, View, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants";
import useSignUp from "../../context/useSignUp";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }); 

  const router = useRouter();
  const { register } = useSignUp();

  const handleSignUp = async () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
        retypePassword: form.confirmPassword,
      });
      Alert.alert("Success", "Account created successfully!");
      router.replace("/home");
    } catch (error) {
      console.error("Sign-up error:", error);
      Alert.alert("Error", error.response?.data?.error || "Sign-up failed.");
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
          Let's Get Started
        </Text>
        <Text className="text-white text-[14px] leading-[20px] font-light">
          Register to manage and track all your cards today on
          <Text className="font-bold">CardCircuit</Text>
        </Text>

        <View>
          <FormField
            title="First & Last Name"
            value={form.name}
            placeholder="John Doe"
            handleChangeText={(e) => setForm({ ...form, name: e })}
          />
          <FormField
            title="Email Address"
            value={form.email}
            placeholder="name@example.com"
            keyboardType="email-address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Create a password"
            value={form.password}
            placeholder="Password"
            secureTextEntry={true}
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <FormField
            title="Re-type the password"
            value={form.confirmPassword}
            placeholder="Confirm password"
            secureTextEntry={true}
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
          />
        </View>
        <View className="flex items-center justify-center mt-8">
          <CustomButton
            title="Create an account"
            containerStyles="w-[174.2px] h-[50px]"
            textStyles="text-[16px]"
            handlePress={handleSignUp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
