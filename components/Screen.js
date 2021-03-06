import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

export default function Screen({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
})
