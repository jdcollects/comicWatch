import { Stack } from "expo-router";
import React from "react";
import { ThemeProvider } from "../src/theme/ThemeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
