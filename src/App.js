import './App.css';

import {Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';

import YesAnswer from './components/YesAnswer';
import NoAnswer from './components/NoAnswer';
import ItDependsAnswer from './components/ItDependsAnswer';

function App() {

  const location = useLocation();

  return (
    <>
    <Routes location={location} key={location.key}>
				<Route path='/*' element={<Header />}></Route>
				<Route path='/yes' element={<YesAnswer />}></Route>
				<Route path='/no' element={<NoAnswer />}></Route>
        <Route path='/itDepends' element={<ItDependsAnswer />}></Route>
			</Routes>
    </>
  );
}

export default App;
