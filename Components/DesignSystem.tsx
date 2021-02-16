import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { GREY } from '../contants/colors';
import MenuItem from './MenuItem'
import {menuList} from '../contants/api'

const DesignSystem = () => {
    return(
        <View style = {styles.container} > 
        <View style = {styles.containerHeader} >
            <View style = {styles.iconContainer} >
                <AntDesign size = {widthPercentageToDP(7)} color = {GREY} name = "antdesign" />
            </View>
            <Text style = {styles.textStyle} >Design System</Text>
        </View>
        <View style = {styles.menuList} >
            {menuList.map((menu,index)=>
                <MenuItem {...menu} key = {index} />    
            )}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuList : {
        flexDirection : 'row',
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

export default DesignSystem