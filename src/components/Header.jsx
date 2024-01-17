import {Avatar} from '@mui/material' 
import { Button } from '@mui/material'

const Header = () => {
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
  return (
    <header>
      <h1>CLOVER</h1>
      <Avatar alt="Juan Branca" src="./componets/juan.jpeg" />
      <Button onClick={logout} variant='contained'>Log Out</Button>
    </header>
  );
};

export default Header;
