import "@/styles/globals.css";
import AppProps from "next/app";
import dynamic from "next/dynamic";
import "../styles/home.css";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
