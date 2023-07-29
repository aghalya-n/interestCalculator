import logo from '../../assets/logoImg.png'
import classes from './header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img style={{ width: "12%", height: "15%" }} src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
};

export default Header;