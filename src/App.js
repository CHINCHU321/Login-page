import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter as Router,
Routes,
Route,
redirect, 
} from 'react-router-dom';
import Signup from './component/Signup';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='./' Component={Login}/>
          <Route exact path='./Signup' Component={Signup}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
