import './App.css';
import { Router, Routes, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}> {}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;