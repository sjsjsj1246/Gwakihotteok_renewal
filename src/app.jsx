import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import styles from './app.module.css';
import Main from './components/main/main';
import Content from './components/content/content';
import { useState } from 'react';

function App() {
  const [thisPage, setThispage] = useState('');
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/article/:id" component={Content} />
          <Route path="/article" component={Content} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
