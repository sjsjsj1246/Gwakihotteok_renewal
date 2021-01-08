import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import styles from './app.module.css';
import Main from './components/main/main';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
