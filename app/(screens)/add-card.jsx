import { View, Text,ScrollView, ImageBackground,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import FormField from "../../components/FormField";
import CustomButton from '../../components/CustomButton';
import { Redirect, router,Link } from "expo-router";


const AddCard = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      <View className="relative">
        <ImageBackground
        source={images.indexImage}
        resizeMode='cover'
        className='w-[393px] h-[328px] justify-center items-center'
        >
        <View className="w-[313px] h-[180px] bg-tertiary-30 justify-center items-center rounded-[20px] ">
          <Text className="text-white text-[32px] font-sfProRoundedBold mb-3">₦ ***K</Text>
          <Text className="text-white text-[16px] font-sfPro mb-3">Primary Savings</Text>
          <Text className="text-white text-[14px] font-sfPro mb-3">**** **** **** 3254</Text>
          <View>
            <Image
              source={icons.masterCard}
            />
          </View>
        </View>
        </ImageBackground>


        <Text className="text-white text-[32px] font-sfProRoundedBold mt-8">Add Card Details</Text>


        <View className="w-[360px] mb-20">
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
          <View className="mt-10">
          <CustomButton 
            title="Verify Card"
            icon={icons.arrowRight}
            handlePress={()=> router.push('/my-card')}
          />
          </View>

        </View>

        <View className="absolute right-0 bottom-0">
          <Image
            source={images.RightbuttomImage}

            
          />
          </View> 
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default AddCard