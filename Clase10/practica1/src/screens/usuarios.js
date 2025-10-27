import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { db } from "../FireBase/config";

export default class usuarios extends Component {
    constructor() {
        super()
        this.state = {
            usuarios: "",
            loading: true
        }
    }

    componentDidMount() {
        db.collection('users').onSnapshot(
            docs => {
                let users = [];
                docs.forEach(doc => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        usuarios: users,
                        loading: false
                    })
                })

            })
    }

    render() {
        return (
            <View>
                <Text>Usuarios</Text>
                <FlatList
                data = {this.state.usuarios}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Text>{item.data.email}</Text>}
                />

            </View>

        )
    }
}