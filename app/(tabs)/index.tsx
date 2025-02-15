import { Link } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi From Prathamesh</Text>
      {/* <Link href={'/about'} style={styles.button}>
        Go to About 1
      </Link> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
  },
  button: {
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
})
