import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';


function App() {
  return (
    <Container className="App" fluid>
      < Navigation />
      < Header />
    </Container>
  );
}

export default App;
