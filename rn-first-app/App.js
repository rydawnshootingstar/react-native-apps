import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

import OrderButton from './components/OrderButton';

export default class App extends Component {
    render() {
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
				<OrderButton />
            </Container>
        );
    }
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

const OrderText = styled.Text`
    font-size: 22px;
    color: #ffffff;
    background-color: #f0f;
    border-radius: 10px;
    padding: 10px 10px;
    width: 30%;
    margin-left: 35%;
    text-align: center;
    &:hover {
        color: #000;
    }
`;
