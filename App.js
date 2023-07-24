import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Drawer/Profile';
import Navi from './pages/navi'
import About from './pages/about'
import Contact from './pages/contact'
import HomePage from './pages/screen'
import Test from './pages/test'
import Work from './pages/work'
import Setting from './Drawer/Settings';
import Goldenball from './pages/goldenball';
import Navbar from './pages/navbar';

function Navigate() {

  
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name="Home" component={Navi}/>
      <Stack.Screen name="about" component={About} />
      <Stack.Screen name="homepage" component={HomePage} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="test" component={Test} />      
      <Stack.Screen name="work" component={Work} />
      <Stack.Screen name="gold" component={Goldenball} />
    </Stack.Navigator>
  )
}

function Drawer() {

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator  screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Drawer.Screen name="HOME" component={Navigate}/>
      <Drawer.Screen name="PROFILE" component={Profile} />
      <Drawer.Screen name="SETTING" component={Setting} />
    </Drawer.Navigator>
  );
}

export default function App(){

  return(
    <NavigationContainer>
      <Navbar/>
      <Drawer/>
    </NavigationContainer>
  )
}

