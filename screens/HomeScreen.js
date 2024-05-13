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
                    uri: "https://links.papareact.com/gzs",
                }}
            />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: ""
    }
})