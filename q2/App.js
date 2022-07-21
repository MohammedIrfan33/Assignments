import { StyleSheet, Text, View,SafeAreaView,Image,StatusBar } from 'react-native';
import Card from './components/Card';
import Header from './components/header';
import Profile from './components/profile';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#006C45' />
      {/* header componente */}
      <Header/>
      {/* profile component details section */}
      <Profile/>
      {/* telephone details card */}
      <Card title='TELEPHONE CALLS' image={require('./assets/images/telephone.png')} overAll='75' today='10'/>
      {/* whats app details card */}
      <Card title='WHATSAPP' image={require('./assets/images/whatsapp.png')} overAll='75' today='10'/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F3FFF6',  
  },
});


export default App;



