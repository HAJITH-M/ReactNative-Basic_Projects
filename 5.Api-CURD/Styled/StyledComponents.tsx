import { Button, Image, Pressable, Text, TextInput, View} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styled } from "nativewind";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// Define the styled components
const StyledView = styled(View)
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
const StyledFeather = styled(Feather);
const StyledSimpleLineIcons = styled(SimpleLineIcons);
const StyledMaterialIcons = styled(MaterialIcons);
// Export icons
export { StyledAntDesign, StyledFontAwesome, StyledFeather, StyledSimpleLineIcons, StyledMaterialIcons };