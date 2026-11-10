import React from "react";
import { StyleSheet, View } from "react-native";

export default function BackgroundMesh({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  circle1: {
    position: "absolute",
    top: -60,
    right: -40,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(168, 85, 247, 0.22)", // Soft Purple Aura
  },
  circle2: {
    position: "absolute",
    top: 260,
    left: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "rgba(99, 102, 241, 0.18)", // Soft Indigo Aura
  },
  circle3: {
    position: "absolute",
    bottom: -40,
    right: -30,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(236, 72, 153, 0.18)", // Soft Pink Aura
  },
});
