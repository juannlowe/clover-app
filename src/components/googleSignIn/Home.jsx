import Header from '../Header';
import ActivityForm from '../ActivityForm'
import Footer from '../Footer';
import '../../App.css';

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="App">
      <Header />
      <ActivityForm />
      <Footer />
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Home