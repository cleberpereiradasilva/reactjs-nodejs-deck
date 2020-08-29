import React from "react";
import "../styles/globals.css";
import PropTypes from "prop-types";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
    pageProps: PropTypes.func,
    Component: PropTypes.func,
};

export default MyApp;
