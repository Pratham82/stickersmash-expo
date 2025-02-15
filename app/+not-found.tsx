import { Link, Stack } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Route Not Found 404' }} />
      <View style={styles.container}>
        {' '}
        <Text style={styles.text}>404 Route Not Found</Text>
        <Link href={'/'} style={styles.button}>
          Go to Home
        </Link>
      </View>
    </>
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
