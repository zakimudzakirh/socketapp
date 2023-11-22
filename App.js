/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import ChatScreen from './src/screens/ChatScreen';
import LoginScreen from './src/screens/LoginScreen';


const App = () => {
  const [screen, setScreen] = useState("login")
  const [socket, setSocket] = useState();
  const [username, setUsername] = useState("")

  useEffect(() => {
      if(!socket) {
        // const socket = io("http://10.243.211.24:8080", {
        // });
        const socket = io("http://10.217.101.168:5200", {
          auth: {
            token: "token-baru-nih"
          },
          extraHeaders: {
            name: "Zaki",
            "lat": -6.244508408620123,
            "lng": 106.79796262917517
          }
        });

        socket.on("set_id_user", data => {
          console.log("set_id_user", data)
          if(data?.id) {
            socket.on(data?.id, dataPrivate => {
              console.log("listen dari user lain", dataPrivate)
            })
          }
        })

        // socket.on("pickup_updated", {

        // })

        // socket.on("messageSendToUser", data => {
        //   console.log("data", data)
        //   // setUsers(users)sddwdw
        // })
        // socket.on("user3", data => {
        //   console.log("data", data)
        //   // setUsers(users)sddwdw
        // })
        setSocket(socket)
      }
      return () => {
        
      }
      
  }, [socket])

  // if(screen === "login") {
  //   return (
  //     <LoginScreen
  //       socket={socket}
  //       toChat={() => setScreen("chat")}
  //       username={username}
  //       setUsername={setUsername}
  //     />
  //   )
  // }

  return (
    <ChatScreen
      socket={socket}
    />
  );
};

export default App;
