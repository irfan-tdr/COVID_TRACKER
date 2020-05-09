import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Global from './src/components/Global';
import Local from './src/components/Local';
import TitleApp from './src/components/TitleApp';

class App extends Component {

  componentDidMount(){

  }
  render(){
    return (
      <View style= {styles.container}>
        <View style={styles.boxtitle}>
        </View>
        <View style={styles.boxtitle}>
            <TitleApp/>
        </View>
        <View style= {styles.box1}>
          <View style={styles.titlePlace}>
              <Text style={styles.titleText}>Global</Text>
          </View>
          <Global/>
        </View>
        <View style= {styles.box2}>
          <Local/>
        </View>
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#778899',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  boxtitle:{
    flex:0.5,
    alignItems: 'center'
  },
  box1:{
    flex: 3,
    backgroundColor: 'lightslategray',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  box2: {
    flex: 10,
    backgroundColor: 'lightslategray'
  },
  titleText: {
    fontSize: 24,
    fontWeight:'bold',
  },
  titlePlace: {
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});


export default App;