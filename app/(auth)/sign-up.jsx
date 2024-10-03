import { Text, View, Image,ScrollView} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'
import { icons } from "../../constants";
import FormField from '../../components/FormField';


const SignUp = () => {
  return (
  <SafeAreaView>
    <ScrollView>
      <View className=" bg-secondary rounded-full w-[40px] h-[40px] justify-center items-center">
        <Image
          source={icons.arrowLeft}
          resizeMode='contain'
          className="w-[30px] h-[30px]"
        />
      </View>
      <Text className="text-white text-[32px] font-600 font-sfProRoundedMedium">Let's Get Started</Text>
      <Text className="text-white">Register to manage and track all your cards today on
      CardCircuit</Text>
      <FormField
        title="First & Last Name"
        value={form.name}
        placeholder="John Doe"
      />
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignUp