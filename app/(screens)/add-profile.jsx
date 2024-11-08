import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {React, useState }from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        
      }); 

      const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setProfilePicture(result.uri);
        }
    };


  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row justify-between items-center mt-5 mx-3">
          <View className="bg-secondary w-[30px] h-[30px] rounded-full">
            <Image source={icons.arrowLeft} />
          </View>
          <Image source={icons.profile2} />
        </View>

        <Text className="text-white text-[32px] font-sfProRoundedBold my-5 mx-3">
          Create Profile
        </Text>
        

        <View>
          <FormField
            title="Full Name"
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
            title="Phone Number"
            value={form.phone}
            placeholder="+234 1234567890"
            keyboardType="numeric"
            handleChangeText={(e) => setForm({ ...form, phone: e })}
          />
          
        </View>
        <View className="flex items-center justify-center mt-8">
          <CustomButton
            title="Add profile"
            containerStyles="w-[174.2px] h-[50px]"
            textStyles="text-[16px]"
            
          />
        </View>

        <TouchableOpacity onPress={pickImage}>
                <Text className="text-white">Choose Profile Picture</Text>
            </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
