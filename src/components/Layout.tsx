import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar.js';
import Footer from './Footer.jsx'
import JoinActivity from './JoinActivity.tsx'
import CreateActivity from './CreateActivity.tsx'

export const Layout =()=> {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <div style={{display : 'flex', justifyContent : 'space-around', margin : ' 3rem'}}>
          <JoinActivity/>
          <CreateActivity/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

