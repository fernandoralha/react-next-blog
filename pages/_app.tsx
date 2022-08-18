import '../styles/globals.css'
import type { AppProps } from "next/app";

import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyles from '../styles/globalStyles'
import { light } from '../styles/theme'
import Footer from '../components/Footer'
import Content from '../components/Content'
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router'
import Error from "next/error";

const progress = new ProgressBar({
  size: 2,
  color: light.primaryBackground,
  delay: 100,
});


// function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {


function MyApp({ Component, pageProps }: AppProps) {
  
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer/>
      <GlobalStyles />
    </ThemeProvider>
  )
}

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default MyApp
