import '../../global.css';
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const bookTitle = "house of eve";

  const fetchBook = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`);

      if (response.data.items && response.data.items.length > 0) {
        setBook(response.data.items[0].volumeInfo);
      } else {
        setBook(null);
      }
    } catch (err) {
      setError("Failed to load book data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1 bg-primary px-4">
        {/* Header */}
        <Text className="text-6xl font-thin mt-20 text-center tracking-tight leading-tight">Lit & Liberated</Text>

        {/* Book of the Month Section */}
        <View className="flex-row items-start justify-around w-full mt-10">
          <View className="items-center">
            {loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : book ? (
              <Image source={{ uri: book?.imageLinks?.thumbnail }} className="w-40 h-60 rounded-lg shadow-lg" resizeMode="cover" />
            ) : (
              <Text className="text-red-500">Book not found.</Text>
            )}
            <Text className="text-gray-800 mt-2 font-semibold">⭐ Rating: {book?.averageRating || "N/A"}</Text>
          </View>

          <View className="w-1/2">
            <Text className="text-2xl font-extrabold text-gray-900">Book of the Month</Text>
            <Text className="mt-4 text-xs text-gray-700">
              {book?.description ? `${book.description.substring(0, 500)}...` : "No description available."}
            </Text>
          </View>
        </View>

        {/* Sign In Section */}
        <View className="items-center mt-20 mb-40">
          <View className="w-3/5 bg-secondary-100 p-6 rounded-md shadow-lg">
            <Text className="text-xl font-bold text-center mb-4">Sign In</Text>

            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              className="bg-secondary-200 rounded-full border p-3 text-gray-900"
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              className="bg-secondary-200 rounded-full border p-3 text-gray-900 mt-4"
            />

            <Link href="/homepage" asChild>
              <TouchableOpacity className="bg-secondary-200 py-3 rounded-full shadow-md mt-6 active:opacity-75">
                <Text className="text-lg font-semibold text-center text-gray-900">Log In</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text className="mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link className="underline text-secondary-500" href="/signup">
              Sign Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}


