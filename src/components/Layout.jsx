import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
// import SignIn from './googleSignIn/SignIn';
import Footer from './Footer'
import JoinActivity from './JoinActivity.tsx'
import CreateActivity from './CreateActivity.tsx'

function Layout() {
  return (
    <Router>
      <div>
        {/* <SignIn /> */}
        <ResponsiveAppBar />
        <div style={{display : 'flex', justifyContent : 'space-around', margin : ' 2rem'}}>
          <JoinActivity/>
          <CreateActivity/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default Layout;
