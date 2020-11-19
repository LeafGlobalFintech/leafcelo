class Config {
  BACKEND_PORT = "3031";
  constructor() {
    if (process.env.NODE_ENV === "production") {
      //this.BACKEND_PORT = process.env.REACT_APP_BACKEND_URL;
    }
  }
}
const config = new Config();
export default config;
