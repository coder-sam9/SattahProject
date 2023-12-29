// import { create } from "apisause";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://15.184.224.229/api/",
});
//   apiClient.addAsyncRequestTransform(async (request) => {

//     request.headers["x-auth-token"] = authToken;
//   });

export default apiClient;
