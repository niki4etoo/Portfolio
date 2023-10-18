import './App.css';

import {Routes, Route, useLocation } from 'react-router-dom';

import Intro from './components/Intro';

// About & Contacts
import About from './components/About';
import Contacts from './components/Contacts';
import QuestionsCategories from './components/QuestionsCategories';

// Quiz 
import YesAnswer from './components/Quiz/YesAnswer';
import NoAnswer from './components/Quiz/NoAnswer';
import DependsAnswer from './components/Quiz/DependsAnswer';

// Questions
import Technical from './components/Questions/Technical/Technical';
import Work from './components/Questions/Work/Work';
import Entertainment from './components/Questions/Entertainment/Entertainment';
import Personal from './components/Questions/Personal/Personal';


function App() {

  const location = useLocation();

  return (
    <>
    <Routes location={location} key={location.key}>
				<Route path='/*' element={<Intro />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/questions' element={<QuestionsCategories />}></Route>

				<Route path='/yes' element={<YesAnswer />}></Route>
				<Route path='/no' element={<NoAnswer />}></Route>
        <Route path='/depends' element={<DependsAnswer />}></Route>

        <Route path='/questions/technical/' element={<Technical />}></Route>
        <Route path='/questions/work/' element={<Work />}></Route>
        <Route path='/questions/entertainment/' element={<Entertainment />}></Route>
        <Route path='/questions/personal/' element={<Personal />}></Route>
			</Routes>
    </>
  );
}

export default App;
