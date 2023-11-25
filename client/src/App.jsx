import axios from 'axios'
import style from './App.module.css'
import ChatPage from './pages/ChatPage/ChatPage'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/Signup/SignUp'

import { Routes, Route } from "react-router-dom"
// import { UserContextProvider } from './context/userContext.jsx'
import { useContext } from 'react'
import { UserContext } from './context/userContext.jsx'

function App() {

  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  const {username , id} = useContext(UserContext);
  console.log(username);

  if(username){
    return 'Logged in' + username;
  }
 

  return (
    <>
      {/* <UserContextProvider> */}

        <div className={style['main-page']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {username && <Route path="/chat" element={<ChatPage />} />}
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
          {/* <Home /> */}
        </div>
      {/* </UserContextProvider> */}
    </>
  )
}

export default App
