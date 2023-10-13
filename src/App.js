import './App.css';

import {Routes, Route, useLocation } from 'react-router-dom';

import Intro from './components/Intro';

// About & Contacts
import About from './components/About';
import Contacts from './components/Contacts';

// Quiz 
import YesAnswer from './components/Quiz/YesAnswer';
import NoAnswer from './components/Quiz/NoAnswer';
import DependsAnswer from './components/Quiz/DependsAnswer';



function App() {

  const location = useLocation();

  return (
    <>
    <Routes location={location} key={location.key}>
				<Route path='/*' element={<Intro />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>

				<Route path='/yes' element={<YesAnswer />}></Route>
				<Route path='/no' element={<NoAnswer />}></Route>
        <Route path='/depends' element={<DependsAnswer />}></Route>
			</Routes>
    </>
  );
}

export default App;
