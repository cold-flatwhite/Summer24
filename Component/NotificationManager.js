import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import * as Notifications from "expo-notifications";

export async function verifyPermission() {
  try {
    const response = await Notifications.getPermissionsAsync();
    if (response.granted) {
      return true;
    }
    const requestResponse = await Notifications.requestPermissionsAsync();
    return requestResponse.granted;
  } catch (err) {
    console.log(err);
  }
}
const NotificationManager = () => {
  async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  }

  async function requestPermissionsAsync() {
    return await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });
  }

  const scheduleNotificationHandler = async () => {
    const hasPermission = await verifyPermission();
    console.log(hasPermission);
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "goal reminder",
          body: "This is your reminder",
          data: { url: "https://google.com" },
        },
        trigger: {
          seconds: 5,
        },
      });
    } catch (err) {
      console.log("schedule notification", err);
    }
  };

  return (
    <View>
      <Button
        title="remind me to add a goal"
        onPress={scheduleNotificationHandler}
      />
    </View>
  );
};

export default NotificationManager;

const styles = StyleSheet.create({});
