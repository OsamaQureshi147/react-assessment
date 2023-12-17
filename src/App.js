import { HomePage } from './pages';
import classes from './App.module.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className={classes.root}>
        <HomePage />
      </main>
    </ApolloProvider>
  );
}

export default App;
