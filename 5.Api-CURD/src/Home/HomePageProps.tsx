import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Navigation/RootNavigation";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationProp } from "../Navigation/BottomNavigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type HomePageProps = CompositeScreenProps<BottomTabScreenProps<BottomNavigationProp, "home">, NativeStackScreenProps<RootStackParamList>>;