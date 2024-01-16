
function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <p>Home Page</p>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Home