import { useRouter } from "expo-router";
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
} from "react-native";

type DataItem = {
  imageuri: string;
  name: string;
  age: number;
  city: string;
};

const { width } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();

  const data: DataItem[] = [
    {
      imageuri:
        "https://s.yimg.com/ny/api/res/1.2/jvkzkQLZ51wXmHswNTiktg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-07/59a4bc60-f23c-11eb-bf75-c38993010fb7",
      name: "Gunung Fuji",
      age: 2,
      city: "Japan",
    },
    {
      imageuri:
        "https://th.bing.com/th/id/OIP.JPxuwK63goUkpI1v3P-gSAHaE0?rs=1&pid=ImgDetMainng",
      name: "Candi",
      age: 3,
      city: "Indonesia",
    },
    {
      imageuri:
        "https://th.bing.com/th/id/OIP.wkmZe_tc_un7YHuhOHei0gHaFU?rs=1&pid=ImgDetMain",
      name: "Liberty",
      age: 4,
      city: "Amerika",
    },
    {
      imageuri:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/56/59/7d/hustler-casino.jpg?w=500&h=400&s=1",
      name: "Kasino",
      age: 27,
      city: "LA",
    },
  ];

  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageuri }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>Usia: {item.age} tahun</Text>
      <Text style={styles.city}>Kota: {item.city}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Go to Page 1" onPress={() => router.push("/page1")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F4F8",
    paddingTop: 20,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width:  150,
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginTop: 10,
    marginHorizontal: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#4CAF50",
    marginHorizontal: 12,
    marginTop: 4,
  },
  city: {
    fontSize: 16,
    color: "#2196F3",
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 2,
  },
});
