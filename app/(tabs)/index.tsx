import { FlatList, StyleSheet, View } from "react-native";
import {
  ScrollView,
  Card,
  H2,
  Image,
  Paragraph,
  SizableText,
  XStack,
  YStack,
} from "tamagui";
import { ArrowRight } from "@tamagui/lucide-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface SimpleImageCardProps {
  title?: string;
  subTitle?: string;
  imgUri: string;
  width?: number;
  height?: number;
  cornerRadius?: number;
}

type CustomProgressBarProps = {
  value: number;
};

interface JungleBookItem {
  imgUri: string;
  title?: string;
  subtitle?: string;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ value }) => {
  return (
    <View style={styles.progressBarContainer}>
      <LinearGradient
        colors={["#FFFFFF", "#3E63DD"]}
        start={[0, 0]}
        end={[1, 0]}
        style={[styles.progressBar, { width: `${value}%` }]}
      />
    </View>
  );
};

const JungleBookList: JungleBookItem[] = [
  {
    imgUri: require("../../assets/images/JungleBookCard.png"),
  },
  {
    imgUri: require("../../assets/images/JungleBookCard.png"),
  },
  {
    imgUri: require("../../assets/images/JungleBookCard.png"),
  },
];

const IdentityCardList: JungleBookItem[] = [
  {
    imgUri: require("../../assets/images/Card.png"),
    title: "Identify Letter",
    subtitle: "Scientific Thinking",
  },
  {
    imgUri: require("../../assets/images/Card.png"),
    title: "Identify Letter",
    subtitle: "Scientific Thinking",
  },
  {
    imgUri: require("../../assets/images/Card.png"),
    title: "Identify Letter",
    subtitle: "Scientific Thinking",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView backgroundColor="#EAF6FF">
        <YStack padding="$4" flex={1}>
          <XStack
            space="$2"
            flex={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              padding={"$4"}
              source={{
                uri: require("../../assets/images/Logocompan.png"),
                height: 47,
                width: 68,
              }}
            />
            <XStack space="$2">
              <Image
                padding={"$4"}
                source={{
                  uri: require("../../assets/images/Search.png"),
                  height: 40,
                  width: 40,
                }}
              />
              <Image
                padding={"$4"}
                source={{
                  uri: require("../../assets/images/Notification.png"),
                  height: 40,
                  width: 40,
                }}
              />
              <Image
                padding={"$4"}
                source={{
                  uri: require("../../assets/images/Message.png"),
                  height: 40,
                  width: 40,
                }}
              />
            </XStack>
          </XStack>
        </YStack>

        <XStack
          margin="$3"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <FlatList
            data={IdentityCardList}
            renderItem={({ item }) => {
              return (
                <SimpleImageCard
                  height={186}
                  width={310}
                  imgUri={item.imgUri}
                  title={item.title}
                  subTitle={item.subtitle}
                  cornerRadius={20}
                />
              );
            }}
            horizontal
          />
        </XStack>

        <XStack
          margin="$3"
          padding="$2"
          backgroundColor={"#FCFCFC"}
          borderRadius={24}
          alignItems="center"
          style={styles.progressSectionContainer}
        >
          {/* Avatar Image */}
          <Image
            source={{
              uri: require("../../assets/images/Avatar.png"),
            }}
            style={{ marginRight: 8, width: 64, height: 64 }}
          />

          {/* Progress and Title */}
          <YStack flex={1} marginRight={8}>
            <CustomProgressBar value={40} />
            <Paragraph
              fontSize={20}
              fontWeight={"900"}
              color="#3E63DD"
              marginTop={8}
            >
              Do today 30%
            </Paragraph>
          </YStack>

          {/* Arrow Button */}
          <Image
            source={{
              uri: require("../../assets/images/arrow_right_button.png"),
            }}
            style={{ width: 48, height: 48, marginRight: 8 }}
          />
        </XStack>

        <YStack margin="$4">
          <XStack
            space="$2"
            paddingBottom="$4"
            flex={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <H2 color={"#3E63DD"}>Explore</H2>
            <ArrowRight
              size={24}
              strokeWidth={4}
              scale={1.5}
              color={"#3E63DD"}
            />
          </XStack>

          <XStack flexWrap="wrap" alignItems="center" justifyContent="center">
            <FlatList
              data={JungleBookList}
              renderItem={({ item }) => {
                return (
                  <SimpleImageCard
                    imgUri={item?.imgUri}
                    width={168}
                    height={186}
                    cornerRadius={25}
                  />
                );
              }}
              horizontal
            />
          </XStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

export const SimpleImageCard: React.FC<SimpleImageCardProps> = ({
  title,
  subTitle,
  imgUri,
  height = 400,
  width = 186,
  cornerRadius,
}) => {
  return (
    <YStack>
      <Card
        size="$4"
        marginRight={"$3"}
        animation="bouncy"
        width={width}
        height={height}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        borderRadius={cornerRadius}
        style={styles.card}
      >
        <Card.Background>
          <Image
            alignSelf="center"
            source={{
              uri: imgUri,
            }}
            resizeMode="cover"
            style={{
              width,
              height,
              borderRadius: cornerRadius, // Rounded corners
              borderColor: "white",
              borderWidth: 10,
            }}
          />
        </Card.Background>
      </Card>

      <View style={{ marginLeft: 8, marginTop: 8 }}>
        {title && (
          <SizableText size="$4" marginTop="$3">
            {title}
          </SizableText>
        )}
        {subTitle && (
          <Paragraph theme="alt1" size="$2">
            {subTitle}
          </Paragraph>
        )}
      </View>
    </YStack>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 16,
    width: "100%",
    backgroundColor: "#E0E0E0", // Background color for the progress bar
    borderRadius: 16,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 16,
  },
  card: {
    shadowOpacity: 0.05,
    shadowRadius: 0.2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
  progressSectionContainer: {
    shadowOpacity: 0.05,
    shadowRadius: 0.2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
});
