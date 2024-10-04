import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { icons } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-secondary rounded-full w-[40px] h-[40px] justify-center items-center">
          <Image
            source={icons.arrowLeft}
            resizeMode="contain"
            className="w-[30px] h-[30px]"
          />
        </View>
        <Text className="text-white text-[32px] font-600 font-sfProRoundedMedium">
          Let's Get Started
        </Text>
        <Text className="text-white">
          Register to manage and track all your cards today on CardCircuit
        </Text>
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
          handleChangeText={(e) => setForm({ ...form, password: e })}
        />

        <FormField
          title="Re-type the password"
          value={form.confirmPassword}
          placeholder="confirm password"
          handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
        />
        <View className="flex items-center justify-center mt-10">
          <CustomButton
            title="Get Started"
            containerStyles="w-[174.2px] h-[50px]"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
