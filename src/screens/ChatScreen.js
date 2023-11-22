import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'

const ChatScreen = props => {
    const { socket } = props
    const [chats, setChats] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(socket) {
            socket.on("user3", data => {
                console.log("data", data)
                // setUsers(users)sddwdw
            })
            console.log("Socket")
            // socket.on("messageSendToUser", data => {
            //     console.log("data", data)
            //     // setUsers(users)
            // })
        }
        return () => {
            // socket?.emit("disconnect", {
            //     "senderName": "user",
                
            // });
        }

    }, [socket])

    const onClick = () => {
        // socket?.disconnect({
        //     "client": "Disconnect Client Here"
        // });
        // socket?.off();
        socket?.emit("pickup_request", {
            "message": "Hello from user 3"
        });
    }

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'black'}}>
                <ScrollView>
                    {users.map((user, idx) => (
                        <View key={`user-${idx.toString()}`} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: 20, marginRight: 5 }} />
                            <Text style={{color: 'white'}}>{user.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text style={{color: 'black'}}>Chat</Text>
                <Text style={{color: 'black'}}>{chats}</Text>
                <TextInput />
                <Button title="testing" onPress={onClick}/>
            </View>
        </View>
    )
}

export default ChatScreen