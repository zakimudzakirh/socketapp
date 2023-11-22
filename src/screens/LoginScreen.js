import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const LoginScreen = props => {
    const { toChat, socket, username, setUsername } = props

    const onClick = () => {
        // socket?.emit("new user", {
        //     "name": username,
        // });
        // toChat();
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Login</Text>
            <TextInput
                style={{ backgroundColor: 'white', width: 200, marginVertical: 10, color: 'black' }}
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
            />
            <Button 
                title="MASUK"
                onPress={onClick}
            />
        </View>
    )
}

export default LoginScreen