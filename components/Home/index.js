import axios from "axios";
import { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TextInput,
    Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen(props) {
    const [data, setData] = useState();
    const [flower, setFlower] = useState();
    let arr = data;

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios({
            method: "GET",
            url: "http://10.10.20.31:2403/api/v1/flowers",
        })
            .then((res) => {
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
        console.log(flower);
        if (flower !== undefined || flower !== null) {
            await axios({
                method: "POST",
                url: "http://10.10.20.31:2403/api/v1/flowers",
                data: {
                    name: flower,
                },
            })
                .then((res) => {
                    console.log(res);
                    setFlower(null);
                    getData();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const deleteData = async (item, index) => {
        let id = item._id;
        let newArr = arr.filter((x) => x._id != item._id);
        setData(newArr);

        await axios({
            method: "DELETE",
            url: "http://10.10.20.31:2403/api/v1/flowers/" + item._id,
        })
            .then((res) => {
                console.log("delete done");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View
                    style={{
                        flex: 4,
                        borderColor: "red",
                        borderWidth: 1.5,
                        margin: 4,
                        alignSelf: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        padding: 5,
                    }}
                >
                    <Text style={{ fontSize: 16 }}>{item.name}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#fff",
                        flex: 1,
                        alignItems: "center",
                        margin: 3,
                        padding: 2,
                    }}
                    onPress={() => deleteData(item, index)}
                >
                    <Text>Delete</Text> 
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.listData}>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={{
                        width: "80%",
                        borderWidth: 2,
                        borderRadius: 10,
                        padding: 4,
                        paddingLeft: 10,
                        alignItems: "center",
                        flex: 4,
                        margin: 10,
                    }}
                    placeholder="enter flower name"
                    onChangeText={setFlower}
                    value={flower}
                />
                <Button
                    title="OK"
                    style={{ flex: 1, borderWidth: 2 }}
                    onPress={postData}
                    color={"gray"}
                ></Button>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listData: {
        flex: 1,
        width: "90%",
        borderWidth: 1,
        marginVertical: 4,
        alignSelf: "center",
        borderRadius: 4,
        padding: 8,
    },
});
