import { View, Text, StyleSheet } from 'react-native'

const UpadateScreen = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Upadate Screen</Text>
          </View>
        </View>
      )
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#161818',
    },
        header: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eee',
        marginBottom: 8,
    }
});

export default UpadateScreen