import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  // const {
  //   data: listings,
  //   error,
  //   loading,
  //   request: loadListings,
  // } = useApi(listingsApi.getListings);
  useEffect(() => {
    // loadListings();
    getListingsApi.request(1, 2, 3);
  }, []);
  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrive the listings.</AppText>
          <Button title="Retry" onPress={loadListings}></Button>
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
