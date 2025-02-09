import '../../global.css';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';


{/*Functions needed : getBook getDescription getRating */}

export default function App() {
  // const [book, setBook] = useState(null);
  


  return (
    //page container
    <SafeAreaProvider >
      <View className="flex-1 bg-primary">
      {/*Header*/}
        <Text className="text-6xl self-center font-thin mt-20 tracking-tighter leading-tight">Lit & Liberated</Text>
        {/*Book of the Month Container*/}
        <View className="flex-row justify-around w-full mt-8">
          <View> 
            <Image source={require('../../assets/images/SelfCareForBlackWomen.jpg')} className="w-40 h-60" resizeMode='cover'></Image>
          </View>
          <View className="flex-col justify-between w-1/2">
            <Text className="font-extrabold text-2xl">Book of the Month</Text>
            <Text className="mt-4 text-xs text-gray-700">Book Description: this will be a description of the book fetched from the book api. Hopefully the description is pretty short and sweet because this space is very limited on a mobile phone application. What happens when the description is long? Keep typing to find out. Ohh, so the container just grows into other containers. Good thing we can make text smaller! </Text>
            <Text>Rating</Text>
          </View>
      </View> 
          {/*SignIn Container*/}
          <View className="items-center mt-20 mb-40">
            <View className="justify-between w-3/5 self-center rounded-md py-2 bg-secondary-100 shadow-lg elevation-10"> 
              <Text className="text-xl font-bold text-center mb-4">Sign In</Text>
              <TextInput placeholder="Email" keyboardType='email-address' className="bg-secondary-200 rounded-full  border m-1 elevation-5"></TextInput>
              <TextInput placeholder="Password" secureTextEntry={true} className="bg-secondary-200 rounded-full mt-4 border m-1 shadow-lg elevation-5"></TextInput>
              <Link className='border-2 rounded-full p-1 text-center m-2 mt-6 bg-secondary-200' href="/profile">Log In</Link>
            </View>
            <Text className="">Don't have an account? <Link className='underline' href="/signup">Sign Up</Link></Text>
          </View>
        </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
