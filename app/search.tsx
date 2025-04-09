import { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { searchCities } from '../services/weather';

interface City {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.length >= 2) {
      handleSearch(query);
    } else {
      setResults([]);
    }
  }, [query]);

  async function handleSearch(text: string) {
    setLoading(true);
    try {
      const cities = await searchCities(text);
      setResults(cities);
    } catch (e) {
      console.warn('Search error:', e);
    } finally {
      setLoading(false);
    }
  }

  async function handleSelect(city: City) {
    await AsyncStorage.setItem('selectedCity', city.name);
    router.replace('/weather');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Search City</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Type a city..."
        placeholderTextColor="#aaa"
        value={query}
        onChangeText={setQuery}
      />

      {loading ? (
        <ActivityIndicator size="small" color="#fff" style={{ marginTop: 16 }} />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
              <Text style={styles.itemText}>{item.name}, {item.country}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005b96',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});
