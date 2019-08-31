import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../utils/firebase';
import { setLogin, setUser } from '../actions/index';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Pet from '../pages/Pet';
import Dashboard from '../pages/Dashboard';
import '../styles/global.css';


const App = props => { 

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if(user){
        props.setUser(user);
        props.setLogin(true);
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route  exact path='/' component={Home} />
          <Route  exact path='/mascotas/:id' component={Pet} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/panel' component={Dashboard} />
          <Route  component={NotFound} />
        </Switch>  
      </Layout>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  setLogin,
  setUser,
}

export default connect(null, mapDispatchToProps)(App);