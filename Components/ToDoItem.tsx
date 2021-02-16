import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {BLUE, GREY, LIGHT_BLUE} from '../contants/colors'
import { EvilIcons, Octicons, AntDesign } from '@expo/vector-icons'; 
import PropTypes from 'prop-types'

type TagProps = {
    letter : string,
    color : string
}

type ToDoItemProps = {
    title : string,
    daysLeft : string,
    isComplete : boolean,
    tags : TagProps[]
}

const Tag = ({letter,color} : TagProps) => {

    const tagStyles = StyleSheet.create({
        tag : {
            width : widthPercentageToDP(8),
            height : widthPercentageToDP(8),
            backgroundColor : color,
            borderRadius : widthPercentageToDP(5),
            alignItems : 'center',
            justifyContent : 'center',
            marginLeft : widthPercentageToDP(2)
        },
        text : {
            fontSize : widthPercentageToDP(3.5),
            fontWeight : 'bold',
            color : 'white'
        }
    })

    return(
        <View style = {tagStyles.tag} >
            <Text style = {tagStyles.text} >{letter}</Text>
        </View>
    )
}

const ToDoItem = ({title,daysLeft,tags,isComplete} : ToDoItemProps) => {

    const styles = StyleSheet.create({
        icon : {
            marginRight : widthPercentageToDP(3)
        },
        container : {
            flexDirection : 'row',
            alignItems : 'center',        
            backgroundColor : 'white',
            borderRadius : widthPercentageToDP(1),
            marginLeft : widthPercentageToDP(10),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            borderWidth : isComplete ? widthPercentageToDP(0.5) : 0,
            borderColor : isComplete ? "orange" : 'transparent',
            shadowRadius: 2.22,
            elevation: 3,
            padding : widthPercentageToDP(3),
            marginBottom : widthPercentageToDP(3)
        },
        titleText : {
            fontSize : widthPercentageToDP(4),
            color : isComplete ? "orange" : "black",
            fontWeight : 'bold'
        },
        textStyle : {
            color : GREY,
            fontSize : widthPercentageToDP(3),
        }
    })

    return(
        
        <View style = {styles.container} >
            <View style = {{
                marginLeft : widthPercentageToDP(-8)
            }} >
                <View
                    style = {{
                        width : widthPercentageToDP(10),
                        height : widthPercentageToDP(10),
                        backgroundColor : isComplete ? "orange" : LIGHT_BLUE,
                        justifyContent : 'center',
                        alignItems : 'center',
                        borderRadius : widthPercentageToDP(5)
                    }}
                >
                    <AntDesign name="check" size={widthPercentageToDP(7)} color= {isComplete ? "white" : "black"} />
                </View>
            </View>
            <View style = {{flex : 1,marginLeft : widthPercentageToDP(3)}} >
                <Text style = {styles.titleText} >{title}</Text>
                <View style = {{flexDirection : 'row',alignItems : 'center',marginBottom : widthPercentageToDP(3)}} >
                    <EvilIcons name="clock" style = {{marginRight : widthPercentageToDP(1)}} size={widthPercentageToDP(4)} color={GREY} />
                    <Text style = {styles.textStyle} >{daysLeft}</Text>
                </View>
                <View style = {{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}} >
                <View style = {{flexDirection : 'row'}} >
                    <EvilIcons style = {styles.icon} name="comment" size={widthPercentageToDP(5)} color={GREY} />
                    <Octicons style = {styles.icon} name="tasklist" size={widthPercentageToDP(4)} color={GREY} />
                    <AntDesign style = {styles.icon} name="staro" size={widthPercentageToDP(4)} color={GREY} />
                </View>
                <View style = {{flexDirection : 'row'}} >
                    {tags.map((tag : TagProps,index : number)=>
                        <Tag {...tag} key = {index} />
                    )}
                </View>
                </View>
            </View>
        </View>
    )
}



export default ToDoItem