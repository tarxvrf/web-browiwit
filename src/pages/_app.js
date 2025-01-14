
import "@/styles/globals.css";
import Templateui from "@/templateui/Templateui";
export default function App({ Component, pageProps }) {
  return <Templateui><Component {...pageProps} /></Templateui>
}
