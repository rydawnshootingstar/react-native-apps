import React from 'react';
import styled from 'styled-components';
import { View, SafeAreaView, Text, Button } from "react-native";

const StyledButton = styled.Text`
background-color: #888888;
color: #fff;
width: 50%;
min-height: 150px;
text-align: center;
`;

export default ({className, children})=> (
<View>
    <StyledButton>Order Now</StyledButton>
</View>
)
