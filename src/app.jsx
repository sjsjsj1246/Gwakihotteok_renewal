import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/headerCopy';
import styles from './app.module.css';
import Main from './components/main/main';
import Menu from './components/header/menu/menu';
import FindStore from './components/header/find_store/find_store';
import OnlineOrder from './components/header/online_order/online_order';
import EventList from './components/header/event_list/event_list';
import { useState } from 'react';

function App() {
  const [thisPage, setThispage] = useState('');
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/event">
            <EventList />
          </Route>
          <Route path="/online_order">
            <OnlineOrder />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/find_store">
            <FindStore />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
