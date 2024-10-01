import { View, Text,Image,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants"


const index = () => {
  return (
   <SafeAreaView className="bg-primary">
   <ScrollView>
    <View>
    <Image
    source={images.indexImage}
    resizeMode='contain'
    />
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default index