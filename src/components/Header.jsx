import ReactLogo from '../assets/react.svg';

const Header = () => {
  return (
    <header className="header">
        <img src={ReactLogo} alt="Chef Claude Logo" />
        <h1>Chef Claude</h1>
    </header>
  )
}

export default Header