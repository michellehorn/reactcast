import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/weather-icon.png')} // make sure to add this icon to assets
          style={styles.icon}
        />
        <Text style={styles.title}>ReactCast</Text>
        <Pressable style={styles.button} onPress={() => router.replace('/weather')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005b96',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    borderRadius: 40,
    paddingVertical: 60,
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 99,
    marginBottom: 30,
    borderRadius: 20,
    borderColor:'#005b96'
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#337ab7',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
