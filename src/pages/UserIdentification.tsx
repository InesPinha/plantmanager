import React, { useState }  from 'react'; 
import {
    SafeAreaView, 
    Text,  
    StyleSheet,  
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native';  
import {useNavigation} from '@react-navigation/core'

import {Button} from '../components/Button'
 
import colors from '../styles/colors'
import fonts from '../styles/fonts'

 
export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false); 
    const [isFilled, setIsFilled] = useState(false); 
    const [name, setName] = useState<string>(); 

    const navigation = useNavigation();
    
    function handleSubmit(){
        navigation.navigate("Confirmation")
    }



    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name)
    }
    function handleInputFocus(){
        setIsFocused(true)
    }
    function handleInputChange(value:string){
        setIsFilled(!!value)
        setName(value)
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === "ios"? 'padding':'height'}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        
                        <Text style={styles.emoji}>
                            {isFilled? '😊':'🧐'}
                        </Text>
                        <Text style={styles.title}>
                            Como te posso {"\n"} chamar?
                        </Text> 
                        
                        <TextInput 
                            style={[styles.input,
                                (isFocused || isFilled) && {borderColor:colors.green}
                            ]}
                            placeholder="Escreve o teu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}>

                        </TextInput>
                        <View style={styles.footer}>
                            <Button title="Confirmar" onPress={handleSubmit}></Button>
                        </View>
                </View> 
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width:"100%"
    },
    content:{
        flex:1, 
        width:"100%"
    },
    form:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:54
    },
    emoji:{
        fontSize:54
    },
    input:{
        borderBottomWidth:1,
        borderColor: colors.gray,
        color: colors.heading,
        width:"100%",
        fontSize:18,
        marginTop:50,
        padding:10,
        textAlign:'center'

    }, 
    title:{
        fontFamily:fonts.heading, 
        fontSize:24, 
        textAlign:'center',
        color:colors.heading,
        marginTop:20, 
        lineHeight: 32
    },
    footer: {
        marginTop:40,
        width:"100%",
        paddingHorizontal:20
    }
})