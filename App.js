import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Global from './src/components/Global';
import Local from './src/components/Local';

class App extends Component {

  componentDidMount(){

  }
  render(){
    return (
      <View style= {styles.container}>
        {/* <View style={styles.boxtitle}>
            <TitleProject/>
        </View> */}
        <View style= {styles.box1}>
          <View style={styles.subPlace}>
              <Text style={styles.subText}>Global</Text>
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
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  boxtitle:{
    flex:1,
    alignItems: 'center'
  },
  box1:{
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  box2: {
    flex: 10,
    backgroundColor: 'lightslategray'
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