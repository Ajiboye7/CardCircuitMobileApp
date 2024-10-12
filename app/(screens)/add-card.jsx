import { View, Text,ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from "../../components/FormField";


const AddCard = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      <View>
        <ImageBackground
        source={images.indexImage}
        resizeMode='cover'
        className='w-[393px] h-[328px]'
        >

        </ImageBackground>

        <Text className="text-white text-[32px] font-sfProRoundedBold">Add Card Details</Text>
        <View className="w-[360px]">
        
          <FormField
            placeholder="**** **** **** 325"
            title="Enter Card Number"
          />

          <View className="flex flex-row items-center justify-between">
            <FormField
              title="Expiry Date"
              placeholder="07/23"
              inputStyles="w-[151px]"
            />
            <FormField
              title="CCV"
              placeholder="****"
              inputStyles="w-[151px]"
            />
          </View>

          <FormField
            title="Enter Card Alias"
            placeholder="e.g Primary Savings"

          />
        </View>
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default AddCard