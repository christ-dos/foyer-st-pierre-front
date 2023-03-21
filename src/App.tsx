import { Redirect, Route, Router, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './HearderAndFooter/components/NavBar';
import Footer from './HearderAndFooter/Footer';
import Header from './HearderAndFooter/Header';
import HomePage from './HomePage/HomePage';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/home'} />
        </Route>
        <Route path={'/home'} exact>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
