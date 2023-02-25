import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { VenueName, DetailText } from './texts';
import { useNavigation } from '@react-navigation/native';

const Preview = ({
    item,
    onPress,
}: any) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ paddingHorizontal: 20, paddingTop: 10 }} onPress={() => navigation.navigate("detal")}>
            <Image source={require('../assets/images/Rectangle16.png')}
                style={{
                    ...styles.imageStyle,

                }} />
            <View style={{ marginTop: -80, }}>
                <VenueName title={item.title} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <DetailText title='15:00 - 23:45' />
                <DetailText title='Classical, Jazz' />
                <DetailText title='$$$' />
            </View>
        </TouchableOpacity>
    );
};

export default Preview

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 325,
        zIndex: -1,
    },
});