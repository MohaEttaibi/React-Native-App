import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  Accuracy,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      // await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      // stop watching
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err];

  // const [location, setLocation] = useState(null);
  // const getLocation = async () => {
  // try {
  //     const { granted } = await Location.requestForegroundPermissionsAsync();
  //     if (!granted) return;
  //     const {
  //     coords: { latitude, longitude },
  //     } = await Location.getLastKnownPositionAsync();
  //     setLocation({ latitude, longitude });
  // } catch (e) {
  //     setErr(e);
  // }
  // };
  // useEffect(() => {
  // getLocation();
  // }, []);
};
