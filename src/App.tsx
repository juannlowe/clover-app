import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import SignIn from "./components/googleSignIn/SignIn"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SignIn/>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
