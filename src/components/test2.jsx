import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView, Modal, Button, TouchableOpacity, Image} from "react-native";
import axios from "axios";

const TestAPI2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=LongShot"
        );
        setData(response.data.items || []);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, []);

  const selectBook = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  return (
    <View className="mt-6 w-full px-6">
      <Text className="text-lg font-bold text-gray-800">Search Results:</Text>

      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text className="text-red-500">Error: {error}</Text>}

      <ScrollView>
        {data.length > 0 ? (
          data.map((book, index) => {
            const { title, authors, imageLinks } = book.volumeInfo || {};
            return (
              <TouchableOpacity key={index} onPress={() => selectBook(book)}>
                <View className="bg-gray-100 p-4 my-2 rounded-lg shadow">
                  <Text className="text-base font-semibold text-gray-700">
                    {title}
                  </Text>
                  {imageLinks?.thumbnail && (
                    <Image
                      source={{ uri: imageLinks.thumbnail }}
                      className="w-20 h-30 mt-2 rounded-md"
                      resizeMode="cover"
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text className="text-gray-500 mt-4">No books found</Text>
        )}
      </ScrollView>

      {/* Full Book Details Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View className="flex-1 bg-white p-6">
          {selectedBook && (
            <>
              <Text className="text-2xl font-bold">{selectedBook.volumeInfo.title}</Text>
              <Text className="text-lg text-gray-600 mt-2">
                By {selectedBook.volumeInfo.authors?.join(", ")}
              </Text>
              {selectedBook.volumeInfo.imageLinks?.thumbnail && (
                <Image
                  source={{ uri: selectedBook.volumeInfo.imageLinks.thumbnail }}
                  className="w-40 h-60 self-center my-4 rounded-lg"
                  resizeMode="cover"
                />
              )}
              <Text className="mt-4 text-gray-700">
                {selectedBook.volumeInfo.description || "No description available."}
              </Text>
            </>
          )}
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default TestAPI2;