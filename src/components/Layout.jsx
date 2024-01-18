import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
// import SignIn from './googleSignIn/SignIn';
import Footer from './Footer'
import Form from './Form.tsx'

function Layout() {
  return (
    <Router>
      <div>
        {/* <SignIn /> */}
        <ResponsiveAppBar />
        <Form/>
        <Footer/>
      </div>
    </Router>
  );
}

export default Layout;
