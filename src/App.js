import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "JUN",
  image: "imagegege",
  phone: "09034747259",
  email: "jun7772006@gmail.com",
  company: {
    name: "Cuon",
  },
  website: "https://google",
};

export default function App() {
  return (
    <Router />
  );
}
