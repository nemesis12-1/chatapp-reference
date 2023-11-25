import React from 'react'
import classes from './HeaderFooter.module.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className={classes.main}>
                <nav>
                    <div >
                        <Link to='/' className={classes.logo}>
                            <h3>Converso</h3>
                        </Link>
                    </div>
                    <div className={classes.headerButton}>
                        <Link to='/login'>
                            <button className={classes.headerButtonLogin}>Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className={classes.headerButtonRegister}>Register</button>
                        </Link>
                        <Link to='/chat'>
                            <button className={classes.headerButtonRegister}>Chat</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header