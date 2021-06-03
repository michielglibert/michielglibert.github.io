import "../styles/globals.css";
import "../styles/animate.css";
import "../styles/verticalTimeline.css";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
