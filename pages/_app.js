import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../libs/apollo";

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;