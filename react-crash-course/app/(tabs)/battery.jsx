import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import { useGetDownlinkQuery } from "../../state/api"; // Assuming you're using RTK Query

const Battery = () => {
  // Using RTK Query hook to fetch the downlink data
  const { data = [], error, isLoading } = useGetDownlinkQuery();


  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error fetching data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Battery Data</Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Year: {item.year}</Text>
            <Text>Battery Voltage 1: {item.battery_cell_1_voltage}V</Text>
            <Text>Battery Voltage 2: {item.battery_cell_2_voltage}V</Text>
            {/* Display other fields as necessary */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default Battery;
