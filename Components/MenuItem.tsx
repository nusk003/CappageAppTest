import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {BLUE, GREY} from '../contants/colors'
import PropTypes from 'prop-types'

type MenuItemProps = {
    title : string ,
    icon : JSX.Element,
    active : boolean
}

const MenuItem = ({title,icon,active}:MenuItemProps) => {

    const styles = StyleSheet.create({
        containerIcon : {
            padding : widthPercentageToDP(3),
            backgroundColor : active ? BLUE : 'white',
            width : widthPercentageToDP(15),
            height : widthPercentageToDP(15),
            borderRadius : widthPercentageToDP(10),
            justifyContent : 'center',
            alignItems : 'center',
            shadowColor: BLUE,
            shadowOffset: {
                width: 8,
                height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
    
            elevation:25,
        },
        container : {
            alignItems : 'center',
            marginHorizontal : widthPercentageToDP(3)
        },
        textStyle : {
            color : active ? BLUE : GREY,
            fontSize : widthPercentageToDP(3.5),
            marginTop : widthPercentageToDP(1)
        }
    })


    return(
        <View style = {styles.container} >
        <View style = {styles.containerIcon} >  
            {icon}
        </View>
        <Text style = {styles.textStyle} >{title}</Text>
        </View>
    )
}



export default MenuItem