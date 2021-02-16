import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';
import {widthPercentageToDP} from 'react-native-responsive-screen'

const Header = () => {
    return(
        <View style = {styles.container} >
            <View style = {styles.iconContainer} >
                <FontAwesome size = {widthPercentageToDP(7)} name = "bars" />
            </View>
            <Text style = {styles.textStyle} >ToDo List</Text>
            <View style = {styles.iconContainer} >
                <FontAwesome name = "external-link" size={24} color="black" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        marginTop : 25,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,

        elevation: 20
    },
    textStyle : {
        fontSize : widthPercentageToDP(4),
        fontWeight : 'bold'
    },
    iconContainer : {
        padding : widthPercentageToDP(3)
    }
})

export default Header