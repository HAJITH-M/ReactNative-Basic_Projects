import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Navigation/RootNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'splashscreen'>;