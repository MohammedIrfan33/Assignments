import {View,Text,Image,StyleSheet} from 'react-native';

function Profile() {
    return( 
      <View style={styles.profileContainer}>
        <View>
          <Image source={require('../assets/images/profile.png')} style={{ width: 100, height: 100 }} />
        </View>
        <View>
          <Text style={styles.boldGreenText}>Sumesh T P</Text>
          <Text style={styles.greenText}>Kalpatta</Text>
          <Text style={styles.greenText}>Wayanad</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    profileContainer:{
      margin:30,
      flexDirection:'row',
      justifyContent:'space-between',
      padding:15
      
    },
    boldGreenText:{
      fontSize:20,
      fontWeight:'500',
      color:'#006C45'
    },
    greenText:{
      fontSize:15,
      color:'#006C45',
      fontWeight:'400',
      textAlign:'right',
      marginTop:5
    }
  });

  export default Profile;