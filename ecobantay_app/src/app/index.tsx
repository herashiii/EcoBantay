import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function EcoBantayHome() {
  // This is our state. It remembers how many reports we've made, starting at 0.
  const [reports, setReports] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>EcoBantay</Text>
      <Text style={styles.subtitle}>Environmental Monitoring</Text>
      
      <View style={styles.card}>
        <Text style={styles.stats}>Active Reports: {reports}</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setReports(reports + 1)}
      >
        <Text style={styles.buttonText}>+ Log New Report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2e7d32', // A nice earthy green
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  stats: {
    fontSize: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});