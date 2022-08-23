// import * as Location from "expo-location";
// import { useEffect, useState } from "react";

// export default useLocation = () => {
//   const [location, setLocation] = useState(null);

//   const getLocation = async () => {
//     try {
//       const { granted } = await Location.requestForegroundPermissionsAsync();
//       if (!granted) return;
//       const {
//         coords: { latitude, longitude },
//       } = await Location.getLastKnownPositionAsync();
//       setLocation({ latitude, longitude });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getLocation();
//   }, []);

//   return location;
// };

// const [location, setLocation] = useState(null);
// const [errorMsg, setErrorMsg] = useState(null);
// useEffect(() => {
//   (async () => {
//     let { status } = await Location.requestPermissionsAsync();
//     if (status !== "granted") {
//       setErrorMsg("Permission to access location was denied");
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     setLocation(location);
//   })();
// }, []);
// let text = "Waiting..";
// if (errorMsg) {
//   text = errorMsg;
// } else if (location) {
//   text = JSON.stringify(location);
// }
