import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import tw, { style } from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea , tw`bg-white h-full`}>
        <View style={tw`p-5`}>
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

        <NavOptions />
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