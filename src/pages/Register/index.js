import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'

export default function Register({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
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

            <TextInput 
                style={styles.input}
                placeholder='Repetir senha'
                autoCorrect={false}
                onChangeText={() => {}}
            />

        <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={() =>  navigation.navigate('Home', { nome: 'Máximo' })}
        >
          <Text style={styles.submitText}>Criar conta</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },

    container: {
        marginTop: 20,
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
})