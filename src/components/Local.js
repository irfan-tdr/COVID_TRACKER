import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


class Local extends React.Component{
    constructor(){
        super();

        this.state = {
            Data: [],
            refreshing: false
        }
    }

    renderItem = ({item}) => (
        <View style= {styles.container}>
            <View style = {styles.box1}>
                <Text>{item.provinsi}</Text>
            </View>
            <View style= {styles.confirmedBox}>
                <Text style= {styles.textbox1}>{item.kasusPosi}</Text>
            </View>
            <View style= {styles.recoveredBox}>
                <Text style= {styles.textbox1}>{item.kasusSemb}</Text>
            </View>
            <View style= {styles.deathBox}>
                <Text style= {styles.textbox1}>{item.kasusMeni}</Text>
            </View>
            
        </View>
    )

    onRefresh = () => {
        this.getDataApi();
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        this.setState({ refreshing: true })

        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi');
        const json = await response.json();
        this.setState({ Data: json, refreshing: false})
        console.log(json)
    }

    render(){
        console.log(this.state.Data)
        return(
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style= {styles.textbox}>Indonesia</Text>
                </View>
                <FlatList
                    data={this.state.Data.data}
                    keyExtractor={item => item.fid.toString()}
                    renderItem= {this.renderItem}
                    refreshing= {this.state.refreshing}
                    onRefresh= {this.onRefresh}
                    showVerticalScrollIndicaton= {false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: '#000',
        borderRadius: 8,
        backgroundColor: "lightslategray",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textbox:{
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        alignItems: 'center'
    },
    textbox1:{
        color: 'white',
    },
    box1: {
        height: 20,
        width: 200,
    },
    confirmedBox: {
        height: 20,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'slategray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    recoveredBox: {
        height: 20,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'darkslategray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deathBox: {
        height: 20,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'dimgray',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Local;