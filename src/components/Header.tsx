import React from 'react'; 
import { 
    Text,
    StyleSheet, 
    View,
    Image
} from 'react-native' 
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

import userImg from '../assets/ines.png'
import fonts from '../styles/fonts'
import colors from '../styles/colors'


export function Header(){
    return ( 

            <View  style={styles.container}  >
                <View>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.userName}>Inês</Text> 
                </View>
                <Image 
                    style={styles.image}
                    source={userImg}>
                </Image>
            </View>
 
    )
}

const styles = StyleSheet.create({ 
    container:{
        width:'100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center', 
        marginTop:(getStatusBarHeight() + 20)
    },
    greeting:{
        fontFamily:fonts.text,
        fontSize:32,
        color:colors.heading
    },
    userName:{
        fontFamily:fonts.heading,
        fontSize:32, 
        color:colors.heading,
        lineHeight:40
    } ,
    image:{
        width: 70,
        height: 70,
        borderRadius:35
    }  
})