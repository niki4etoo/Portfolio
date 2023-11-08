import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

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
import Dashboard from './components/Questions/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/*' Component={Intro}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contacts' Component={Contacts}></Route>
        <Route path='/questions' Component={QuestionsSelector}></Route>

        <Route path='/yes' Component={Yes}></Route>
        <Route path='/no' Component={No}></Route>
        <Route path='/depends' Component={Depends}></Route>

        <Route path='/questions/technical/' Component={Dashboard}></Route>
        <Route path='/questions/work/' Component={Dashboard}></Route>
        <Route path='/questions/entertainment/' Component={Dashboard}></Route>
        <Route path='/questions/personal/' Component={Dashboard}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
