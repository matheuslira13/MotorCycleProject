import React, { useState } from "react";

import { FlatList, Text, View, Image } from "react-native";

import { styles } from './styles'

type CarouselProps = {
  data?: Array<{
    id: string
    img: string
  }>,
    name: string
    description: string;
}



const mockCarousel = [
  { 
    id: "1", 
    img: "https://static.kidomotos.com.br/public/kidomotos/imagens/produtos/carburador-completo-moto-titan-today-autotec-5278.jpg" 
  },
  { 
    id: "2", 
    img: "https://static.kidomotos.com.br/public/kidomotos/imagens/produtos/carburador-completo-moto-titan-today-autotec-5281.jpg" 
  },
  { 
    id: "3", 
    img: "https://static.kidomotos.com.br/public/kidomotos/imagens/produtos/carburador-completo-moto-titan-today-autotec-5280.jpg" 
  },
];
[
  {
    name: "Titan 150", 
    description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eius abore et dolore magna aliqua. Ut enim ad miniquatur",
  },
];




export const Carousel = ({data, name, description}: CarouselProps) => {
  
  
  const [selectedIndex, setSelectedIndex] = useState(0);



  const Circle = ({ selected }: { selected: boolean }) => {
    const style = {
      backgroundColor: selected ? "#DD736C" : "#fff",
    };

    return <View style={[styles.circle, style]} />;
  };



  return (
    <View style={styles.container}>
      <View style={{flex: 1,}}>
        <FlatList
          data={data}
          style={{ flex: 1 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onMomentumScrollEnd={(event) => {
            const index =
              event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width;
            setSelectedIndex(Math.round(index));
          }}
          renderItem={(item) => {
            return (
              <View>
                <Image source={{ uri: item.item.img }} style={styles.image} />
              </View>
            );
          }}
        />
        <View style={styles.circlesContainer}>
          {mockCarousel.map((img, index) => (
            <Circle key={index} selected={index === selectedIndex} />
          ))}
        </View>
      </View>
      <View>
        <Text style={styles.namePart}>{name}</Text>
        <Text style={styles.descriptionPart}>{description}</Text>
      </View>
    </View>
  );
};

