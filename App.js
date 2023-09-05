import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}));

  useEffect(() => {

    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();
    
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 200,
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 200,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 200,
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 200,
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image 
          style={{
            width: logo.x,
            height: logo.y
          }}
          source={require('./src/assets/logo-m_128.png')} 
        />
      </View>

      <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y}
            ]
          }
        ]}
      >
        <TextInput 
          style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput 
          style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919",
  },

  containerLogo: {
    flex: 0,
    marginTop: '40%',
    justifyContent: "center",
  },

  container: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
    paddingBottom: 30
  },

  input: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginBottom: 15,
    padding: 10,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
  },

  btnSubmit: {
    backgroundColor: "#35aaff",
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText: {
    color: '#fff',
    fontSize: 18,
  },

  btnRegister: {
    marginTop: 10,
  },

  registerText: {
    color: '#fff',
  }
})