import React from 'react';
import LogoImg from '../../assets/logo.png'
import {Image, KeyboardAvoidingView, Platform, View, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {Container, Title, BackToSignIn, BackToSignInText} from './styles';
import {useNavigation} from '@react-navigation/native';

const SignUp: React.FC = () => {
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
                    

                    <Input name="name" icon="user" placeholder="Nome"/>
                    <Input name="email" icon="mail" placeholder="Email"/>
                    <Input name="password" icon="lock" placeholder="Senha"/>
                    <Button onPress={() => {}}>
                        Registrar
                    </Button>

                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
            
            <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
                <Icon name="arrow-left" size={20} color="#ff9000"/>
                <BackToSignInText>Go home</BackToSignInText>
            </BackToSignIn>
        
       </>
    );
}

export default SignUp;