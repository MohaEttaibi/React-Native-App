import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

// export const navigate = (routeName, params) => {
//   navigator.dispatch(
//     Navigationactions.navigate({
//       routeName,
//       params,
//     })
//   );
// };

/////////////////////////////////////////////////
export const navigate = (routeName, params) => {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};
