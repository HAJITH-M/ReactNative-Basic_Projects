import { styled } from 'nativewind';
import { View, Text } from 'react-native';
import React from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  return (
    <StyledView className="flex-1 items-center  justify-center">
      <StyledText className="text-xl text-red-800 bg-blue-500 p-10 border-red-500 border">Hello</StyledText>
    </StyledView>
  );
}
