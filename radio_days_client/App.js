import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import SongListScreen from "./src/screens/SongListScreen";
import SongListScreen2 from "./src/screens/SongListScreen2";
import PlaySongScreen from "./src/screens/PlaySongScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    SongList: SongListScreen,
    SongList2: SongListScreen2,
    PlaySong: PlaySongScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Radio Days",
      title: "Stations",
      title: "Song List"
    }
  }
);

export default createAppContainer(navigator);
