import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Contacts } from './pages/Contacts';
import { Login } from './pages/LogIn';
import { Navigate } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from './store/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={<Navigate to="/auth" />} />
            <Route path='/auth' element={<Login/>} />
            <Route path='/contacts' element={<Contacts/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
