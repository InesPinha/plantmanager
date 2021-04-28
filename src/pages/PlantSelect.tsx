import React, { useEffect, useState }  from 'react'; 
import {
    ScrollView, 
    Text,  
    StyleSheet,  
    View,
    FlatList
} from 'react-native';   
 
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import {Header} from '../components/Header'
import {EnviromentButton} from '../components/EnviromentButton'
import {PlantCardPrimary} from '../components/PlantCardPrimary'
import api from '../services/api';

interface EnviromentsProps{
    key:string;
    title: string; 
}
interface PlantProps{
    id:string;
    name: string; 
    about:string;
    water_tips:string;
    photo: string;
    environments:[string];
    frequency:{
        times:number;
        repeat_every:string;
    }
}

export function PlantSelect(){ 
    const [enviroments, setEnviroments]=useState<EnviromentsProps[]>()
    const [plants, setPlants]=useState<PlantProps[]>()

    useEffect(()=>{
        async function fetchEnviroment() {
            const {data} = await api.get('plants_environments?_sort=title&asc')
            setEnviroments([
                {
                    key:'all',
                    title:'Todos'
                },
                ...data

            ])
        } 
        fetchEnviroment() 
    },[])
    

    useEffect(()=>{
        async function fetchPlants() {
            const {data} = await api.get('plants?_sort=name&asc')
            console.log(data); 
            setPlants(data)
        } 
        fetchPlants() 
    },[])
    

    return (
        <View style={styles.container}>  
            <View style={styles.header}>  
                <Header/>  
                <Text style={styles.title}>
                    Qual o tipo de ambiente 
                </Text> 
                <Text style={styles.subtitle}>
                    em queres por a tua planta?
                </Text> 
                <ScrollView>
                    <FlatList 
                        data={enviroments}
                        renderItem={({item})=>(
                            <EnviromentButton title={item.title}/>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.environmentList}
                    />
                </ScrollView> 
                <ScrollView 
                    style={styles.plants}
                    showsVerticalScrollIndicator={false}>
                    <FlatList 
                        data={plants}
                        renderItem={({item})=>(
                            <PlantCardPrimary data={item}/>
                        )} 
                        numColumns={2} 
                    />
                </ScrollView> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor:colors.background
    },  
    header:{
        paddingHorizontal:30
    },
    title:{
        fontFamily:fonts.heading,
        fontSize:17,  
        color:colors.heading,
        marginTop:15, 
        lineHeight: 20
    }, 
    subtitle:{ 
        fontSize: 17, 
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32,
        marginLeft: 32,
        paddingRight: 32
    },
    plants:{
       
    } 
    
})