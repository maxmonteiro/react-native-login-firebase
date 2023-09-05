import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({ route }) {
  return (
    <View>
      <Text>Meu nome é: {route.params?.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})