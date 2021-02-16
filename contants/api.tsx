import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import React from 'react'
import { widthPercentageToDP } from "react-native-responsive-screen";

export const menuList: {title: string ,icon : JSX.Element,active : boolean}[] = [
    {
        title : "Calender",
        icon : <AntDesign name="calendar" color = "white" size = {widthPercentageToDP(5)} />,
        active : true
    },
    {
        title : "Daily",
        icon : <MaterialIcons name="today" size = {widthPercentageToDP(5)} />,
        active : false

    },
    {
        title : "List",
        icon : <FontAwesome name="list-ul" size = {widthPercentageToDP(5)} />,
        active : false

    },
    {
        title : "Grant",
        icon : <AntDesign name="linechart"size = {widthPercentageToDP(5)} />,
        active : false
    },
]

type TagProps = {
    letter : string,
    color : string
}

export const tasks: {title : string,isComplete : boolean,daysLeft : string,tags : TagProps[]} [] = [
    {
        title : "Refinement (Based on Feedback)",
        daysLeft : "3 days left",
        isComplete : false,
        tags : [
            {
                letter : "A",
                color : "orange"
            }
        ]
    },
    {
        title : "Final Design Approval",
        daysLeft : "Today",
        isComplete : true,
        tags : [
            {
                letter : "B",
                color : "orange"
            },
            {
                letter : "C",
                color : "green"
            }
        ]
    }
]