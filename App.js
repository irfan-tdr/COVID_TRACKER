import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Global from './src/components/Global';
import styleapp from './src/components/styleapp';
//import Local from './src/components/Local';
//import TitleProject from './src/components/TitleProject';

class App extends Component {

  componentDidMount(){

  }
  
  render(){
    return (
       <View style= {styles.container}>
         <View style= {styles.box1}>
            <View style={styles.subPlace}>
                <Text style={styles.subText}>Global</Text>
            </View>
            <Global/>
         </View>
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  box1:{
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  subText: {
    fontSize: 24,
    fontWeight: 'normal'
  },
  subPlace: {
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});

export default App;