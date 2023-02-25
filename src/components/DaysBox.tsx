import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
interface DaysBoxProps {
    title: string
    choseDay: (day: string) => void
    selectDay: string | undefined,
    index: string
}
const DaysBox = (props: DaysBoxProps) => {
    const { title, choseDay, selectDay, index } = props
    return (
        <TouchableOpacity onPress={() => choseDay(index)}>
            <View style={[styles.mainContainer, selectDay === index && { backgroundColor: '#4C9AB4' }]}>
                <Text style={[styles.textStyle, selectDay === index && { color: 'white' }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DaysBox

const styles = StyleSheet.create({
    mainContainer: { backgroundColor: "white", paddingHorizontal: 40, paddingVertical: 5 },
    textStyle: { color: "#4C9AB4" }

})