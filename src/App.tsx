import Header from './Layouts/HearderAndFooter/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Layouts/HearderAndFooter/Footer';
import HomePage from './Layouts/HomePage/HomePage';

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
