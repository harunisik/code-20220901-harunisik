import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import MainScreen from './MainScreen';
import './App.css';
import SecondScreen from './SecondScreen';

function App() {
  return (
    <Router>
      <Layout>
        <MainScreen />
        <SecondScreen />
      </Layout>
    </Router>
  );
}

export default App;
