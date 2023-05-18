import { Banner, Button, HStack, Surface } from "@react-native-material/core";
import { Image, StyleSheet, View } from "react-native";
import BottomMenu from "../components/BottomMenu";
import Topbar from "../components/Topbar";
import { MenuItem } from "../types/menu";

const advertisingList = [
  {
    id: "55389ae6-cce6-4d90-9cea-bcfcd42f275c",
    bike: {
      brand: "Caloi",
      model: "2021",
    },
    description: "alugo a bicicleta enquanto estou no trabalho",
    address: {
      street: "Av. Rio Branco",
      number: "11",
      district: "Recife Antigo",
      city: "Recife",
      state: "PE",
      postalCode: "00000-000",
    },
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80",
    ],
  },
  {
    id: "0850db83-1d26-4af6-a9f8-fd594fa04646",
    bike: {
      brand: "Caloi",
      model: "2021",
    },
    description: "alugo a bicicleta enquanto estou no trabalho",
    address: {
      street: "Av. Rio Branco",
      number: "11",
      district: "Recife Antigo",
      city: "Recife",
      state: "PE",
      postalCode: "00000-000",
    },
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80",
    ],
  },
  {
    id: "7f1843b2-2263-4bf3-9892-6fe52d98894e",
    bike: {
      brand: "Caloi",
      model: "2021",
    },
    description: "alugo a bicicleta enquanto estou no trabalho",
    address: {
      street: "Av. Rio Branco",
      number: "11",
      district: "Recife Antigo",
      city: "Recife",
      state: "PE",
      postalCode: "00000-000",
    },
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80",
    ],
  },
  {
    id: "c803ae9a-400b-4cf1-bed0-5e4cf39d5331",
    bike: {
      brand: "Caloi",
      model: "2021",
    },
    description: "alugo a bicicleta enquanto estou no trabalho",
    address: {
      street: "Av. Rio Branco",
      number: "11",
      district: "Recife Antigo",
      city: "Recife",
      state: "PE",
      postalCode: "00000-000",
    },
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80",
    ],
  },
  {
    id: "86c9523f-85a1-4555-a8e9-71b0fc1f535b",
    bike: {
      brand: "Caloi",
      model: "2021",
    },
    description: "alugo a bicicleta enquanto estou no trabalho",
    address: {
      street: "Av. Rio Branco",
      number: "11",
      district: "Recife Antigo",
      city: "Recife",
      state: "PE",
      postalCode: "00000-000",
    },
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Topbar />
      <View style={styles.container}>
        <Surface elevation={2} category="medium" style={{ width: 350,height:196 }}>
          <Image source={{uri:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}}/>
          <Banner 
          text="There was a problem processing a transaction on your credit card."
          buttons={
            <HStack spacing={2}>
              <Button key="fix-it" variant="text" title="Fix it" compact />
              <Button key="learn-more" variant="text" title="Learn More" compact />
            </HStack>
          }
          style={{position:"absolute", bottom: 0}}/>
        </Surface>
        <BottomMenu active={MenuItem.Home} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
