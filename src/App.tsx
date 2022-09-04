import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import MainScreen from './MainScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

function App() {
  return (
    <Router>
      <Layout>
        <MainScreen />
        <SecondScreen />
        <ThirdScreen />
      </Layout>
    </Router>
  );
}

export default App;
