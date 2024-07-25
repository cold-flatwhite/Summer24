import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { writeToDB } from '../Firebase/firesotreHelper';

const GoalUsers = ({id}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("the request was not successful");
                }
                const data = await response.json();
                data.forEach((userData) => {
                    writeToDB(userData, `goal/${id}/users`);
                });
                setUsers(data);
            } catch (err) {
                console.log("fetch user data ", err);
            }
        };
        fetchUserData();
    }, [])
    return (
        <View>
        <FlatList
            renderItem={({ item }) => {
              return <Text>{item.name}</Text>;
            }}
            data={users}
          />
        </View>
    );
}

const styles = StyleSheet.create({})

export default GoalUsers;
