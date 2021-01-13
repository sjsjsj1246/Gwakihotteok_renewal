import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import styles from './app.module.css';
import Main from './components/main/main';
import Content from './components/content/content';
import Aside from './components/aside/aside';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/content" component={Content} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
