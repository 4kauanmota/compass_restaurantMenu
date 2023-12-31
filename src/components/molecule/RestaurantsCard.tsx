import { View, Text, Image, StyleSheet, TouchableOpacity, Platform  } from "react-native";
import Restaurant from "@/models/Restaurant";
import { RootStackParamList } from "@/navigation/StackNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import colors from "@/constants/colors";

interface RestaurantCardProps {
    restaurant: Restaurant | any,
    navigation: NativeStackNavigationProp<RootStackParamList, "Restaurant">
}


const RestaurantCard = ({ restaurant, navigation }:RestaurantCardProps) => {
    const {  coverImageUrl,id,name} = restaurant;
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.cardContainer}
            onPress={() => {
                navigation.navigate("RestaurantDetails", {
                    id
                })
            }}
        >
            <View style={styles.card}>
                <Image source={{ uri: coverImageUrl }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 15,
        height: 140,
        flexDirection: 'row',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: colors.black,
                shadowOpacity: 0.25,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
    },
    cardPressed: {
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 12,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    cardImage: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
        opacity: 0.75,
    },
    cardTitle: {
        color: colors.white,
        fontSize: 32,
        fontWeight: "bold",
        position: 'absolute',
        bottom: 15,
        left: 14,
        right: 80,
        textAlign: "left",
        fontFamily: 'Poppins'
    },
});

export default RestaurantCard;
