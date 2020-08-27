import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper'
import {Platform} from 'react-native';

export const Container = styled.View`
    flex:1;
    align-items :center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 160: 40}px; 
    // esse padding de 160 e pra android e 40 pra ios, pra empurrar mais as coisas p cima quando o teclado aparece
`;

export const Title = styled.Text`
    font-size : 24px;
    color: #f4ede8;
    font-family: 'RobotoSlab-Medium';
    margin: 64px 0 24px;    
`;

export const ForgotPassword = styled.TouchableOpacity `
    margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text `
    color: #f4ede8;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;
    
export const CreateAccountButton = styled.TouchableOpacity `
    bottom:0;
    position:absolute;
    width:100%;
    height: 60px;
    align-items: center;
    background-color: #312e38;
    border-top-width: 1px;
    border-color: #000;
    padding: 10px 0 ${16 + getBottomSpace()}px;
    
`;

export const CreateAccountButtonText = styled.Text `
    color: #f4ede8;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;