import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Intro from './components/Intro/Intro';

// about & contacts
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

// main quiz 
import Yes from './components/Quiz/Answers/Yes';
import No from './components/Quiz/Answers/No';
import Depends from './components/Quiz/Answers/Depends';

// questions
import QuestionsSelector from './components/Questions/QuestionsSelector';
import Dashboard from './components/Questions/Dashboard';
import Status from './components/Questions/Status';

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/*' element={<Intro />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/questions' element={<QuestionsSelector />}></Route>

        <Route path='/yes' element={<Yes />}></Route>
        <Route path='/no' element={<No />}></Route>
        <Route path='/depends' element={<Depends />}></Route>

        <Route path='/questions/status/' element={<Status />}></Route>
        <Route path='/questions/technical/' element={<Dashboard />}></Route>
        <Route path='/questions/work/' element={<Dashboard />}></Route>
        <Route path='/questions/entertainment/' element={<Dashboard />}></Route>
        <Route path='/questions/personal/' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
