import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../libs/apollo";
import Layout from '../layout/layout';
function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;