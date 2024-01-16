import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import SignIn from "./SignIn"
import '../../App.css';

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="App">
      <SignIn/>
      <Header />
      <Body />
      <Footer />
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Home