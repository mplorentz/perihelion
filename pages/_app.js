import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout";

const theme = extendTheme({
  colors: {
    polar: {
      100: "#2E3440",
      300: "#3B4252",
      500: "#434C5E",
      700: "#4C566A",
    },
    snow: {
      100: "#D8DEE9",
      300: "#E5E9F0",
      500: "#ECEFF4",
    },
    frost: {
      100: "#8FBCBB",
      300: "#88C0D0",
      500: "#81A1C1",
      700: "#5E81AC",
    },
    aurora: {
      100: "#BF616A",
      300: "#D08770",
      500: "#EBCB8B",
      700: "#A3BE8C",
      900: "#B48EAD",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "polar.300" : "snow.100",
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
