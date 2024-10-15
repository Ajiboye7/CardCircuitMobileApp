import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconButton from '../../components/IconButton'
import { icons } from '../../constants'


const Profile = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View className="flex flex-row justify-between items-center mt-5">
            <View className="bg-secondary w-[30px] h-[30px] rounded-full">
                <Image
                    source={icons.arrowLeft}
                />
            </View>
            <Image 
                source={icons.profile2}
            />
            </View>

            <Text className="text-white text-[32px] font-sfProRoundedBold my-5">My Profile</Text>

            <View className="flex flex-row justify-between items-center">
                <Text className="text-white text-[14px]">User ID</Text>
                <Text className='text-white text-[14px]'>ee29euf0d29eu29</Text>
            </View>


            <View>
                <View>
                    <Text></Text>
                    <Text></Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Profile