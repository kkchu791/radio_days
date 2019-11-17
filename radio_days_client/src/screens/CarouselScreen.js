import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import all_american_1 from '../assets/images/all_american_1.png';
import all_american_2 from '../assets/images/all_american_2.png';
import all_american_3 from '../assets/images/all_american_3.png';
import all_american_4 from '../assets/images/all_american_4.png';


const CarouselScreen = (props) => {
  const entries = [
    {title: "All American Rejects", index: 1, image: all_american_1},
    {title: "Sing to Win Free Tickets", index: 2, image: all_american_2 },
    {title: "Wait for the countdown...", index: 3, image: all_american_3},
    {title: "Go for it!", index: 4, image: all_american_4},
  ]

  const getImageSize = () => {
    const { width , height } = Dimensions.get('window');
    return {width, height}
  }

  const renderItem = ({item, index}) => {
    console.log(item, "item")
    console.log(getImageSize(), "getImageSize")
    return (
       <View style={styles.slide}>
          <Text style={styles.title}>{ item["title"] }</Text>
          <Image
            source={item["image"]}
            style={getImageSize()}
          />
       </View>
    );
  }

  return (
    <Carousel
      ref={(c) => { this._carousel = c; }}
      data={entries}
      renderItem={renderItem}
      sliderWidth={500}
      itemWidth={1000}
      loop={true}
      autoplay={true}
      autoplayDelay={1000}
      autoplayInterval={3000}
    />
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    position: 'absolute',
    zIndex: 100,
    color: "white",
    backgroundColor: 'orange',
  },
});

export default CarouselScreen;
