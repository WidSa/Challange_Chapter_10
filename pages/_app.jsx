import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/Register.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
