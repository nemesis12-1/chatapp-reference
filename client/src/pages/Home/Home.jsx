import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import style from './Home.module.css'
import image from '../../assets/Chat-bro.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className={style['main-content']}>
                    <div className={style['main-content__left']}>
                        <h1>Converso</h1>
                        <p>"Connecting hearts, one chat bubble at a time."</p>
                        <div>
                            <Link to='/signup'>
                                <button>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className={style['main-content__right']}>
                        <img src={image} alt="" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home