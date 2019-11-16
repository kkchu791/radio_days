import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import SongListScreen from './src/screens/SongListScreen';
import PlaySongScreen from './src/screens/PlaySongScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    SongList: SongListScreen,
    PlaySong: PlaySongScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Radio Days'
    }
  }
);

export default createAppContainer(navigator);
