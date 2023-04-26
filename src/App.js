import './App.css';

import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <div>
      <div className='h-screen text-white text-center px-10 sm:px-20 md:px-36 lg:px-56 py-14'>
        <div className='container mx-auto h-full'>
          <ContextProvider>
            <Heading />
              <Routes>
                <Route path='/' Component={TaskList} exact />
                <Route path='/add' Component={TaskForm} />
                <Route path='/edit/:id' Component={TaskForm} />
              </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
