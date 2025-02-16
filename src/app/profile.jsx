import '../../global.css'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TestAPI from '../components/test'

const signIn = () => {
  const [bookTitle, setBookTitle] = useState(""); // State to store user input
  const [searchQuery, setSearchQuery] = useState(""); // State to trigger API search



  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-xl font-bold text-gray-800">Hello, User!</Text>
      <TextInput
        className="border border-gray-300 w-64 p-3 mt-4 rounded-lg text-lg"
        placeholder="Enter book title"
        value={bookTitle}
        onChangeText={setBookTitle}
      />
      <TouchableOpacity className="bg-secondary-200 px-6 py-3 mt-4 rounded-full" onPress={() => setSearchQuery(bookTitle)}>
        <Text className="text-white text-lg font-semibold">Search</Text>
      </TouchableOpacity>
      
      <TestAPI searchQuery={searchQuery} />
    </View>
  );
};

export default signIn

