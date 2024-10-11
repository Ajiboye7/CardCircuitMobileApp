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
        <View>
          <FormField
            
          />
        </View>
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default AddCard