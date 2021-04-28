import React  from 'react'; 
import {
    SafeAreaView, 
    Text,  
    StyleSheet,  
    View 
} from 'react-native';  
import {useNavigation} from '@react-navigation/core'

import {Button} from '../components/Button'
 
import colors from '../styles/colors'
import fonts from '../styles/fonts'

 
export function Confirmation(){
    const navigation = useNavigation();
    
    function handleMoveOn(){
        navigation.navigate("PlantSelect")
    }
    
    return (
        <SafeAreaView style={styles.container}> 
            <View style={styles.content}> 
                <Text style={styles.emoji}>
                    🤗
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text> 
                <Text style={styles.subtitle}>
                    Agora vou começar a cuidar das tuas plantinhas com muito cuidado.
                </Text> 
                <View style={styles.footer}>
                    <Button 
                        title="Começar"
                        onPress={handleMoveOn} 
                    />
                </View> 
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex:1, 
        alignItems: 'center',
        justifyContent:'center',
        width:"100%",
        padding:30
    },
    emoji:{
        fontSize:78
    }, 
    title:{
        fontFamily:fonts.heading, 
        fontSize:24, 
        textAlign:'center',
        color:colors.heading,
        marginTop:20, 
        lineHeight: 32
    }, 
    subtitle:{
        textAlign:'center', 
        fontSize: 18,
        paddingVertical:10,
        color: colors.heading,
        fontFamily: fonts.text
    },
    footer: {
        marginTop:20,
        width:"100%",
        paddingHorizontal:50
    }
})