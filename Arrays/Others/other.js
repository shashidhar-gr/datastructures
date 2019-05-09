import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

export default class Welcome extends Component {

    constructor(props) {
        super(props)
    }

    onLogin = () => {
        this.props.navigation.navigate('Login')
    }

    onRegister = () => {
        this.props.navigation.navigate('UserRegistration')
    }

    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.logoContainer} >
                    <Image
                      source={require('../../../utils/images/Logo.png')}
                    />
                </View>
                <View style = {styles.textContainer}>
                    <Text h4>Welcome</Text>
                    <Text>Create an account and start eating healthy food!</Text>
                </View>
                <View style = {styles.registerButtonContainer}>
                    <Button
                        title = "Get Started"
                        buttonStyle = {styles.registerButton}
                    />
                    <View style = {styles.loginButtonContainer}>
                        <Text>
                            Already have an account?
                        </Text>
                        <Button
                            title = "Login"
                            type = 'clear'
                            buttonStyle = {styles.loginButton}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 180
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      maxHeight: 100
    },
    registerButtonContainer: {
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
    },
    loginButtonContainer: {
            flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
        },
  registerButton: {
      marginTop: 50,
      width: 380,
      backgroundColor: '#27AE60'
    }
})

