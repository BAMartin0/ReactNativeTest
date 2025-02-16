import '../../global.css';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const newBookTitle = "the power of a praying wife"

  const fetchBook = async (newBook) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newBookTitle}`)

      // Update state with the first book result
      if (response.data.items && response.data.items.length > 0) {
        setBook(response.data.items[0].volumeInfo); 
      } else {
        setBook(null); // No books found
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }; 

  useEffect(() => {
    fetchBook();
  }, []);



  return (
    //page container
    <SafeAreaProvider >
      <View className="flex-1 bg-primary">
      {/*Header*/}
        <Text className="text-6xl self-center font-thin mt-20 tracking-tighter leading-tight">Lit & Liberated</Text>
        {/*Book of the Month Container*/}
        <View className="flex-row justify-around w-full mt-8">
          <View> 
            <Image source={{ uri: book?.imageLinks?.thumbnail }} className="w-40 h-60" resizeMode='cover'></Image>
            <Text>Rating</Text>
          </View>
          <View className="flex-col justify-between w-1/2">
            <Text className="font-extrabold text-2xl">Book of the Month</Text>
            <Text className="mt-4 text-xs text-gray-700"> { book?.description } </Text>
            
          </View>
        </View> 
        
          {/*SignIn Container*/}
          <View className="items-center mt-20 mb-40">
            <View className="justify-between w-3/5 self-center rounded-md py-2 bg-secondary-100 shadow-lg elevation-20"> 
              <Text className="text-xl font-bold text-center mb-4">Sign In</Text>
              
              <TextInput placeholder="Email" keyboardType='email-address' className="bg-secondary-200 rounded-full  border m-1 elevation-5"></TextInput>
              
              <TextInput placeholder="Password" secureTextEntry={true} className="bg-secondary-200 rounded-full mt-4 border m-1 shadow-lg elevation-5"></TextInput>
            

              <Link href="/profile" asChild>
                <TouchableOpacity className="bg-secondary-200 py-3 rounded-full text-center shadow-md mt-6 active:opacity-75">
                  <Text className="text-lg font-semibold text-center dark:text-gray-900"> Log In </Text>
                </TouchableOpacity>
              </Link>
            </View>
            <Text className="mt-4 text-gray-600 dark:text-gray-300">Don't have an account? <Link className='underline' href="/signup">Sign Up</Link></Text>
          </View>
        </View>
      </SafeAreaProvider>
  );
}

