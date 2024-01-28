const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '10px',
      }}
    >
        <p style={{margin: '0'}}>Join cool activities!</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved Clover</p>
    </footer>
  );
};

export default Footer;

