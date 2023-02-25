import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WesprLogo } from './images'

export const Header = () => {
    return (
        <SafeAreaView style={styles.logoStyle}>
            <WesprLogo />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    logoStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",

    }
})