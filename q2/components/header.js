import { View, Text, StyleSheet } from 'react-native'


function Header() {
    return (
        <View style={styles.haeder}>
            <Text style={styles.haederText}>Bayesian React Native Test</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    haeder: {
        backgroundColor: '#006C45',
        height: 60,
        alignItems: "center",
        justifyContent: 'center'
    },
    haederText: {
        fontSize: 18,
        fontWeight: '600',
        color: "#fff"
    }
});

export default Header;