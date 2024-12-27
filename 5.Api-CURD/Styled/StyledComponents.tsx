import { styled } from "nativewind";
import { Button, Image, Pressable, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Define the styled components
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledTextInput = styled(TextInput);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

// Export them all together
export { StyledView, StyledText, StyledButton, StyledTextInput, StyledImage, StyledPressable };


// icons

const StyledAntDesign = styled(AntDesign);
const StyledFontAwesome = styled(FontAwesome);
export { StyledAntDesign, StyledFontAwesome };