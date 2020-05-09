import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TitleApp = () => {
     const title = <Text style={styles.container}>DATA COVID-19 GLOBAL & INDONESIA</Text>

return(
    <View>
        {title}
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        color: 'black',
        fontWeight:'bold',
        alignItems:'center'
    }
})
export default TitleApp;