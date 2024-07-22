import { H1, ScrollView, YStack } from "tamagui";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <YStack padding="$4" flex={1} alignItems="center" justifyContent="center">
        <H1>Explore!</H1>
      </YStack>
    </ScrollView>
  );
}
