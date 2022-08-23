// import axios from "axios";

// export default axios.create({
//   baseURL: "https://c516-41-141-106-77.ngrok.io",
// });

import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.126:3001",
});

export default apiClient;
