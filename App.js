import React from 'react'
import {
  View,
  KeyboardAvoidingView,
  Image,
} from 'react-native'

export default function App() {
  return (
    <KeyboardAvoidingView>
      <View>
        <Image source={require('./src/assets/logo-m_128.png')} />
      </View>
    </KeyboardAvoidingView>
  );
}
