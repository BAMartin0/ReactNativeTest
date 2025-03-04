import '../../global.css'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import TestAPI from '../components/test'

const profile = () => {
  const [bookTitle, setBookTitle] = useState(""); // State to store user input
  const [searchQuery, setSearchQuery] = useState(""); // State to trigger API search




  return (
    <ScrollView className="flex-1 bg-primary">
      {/* Header Section */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-secondary-500 rounded-b-2xl">
        <View>
          <Text className="text-2xl font-bold text-white">Hello, User! 👋🏾</Text>
          <Text className="text-lg text-gray-200">Welcome back to your book space</Text>
        </View>
        <Image 
          source={{ uri: 'https://via.placeholder.com/50' }} 
          className="w-12 h-12 rounded-full border-2 border-white"
        />
      </View>

      {/* Book Search Section */}
      <View className="flex-1 items-center justify-center bg-white m-4 p-6 rounded-2xl shadow-lg">
        <Text className="text-xl font-bold text-gray-800">Find a Book</Text>
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

      {/* Favorite Books Section */}
      <View className="m-4 p-4 bg-white rounded-2xl shadow-lg">
        <Text className="text-xl font-bold text-gray-800 mb-2">📚 Favorite Books</Text>
        <View className="flex-row flex-wrap gap-2">
          <TouchableOpacity className="bg-secondary-300 px-4 py-2 rounded-lg">
            <Text className="text-white">The Vanishing Half</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-secondary-300 px-4 py-2 rounded-lg">
            <Text className="text-white">Verity</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-secondary-300 px-4 py-2 rounded-lg">
            <Text className="text-white">The Housemaid</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reading Progress Section */}
      <View className="m-4 p-4 bg-white rounded-2xl shadow-lg">
        <Text className="text-xl font-bold text-gray-800 mb-2">📖 Reading Progress</Text>
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Currently Reading: **Self-Care for Black Women**</Text>
          <Text className="text-gray-800 font-bold">65% Complete</Text>
        </View>
        <View className="w-full bg-gray-300 h-3 rounded-full mt-2">
          <View className="w-2/3 bg-secondary-500 h-full rounded-full"></View>
        </View>
      </View>

      {/* Navigation Buttons */}
      <View className="flex-row justify-between m-4">
        <TouchableOpacity className="bg-primary-500 px-4 py-2 rounded-lg">
          <Text className="text-white">Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-lg">
          <Text className="text-white">Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default profile

