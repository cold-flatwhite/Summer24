import React from 'react';
import { StyleSheet, View,Text, Button } from 'react-native';

const GoalItem = ({goal, deleteHandler}) => {
    return (
        <View key={goal.id} style={styles.textContainer}>
        <Text style={styles.textStyle}>{goal.text}</Text>
        <Button title="X" color="black" onPress={() => deleteHandler(goal.id)}/>
      </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        color: "darkmagenta",
        backgroundColor : "#aaa",
        marginVertical : 15,
        flexDirection :'row',
        padding: 15,
      },
      textStyle: {
        color: "darkmagenta",
        font: 25,
      },

})

export default GoalItem;
