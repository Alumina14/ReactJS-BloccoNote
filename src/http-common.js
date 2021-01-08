import axios from "axios";

export default axios.create({
  
  baseURL: "https://cors-anywhere.herokuapp.com" + "/" + "http://80.211.237.86:8080/note",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});