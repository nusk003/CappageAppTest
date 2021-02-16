import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { GREY, BLUE } from '../contants/colors';
import ToDoItem from './ToDoItem';
import { tasks } from '../contants/api';

const Drop = () => {
    return(
        <View style = {styles.container} > 
        <View style = {styles.containerHeader} >
            <View style = {styles.iconContainer} >
                <AntDesign color = {BLUE} size = {widthPercentageToDP(7)}  name="calendar"  />
            </View>
            <Text style = {styles.textStyle} >Drop 2</Text>
        </View>
        <View style = {styles.menuList} >
            {tasks.map((task,index)=>
                <ToDoItem {...task} key = {index} />
            )}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuList : {
        justifyContent : 'center',
        marginTop : widthPercentageToDP(3)
    },
    textStyle : {
        fontSize : widthPercentageToDP(5),
        fontWeight : 'bold'
    },
    iconContainer : {
        padding : widthPercentageToDP(3)
    },
    containerHeader : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    container : {
        padding : widthPercentageToDP(3)
    }
})

export default Drop