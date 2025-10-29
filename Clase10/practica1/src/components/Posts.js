import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Posts(props) {
    return (
        <View style={styles.postContainer}>
            <Text style={styles.postEmail}>{props.data.email}</Text>
            <Text style={styles.postText}>{props.data.texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: "#c9e6cbff",
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
    },
    postEmail: {
        fontWeight: "bold",
        color: '#156110ff',
    },
    postText: {
        marginTop: 6,
        fontSize: 16,
        color: "#333",
    },
});

export default Posts;