import Layout from "../components/Layout";
import "../styles/globals.css";
import CartContextProvider from "../contexts/cartContext";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <CartContextProvider>
      {router.route === "/" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </CartContextProvider>
  );
};

export default MyApp;
