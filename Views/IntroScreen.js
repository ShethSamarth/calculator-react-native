import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import logo from "../assets/logo.png"

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.text}>Calculator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
    fontWeight: "900",
  },
})

export default IntroScreen
