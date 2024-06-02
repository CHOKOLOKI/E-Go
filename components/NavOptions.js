import { FlatList, Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw, { style } from 'twrnc';
import { Icon } from 'react-native-elements';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];
    
const NavOptions = () => {
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>(
            <TouchableOpacity
                style={tw`p-12 pl-6 pb-2 pt-2 bg-gray-200 m-2 w-40 rounded-lg`}
            >
                <View>
                    <Image 
                        style={{width: 120, height: 120, resizeMode: "contain"}}
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    // style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        // name='arrowright'
                        // color='white'
                        // type='antdesgin'
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions