import React from 'react';
import LogoImg from '../../assets/logo.png'
import {Image, KeyboardAvoidingView, Platform, View, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';
import {useNavigation} from '@react-navigation/native';
const SignIn: React.FC = () => {

    const navigation = useNavigation();
    return (
        <>
        <KeyboardAvoidingView 
        style={{flex:1}}
        behavior = {Platform.OS === 'ios' ? 'padding': undefined} 
        enabled>
            <ScrollView
            contentContainerStyle={{flex:1}}
            keyboardShouldPersistTaps= "handled">
                {/* esse handled faz com q o teclado suma se tocar fora da area dos campos e dele mesmo */}
                <Container>
                    <Image source={LogoImg}/>
                    {/* colocada a view pra que o KeyboardAvoidingView nao quebrasse a estilizacao de textos. A view protegeno deslocamento */}
                    <View> 
                        <Title>Faca seu login</Title>
                    </View>
                    

                    <Input name="email" icon="mail" placeholder="Email"/>
                    <Input name="password" icon="lock" placeholder="Senha"/>
                    <Button onPress={() => {console.log('deu')}}>
                        Entrar
                    </Button>

                    <ForgotPassword onPress={() => {console.log('deu')}}>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    </ForgotPassword>

                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
            
            <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
                <Icon name="log-in" size={20} color="#ff9000"/>
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        
       </>
    );
}

export default SignIn;