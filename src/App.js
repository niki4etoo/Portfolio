import './App.css';

import {Routes, Route, useLocation } from 'react-router-dom';

import Intro from './components/Intro/Intro';

// about & Contacts
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';


// main quiz 
import Yes from './components/Quiz/Answers/Yes';
import No from './components/Quiz/Answers/No';
import Depends from './components/Quiz/Answers/Depends';

// questions
import QuestionsSelector from './components/Questions/QuestionsSelector';
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
        <Route path='/questions' element={<QuestionsSelector />}></Route>

				<Route path='/yes' element={<Yes />}></Route>
				<Route path='/no' element={<No />}></Route>
        <Route path='/depends' element={<Depends />}></Route>

        <Route path='/questions/technical/' element={<Technical />}></Route>
        <Route path='/questions/work/' element={<Work />}></Route>
        <Route path='/questions/entertainment/' element={<Entertainment />}></Route>
        <Route path='/questions/personal/' element={<Personal />}></Route>
			</Routes>
    </>
  );
}

export default App;
