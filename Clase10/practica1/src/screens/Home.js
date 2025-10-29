import React, { Component } from "react";
import { db, auth } from "../FireBase/config";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Posts from "../components/Posts";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        db.collection("posts").onSnapshot(
            docs => {
                let postsArray = [];
                docs.forEach(doc => {
                    postsArray.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                    this.setState({
                        posts: postsArray
                    });
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Posts data={item.data} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4c9d52ff",
        padding: 10,
    },
    title: {
        color: "#043010ff",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    postContainer: {
        backgroundColor: "#39933fff",
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
    },
    postEmail: {
        fontWeight: "bold",
        color: "#043010ff",
    },
    postText: {
        marginTop: 6,
        fontSize: 16,
        color: "#333",
    },
});

export default Home;