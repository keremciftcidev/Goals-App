
import {Pressable, StyleSheet,Text } from "react-native";

function GoalItem (props) {
  return (
    <Pressable 
    onPress={props.onDeleteItem.bind(this,props.id)}
    style={({pressed})=>pressed && styles.pressedItem}
    >
    <Text style={styles.goalItem}>{props.text} </Text>
    </Pressable>
  )
    

}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        backgroundColor: "#714eca",
        borderRadius: 6,
        color: "white",
      },
      pressedItem:{
        opacity:0.5
      }
})
