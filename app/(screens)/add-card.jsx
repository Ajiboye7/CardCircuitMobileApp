import { View, Text,ScrollView, ImageBackground,Image} from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import FormField from "../../components/FormField";
import CustomButton from '../../components/CustomButton';
import { Redirect, router,Link } from "expo-router";


const AddCard = () => {

  /*const [cardNumber, setCardNumber] = useState('**** **** **** 3254');
  const [cardAlias, setCardAlias] = useState('Primary Savings');
  const [cardBalance, setCardBalance] = useState('₦500K');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');*/

  const [verify, setVerify] =useState({
    cardNumber: '**** **** **** 3254',
    cardAlias: 'Primary Savings',
    cardBalance :'₦500K',
    expiryDate : '',
    cvv: '',
  })


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
            handleChangeText={(e)=> setVerify({...verify, cardNumber:e })}
            keyboardType="numeric"
          />

          <View className="flex flex-row items-center justify-between">
            <FormField
              title="Expiry Date"
              placeholder="07/23"
              inputStyles="w-[151px]"
              handleChangeText={(e)=> setVerify({...verify, expiryDate:e })}
              keyboardType="numeric"
            />
            <FormField
              title="CCV"
              placeholder="****"
              inputStyles="w-[151px]"
              handleChangeText={(e)=> setVerify({...verify, cvv:e })}
              keyboardType="numeric"
            />
          </View>

          <FormField
            title="Enter Card Alias"
            placeholder="e.g Primary Savings"
            handleChangeText={(e)=> setVerify({...verify, cardAlias:e })}
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