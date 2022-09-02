import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import { ReactComponent as SearchIcon } from './search-icon.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <div className="mainScreen">
            <div className="content">
              <h1>
                {`Rethink your 
                  living & renting`}
              </h1>
              <p>Make your stay painless with us</p>
            </div>
            <div className="filterBox">
              <div>
                <h5>CITY</h5>
                <p>Select your city</p>
              </div>
              <div>
                <h5>DATES</h5>
                <p>Select your dates</p>
              </div>
              <div>
                <h5>GUESTS</h5>
                <p>Add guests</p>
              </div>
              <div className="searchBtn">
                <SearchIcon />
                <p>Search</p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
