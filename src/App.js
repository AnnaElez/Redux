import Counter from './components/Counter/Counter';
import React from 'react';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import { useSelector, useDispatch } from 'react-redux';
import UserProfile from './components/UserProfile/UserProfile'


function App() {
  const authDid = useSelector(state => state.auth.isAuth);

  return (
    <React.Fragment>
      <Header />
      {!authDid && <Auth/>}
      {authDid && <UserProfile/>}
     
      <Counter />
    </React.Fragment>
  );
}

export default App;