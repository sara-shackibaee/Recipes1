// import './App.css';
import Sidebar from './Sidebar/Sidebar'
import './Sidebar/Css/Sidebar.css'
import Home from './Home/Home'
import MTable from './Table'
import Tree from './Tree/Index'
import Main from './Main/Main'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import TT from './Tree/TT'
function App() {

    


    return ( 
        <div  >
            <Router>
            <Sidebar/>
           <Main />
            </Router>
        </div>
    );
}

export default App;