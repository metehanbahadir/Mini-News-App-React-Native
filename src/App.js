import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet, ScrollView, Image, Dimensions, Button } from 'react-native';
import NewsCard from "./components/NewsCard/NewsCard";
import news_data from './components/news_data.json';
import news_banner_data from './components/news_banner_data.json';

function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.headerText} >News</Text>      
      <FlatList
        ListHeaderComponent={() => <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            news_banner_data.map(bannerNews =>
              <Image style={styles.banner_image} source={{ uri: bannerNews.imageUrl }} />)
          }
        </ScrollView>}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  banner_image: {
    marginTop: 40,
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    paddingTop: 18,
    paddingLeft: 10,
  }, 
})

export default App;


