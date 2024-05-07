import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import tw, { style } from 'twrnc';

const HomeScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea , tw`bg-slate-300 h-full`}>
        <View style={tw`pl-5`}>
            <Image 
                style={{
                    width: 100, 
                    height: 100, 
                    resizeMode: 'contain',
                }}
                source={{
                    uri: "https://1000logos.net/wp-content/uploads/2024/01/e-GO-logo-old.png",
                }}
            />
        </View>
        {/* <View style={TextInput}>
            <TextInput 
              placeholder="Sign up"  
              style={[
                GlobalStyles.textInputStyle,
                tw`mt-8 mb-6 text-center`,
              ]}
            />
        </View> */} {/* Initial plan for Sign up input */}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: ""
    }
})