import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
    return (
        <Container>
            <StatusBar barStyle='light-content' />
            <PhoBackground source={require("./assets/pho.png")}>
                <SafeAreaView>
                    <MenuBar>
                        <Back>
                            <AntDesign
                                name='arrowleft'
                                size={30}
                                color='#000'
                            />
                            <Text style={{ marginLeft: 10, color: "#000" }}>
                                Back
                            </Text>
                        </Back>
                    </MenuBar>
                </SafeAreaView>
            </PhoBackground>
            <TitleText>Pho To Go</TitleText>

			<OrderButton title="Order Now" ></OrderButton>
        </Container>
    );
}

const Container = styled.View`
    display: flex;
    height: 100%;
    margin-top: 10%;
`;

const TitleText = styled.Text`
    font-size: 25px;
    text-align: center;
`;

const PhoBackground = styled.ImageBackground`
    width: 100%;
    height: 75px;
`;

const MenuBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
`;

const Back = styled.View`
    flex-direction: row;
    align-items: center;
`;

const OrderButton = styled.Button`
max-width: 30px;
overflow: hidden;
background-color: red;
`