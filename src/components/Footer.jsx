const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <p>&copy; {new Date().getFullYear()} All Rights Reserved Clover</p>
    </footer>
  );
};

export default Footer;

