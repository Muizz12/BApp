import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import SelectDropdown from 'react-native-select-dropdown'
interface DropDownProps {
    data: string[]
}
const Dropdown = (props: DropDownProps) => {
    const { data } = props
    return (
        <View>
            <SelectDropdown
                data={data}
                onSelect={(selectedItem: any, index: any) => {
                    console.log(selectedItem, index)
                }}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                renderDropdownIcon={() => (<Icon name="chevron-down" style={styles.iconStyle} />)}
                selectedRowStyle={styles.selectedRowStyle}
                selectedRowTextStyle={styles.selectedRowTextStyle}
                rowTextStyle={styles.rowTextStyle}
                rowStyle={styles.rowStyle}
                defaultValue={data[0]}
                buttonTextAfterSelection={(selectedItem: any, index: any) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item: any, index: any) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    buttonStyle: { borderColor: '#4C9AB4', borderWidth: 1, height: 30, width: 150 },
    buttonTextStyle: { color: '#4C9AB4', fontSize: 12 },
    iconStyle: { color: "#4C9AB4" },
    selectedRowStyle: { backgroundColor: "#4C9AB4" },
    selectedRowTextStyle: { color: "white" },
    rowTextStyle: { fontSize: 12, color: "#4C9AB4" },
    rowStyle: { backgroundColor: "white" }
})