import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView} from "react-native";
import axios from "axios";

const TestAPI = ({ searchQuery }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      
    if (!searchQuery) return;

      const fetchBook = async () => {
      setLoading(true); // Start loading when fetching

      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        setData(response.data.items || []);
        setError(null); // Reset error state on success
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [searchQuery]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error) return <Text>Error: {error}</Text>;
  if (!data) return <Text className="text-gray-500">No data yet.</Text>;


  return (
     <ScrollView className="mt-6 w-full px-6">
      <Text className="text-lg font-bold text-gray-800">Search Results:</Text>
      {data.length > 0 ? (
        data.map((book, index) => (
          <View key={index} className="bg-gray-100 p-4 my-2 rounded-lg shadow">
            <Text className="text-base font-semibold text-gray-700">
              {book.volumeInfo.title}
            </Text>
          </View>
        ))
      ) : (
        <Text className="text-gray-500 mt-4">No books found</Text>
      )}
    </ScrollView>
  );
};



export default TestAPI;
