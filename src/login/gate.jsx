import React, {useContext, useState} from 'react'
import './gate.css'
import axios from "axios";
import Cookies from 'universal-cookie';
import {AuthContext} from "../context/authContext";
import {useNavigate} from "react-router-dom";

export const Gate = () => {

  const {value, setValue} = useContext(AuthContext);
  const [loginUserName, setLoginUserName] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [signUpUserName, setSignUpUserName] = useState();
  const [signUpPassword, setSignUpPassword] = useState();
  const navigate = useNavigate();


  function handleFlip() {
    const form = document.getElementById('middle')
    if(!form.classList.contains("middle-flip")) form.classList.add("middle-flip")
    else form.classList.remove("middle-flip")
  }

  function handleOnLoginSubmit(e) {
    e.preventDefault();
    const form = {
      username: loginUserName,
      password: loginPassword
    }
    axios.post("http://localhost:8082/api/v1/auth/authenticate", form)
        .then(res=>{
          console.log(res.data)
          return res.data
        })
        .then(data=>{
          console.log(new Date().toUTCString())
          const cookies = new Cookies()
          cookies.set('token', data.token, {path: '/', secure: true, maxAge : 3600 * 24})
          console.log(cookies.get('token'))
          if(data !== undefined) {
            console.log("set user")
            setValue("https://i.seadn.io/gcs/files/3e25bc3431e5fe30f7417953535fefe3.png?auto=format&w=512")
            navigate("/")
          }
        })
        .catch(err=>{
          console.log(err.toJSON())
          console.log(err.response.status)
          alert(err.response.status)
        })
  }

  function handleOnSignUpSubmit(e) {
    e.preventDefault();
    const form = {
      name: signUpUserName,
      username: signUpUserName,
      password: signUpPassword
    }

    axios.post("http://localhost:8082/api/v1/auth/register", form)
        .then(res=>{
          console.log(res.data)
          return res.data
        })
        .then(data=>{
          console.log(data)
          const cookies = new Cookies()
          cookies.set('token', data.token, {path: '/', secure: true})
          console.log(cookies.get('token'))
        })
  }
  return (
    <div className='enter-wrap'>
      <div className="mainbody middle " id='middle'>
          <form className="form-box front" onSubmit={e=>handleOnLoginSubmit(e)}>
            <div>
              <h2>Login</h2>
            </div>
            <div>
              <input className="input-normal" type="text" placeholder="UserAccount" required={true} onChange={e=>setLoginUserName(e.target.value)}/>
              <input className="input-normal" type="password" placeholder="PassWord" required={true} onChange={e=>setLoginPassword(e.target.value)}/>
              <button className="btn-submit" type="submit">
                LOGIN
              </button>
            </div>
            <div>
              <p style={{marginTop: "40px"}}>If you don't have an account.Please</p>
              <p>Click here to <a id="signin" onClick={handleFlip}>Sign Up</a></p>
            </div>
          </form>

          <form className="form-box back" onSubmit={e=>handleOnSignUpSubmit(e)}>
            <div>
              <h2>Register</h2>
            </div>
            <div>
              <input className="input-normal" type="text" placeholder="UserAccount" required={true} onChange={e=>setSignUpUserName(e.target.value)}/>
              <input className="input-normal" type="password" placeholder="PassWord" required={true} onChange={e=>setSignUpPassword(e.target.value)}/>
              <button className="btn-submit" type="submit">
                Register
              </button>
            </div>
            <div>
              <p style={{marginTop: "40px"}}>Have an account ? You can</p>
              <p>Click here to <a id="login" onClick={handleFlip}>Log in</a></p>
            </div>
          </form>
        </div>
        <footer>Photo by <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on <a href="https://unsplash.com/s/photos/lighting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </footer>
    </div>
  )
}
