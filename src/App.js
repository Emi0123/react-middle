import { Router } from "./router/Router";

import "./styles.css";

const user = {
  name: "ミンユンギ",
  image: "https://source.unsplash.com/5CSaeDK8vxU",
  email: "111111@gmail.com",
  phone: "1111-22222-33333",
  company: {
    name: "BigHit"
  },
  website: "http://google.com"
};

export default function App() {
  return <Router />;
}
