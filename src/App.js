import Login from './component/Login';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
{/*import Signup from './component/Signup';

import { BrowserRouter as Router, Routes,
Route,
redirect, 
} from 'react-router-dom';*/}
function App() {
  return (
    <div>
    {/*}  <Router>
      <Routes>
        <Route  exact path ="/"   Component={<Login/>} />
        <Route exact path ="/Signup" Component={<Signup />} />
      </Routes>
      </Router>
  */}<Login/>
      <Analytics />
      <SpeedInsights />

    </div>
  );
}

export default App;
