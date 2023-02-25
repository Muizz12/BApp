import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const BorderHorizontal = () => {
    return (
        <View style={styles.horizontalBorder}>
        </View>
    )
}

export default BorderHorizontal

const styles = StyleSheet.create({
    horizontalBorder: { borderWidth: 0.5, width: "100%", marginTop: 5, borderColor: "#B2CBD3" }
})