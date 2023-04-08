import React from 'react';
import Header from './components/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto my-16 px-3 md:px-0'>
        <div className='text-center text-4xl font-bold'>{navigation.state === 'loading' ? 'Loading.....' : ''}</div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;