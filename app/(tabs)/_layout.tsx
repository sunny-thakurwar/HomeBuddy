import { Tabs } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native"; // Import Platform
import HomeSvg from "../../assets/svg/HomeIcon";
import ExploreIcon from "../../assets/svg/ExploreIcon";
import LearnIcon from "../../assets/svg/LearnIcon";
import ParentIcon from "../../assets/svg/ParentIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E54D2E",
        tabBarInactiveTintColor: "#A0A0A0",
        tabBarStyle: {
          backgroundColor: "#F8F8F8",
          borderTopEndRadius: 24,
          borderTopStartRadius: 24,
          height: 71,
          paddingBottom: 5,
          shadowOpacity: 0.05,
          shadowRadius: 0.2,
          shadowOffset: {
            width: 0,
            height: -5,
          },
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tab}>
              <HomeSvg fill={focused ? "#E5484D" : color} />
              {/* <Image
                source={{
                  uri: require("../../assets/images/Home.png"),
                }}
                style={{ width: styles.icon.width, height: styles.icon.height }}
              /> */}
              <Text style={[styles.label, { color, fontWeight: "bold" }]}>
                Home
              </Text>
              {focused && <View style={styles.focusedLine} />}
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tab}>
              <ExploreIcon fill={focused ? "#E5484D" : color} />
              <Text style={[styles.label, { color, fontWeight: "bold" }]}>
                Explore
              </Text>
              {focused && <View style={styles.focusedLine} />}
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tab}>
              <LearnIcon fill={focused ? "#E5484D" : color} />
              <Text style={[styles.label, { color, fontWeight: "bold" }]}>
                Learn
              </Text>
              {focused && <View style={styles.focusedLine} />}
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="parent"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tab}>
              <ParentIcon fill={focused ? "#E5484D" : color} />
              <Text style={[styles.label, { color, fontWeight: "bold" }]}>
                Parent
              </Text>
              {focused && <View style={styles.focusedLine} />}
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
  icon: {
    fontSize: 24,
    width: 20,
    height: 20,
  },
  focusedLine: {
    position: "absolute", // Ensure the line stays below the label
    bottom: -10, // Align to the bottom of the label
    width: "40%",
    height: 6,
    backgroundColor: "#E54D2E",
  },
});
