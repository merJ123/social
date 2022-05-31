import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import  Settings from './components/Settings/Settings';

const App = (props) => {

  return (
      <div className='app_wrapper'>
        <Header />
        <div className='container'>
          <Navbar state = {props.state.sidebar} />
          <div className='app_wrapper_content'>
            <Routes>
              <Route path='/profile' 
                     element={<Profile 
                        state={props}  />} />
              <Route path='/dialogs/' 
                     element={<DialogsContainer 
                        state={props} />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
