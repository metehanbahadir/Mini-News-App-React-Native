import React from "react";
import { View, Text, Image, Button, Alert } from "react-native";
import styles from './NewsCard.style';

const NewsCard = ({news}) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{uri: news.imageUrl}} ></Image>
            <Text style={styles.title} >{news.title}</Text>
            <Text style={styles.description} >{news.description}</Text>
            <Text style={styles.author}>Yazar: {news.author}</Text>            
        </View>
    )
}

export default NewsCard;