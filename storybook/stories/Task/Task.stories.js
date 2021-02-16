import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import ToDoItem from '../../../Components/ToDoItem'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import CenterView from '../CenterView';

const completeTask = {
    title : "Refinement (Based on Feedback)",
    daysLeft : "3 days left",
    isComplete : true,
    tags : [
        {
            letter : "A",
            color : "orange"
        }
    ]
}

const inCompleteTask = {
    title : "Refinement (Based on Feedback)",
    daysLeft : "3 days left",
    isComplete : false,
    tags : [
        {
            letter : "A",
            color : "orange"
        }
    ]
}

storiesOf('Task', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('incompleted task', () => (
    <ToDoItem {...inCompleteTask} />
  ))
  .add('completed task', () => (
    <ToDoItem {...completeTask} />
  ))
