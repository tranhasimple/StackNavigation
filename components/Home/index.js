import axios from "axios";
import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen(props) {
  const [data, setData] = useState();
  const [flower, setFlower] = useState();

  const getData = async () => {
    await axios({
      method: "GET",
      url: "http://192.168.5.2:2403/api/v1/flowers/625cda9f4e99a47d008a8f1b",
    })
      .then((err) => {
        if (res) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //post data to API
  const postData = async () => {
    if (flower.trim().length > 0) {
      await axios({
        method: "POST",
        url: "http://192.168.5.2:2403/api/v1/flowers",
        data: {
          name: flower,
        },
      }).then((res) => {
        setFlower(null), getData();
      });

      useEffect(() => {
        getData();
      }, []);

      const render = ({ item, index }) => {
        return <View style={styles.listData}>
            <Text></Text>
        </View>;
      };
    }
  };
}

const styles = StyleSheet.create({
    listData:{
        flex: 1,
        width: "90%",
        borderWidth: 1,
        marginVertical: 4,
        alignSelf: "center",
        borderRadius: 4,
        padding: 8
    }
});
