import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer'
import JoinActivity from './JoinActivity.tsx'
import CreateActivity from './CreateActivity.tsx'

function Layout() {
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

export default Layout;
