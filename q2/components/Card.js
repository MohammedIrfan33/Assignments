import { StyleSheet, Text, View, Image} from 'react-native';

function Card({title,overAll,today,image}) {
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={{width:80,height:80}}/>
                </View>
                <View>
                    <Text style={styles.boldWhiteText}>{title}</Text>
                    <Text style={styles.whiteText}>OverAll:{overAll}</Text>
                    <Text style={styles.whiteText}>Today:{today}</Text>
                </View>
            </View>
        </View>
    );  
} 

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#006C45',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:25,
        borderRadius:10,
        padding:15,
        
        
    },
    imageContainer:{
        padding:10
    },
    boldWhiteText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'800'
    },
    whiteText:{
        color:'#fff',
        fontSize:13,
        fontWeight:'600',
        textAlign:'right',
        marginTop:5
    }
    
})

export default Card;