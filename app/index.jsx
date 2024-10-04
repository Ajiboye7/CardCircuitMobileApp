import { View, Text, ScrollView,Image } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import { Redirect, router,Link } from "expo-router";


consld"> Wallet.</Text>{'\n'}
        <Text className="font-bold">Unify</Text> {""}
        <Text>Your </Text>
        <Text>Finances.</Text>
      </Text>
      <Text className="text-white my-8 text-[14px] leading-[20px]">
      Welcome to seamless centralized banking.{'\n'}
      Manage and track all your cards in one app. 
      </Text>
      <CustomButton
        title="Get Started"
        handlePress={()=> router.push('/sign-up')}
      />
      <View className="flex-row gap-2 pt-5">
          <Text className="text-lg text-gray-100 font-sfPro">Already have an account?</Text>
          <Link href="/home" className="text-secondary text-lg font-psemibold">Log In </Link>
        </View>
    </View>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default Onboarding