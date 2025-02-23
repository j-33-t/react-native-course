import { View, Text , StyleSheet, ImageBackground} from "react-native";

import icedCoffee from '../../assets/images/coffee-background.jpg';

// This is the main component for the app, like html or jsx
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffee} resizeMode="cover" style={styles.image}>
        <View style={styles.backsplash}>
          <Text style={styles.text}>Coffee Shop</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default App;

// This is the styles for the app , like css
const styles = StyleSheet.create(
    {
        container: {
            flex: 1, 
            flexDirection: 'column',
            fontFamily: 'Times New Roman'
        },
        image: {
            width: '100%',
            height: '100%',
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center'
        },
        text: {
            padding: 20,
            color: 'white',
            fontSize: 42, 
            fontWeight: 'bold',
            textAlign: 'center'
        },
        backsplash: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }
    }
);