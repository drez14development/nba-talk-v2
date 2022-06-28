import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { Fragment } from "react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
