import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import styles from './app.module.css';
import Main from './components/main/main';
import Content from './components/content/content';

function App({ gwakihotteokData }) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/content">
            <Content gwakihotteokData={gwakihotteokData} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
