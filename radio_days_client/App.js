import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import SongListScreen from "./src/screens/SongListScreen";
import SongListScreen2 from "./src/screens/SongListScreen2";
import PlaySongScreen from "./src/screens/PlaySongScreen";
import ContestScreen from "./src/screens/ContestScreen";
import ArtistSongListScreen from "./src/screens/ArtistSongListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ArtistSongList: ArtistSongListScreen,
    List: ListScreen,
    SongList: SongListScreen,
    SongList2: SongListScreen2,
    PlaySong: PlaySongScreen,
    Contest: ContestScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Radio Days",
      title: "Stations",
      title: "Song List",
      title: "Content"
    }
  }
);

export default createAppContainer(navigator);
