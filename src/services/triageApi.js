//axios client configuration for reqresApi.
import axios from "axios";
// Here, set default's configuration for the client. (base, headers).
const ROOT_URL = "http://127.0.0.1:8000/api/";
axios.defaults.baseURL = ROOT_URL;
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

export default axios;
