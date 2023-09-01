import React from 'react'
import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {
  return (
    <KeyboardAvoidingView>
      <View>
        <Image source={require('./src/assets/logo-m_128.png')} />
      </View>

      <View>
        <TextInput 
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput 
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity>
          <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
