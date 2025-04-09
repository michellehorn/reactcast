import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { fetchWeatherByCity } from '../services/weather';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [city, setCity] = useState<string>('Florianópolis');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadCityAndWeather();
  }, []);

  async function loadCityAndWeather() {
    try {
      setLoading(true);
      const storedCity = await AsyncStorage.getItem('selectedCity');
      const currentCity = storedCity || city;
      setCity(currentCity);
      const data = await fetchWeatherByCity(currentCity);
      setWeather(data);
    } catch (err) {
      console.warn('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.search} onPress={() => router.push('/search')}>
        <Ionicons name="search" size={48} color="#fff" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.city}>{weather?.name || 'Loading...'}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
      ) : weather ? (
        <View style={styles.content}>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
            style={styles.icon}
          />
          <Text style={styles.temp}>{Math.round(weather.main.temp)}°</Text>
          <Text style={styles.description}>{weather.weather[0].main}</Text>

          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>High</Text>
              <Text style={styles.detailValue}>{Math.round(weather.main.temp_max)}°</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Low</Text>
              <Text style={styles.detailValue}>{Math.round(weather.main.temp_min)}°</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Precip.</Text>
              <Text style={styles.detailValue}>0%</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.error}>Could not load weather.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005b96',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 24,
  },
  city: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  temp: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 40,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 12,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  error: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
  search: {
    position: 'absolute',
    top: 150,
    right: 30,
  },
});
