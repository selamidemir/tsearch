import React from "react";
import { TextInput, View } from "react-native";

import style from './SearchBox.style';

export default function SearchBox() {
    return (
        <View style={style.container}>
            <TextInput style={style.searchBox} placeholder='Search' />
        </View>
    )
}