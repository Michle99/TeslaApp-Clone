import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.title}>Location</Text>
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

export default LocationScreen