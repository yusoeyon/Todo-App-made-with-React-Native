import React,{Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component{
    state={
        isEditing: false,
        isCompleted: false
    };
    render(){
        const { isCompleted } = this.state;
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={this._toggleComplete}>
                <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
            </TouchableOpacity>
            <Text style={styles.text}> hello hello </Text>
        </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    }
}

const styles = StyleSheet.create({
    container:{
        width: width-60,
        borderBottomWidth: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: 'center',
    },
    circle:{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 15,
    },
    completedCircle:{
        borderColor: "#bbb",
    },
    uncompletedCircle:{
        borderColor: "red",
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    }
})