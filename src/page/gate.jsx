import React, {useContext, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../redux/actions";
import '../css/gate.css'
import {useAuth} from "../context/authContext";
import {auth, register} from "../service/ApiService";
import {message} from "antd";
export const Gate = () => {

  const {login, user} = useAuth();
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  const loginForm = useRef(
      {
        email: "",
        password: ""
      }
  )

  const signUpForm = useRef(
      {
        email: "",
        password: "",
        name: ""
      }
  )

  function handleFlip() {
    const form = document.getElementById('middle')
    if(!form.classList.contains("middle-flip")) form.classList.add("middle-flip")
    else form.classList.remove("middle-flip")
  }

  function handleOnLoginSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // login(loginForm.current);
    // dispatch(login(user))
    auth(loginForm.current).then(
        res => {
          if(res.status === 200) {
            // setUser(res.data.email)
            // console.log(res.data);
            message.success("Successfully login", 0.5).then(() => {
              window.location.assign("/");
            })
          }
        }
    ).catch(e => {
      message.error("Failed to login");
    }).finally(() => {
      setLoading(false);
    })
  }

  function handleOnSignUpSubmit(e) {
    e.preventDefault();
    register(signUpForm.current);
  }
  return (
    <div className='enter-wrap'>
      <div className="mainbody middle " id='middle'>
          <form className="form-box front" onSubmit={e=>handleOnLoginSubmit(e)}>
            <div>
              <h2>Login</h2>
            </div>
            <div>
              <input className="input-normal"
                     type="text"
                     placeholder="User account"
                     required={true}
                     onChange={e=>loginForm.current.email = e.target.value}/>
              <input className="input-normal"
                     type="password"
                     placeholder="Password"
                     required={true}
                     onChange={e=>loginForm.current.password = e.target.value}/>
              <button className="btn-submit" type="submit">
                {loading?'Login...':'Login'}
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
              <input className="input-normal"
                     type="text"
                     placeholder="User account"
                     required={true}
                     onChange={e=>signUpForm.current.email = e.target.value}/>
              <input className="input-normal"
                     type="password"
                     placeholder="Password"
                     required={true}
                     onChange={e=>signUpForm.current.password = e.target.value}/>
              <input className="input-normal"
                     type="text"
                     placeholder="Name"
                     required={true}
                     onChange={e=>signUpForm.current.name = e.target.value}/>
              <button className="btn-submit" type="submit">
                Register
              </button>
            </div>
            <div>
              <p style={{marginTop: "40px"}}>Have an account? You can</p>
              <p>Click here to&nbsp;
                <a id="login" onClick={handleFlip}>Log in</a>
              </p>
            </div>
          </form>
        </div>
        <footer>Photo by&nbsp;
          <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on&nbsp;
          <a href="https://unsplash.com/s/photos/lighting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> and&nbsp;
          <a href="https://freefrontend.com/css-animated-backgrounds/">Diyorbek Olimov</a>
        </footer>
    </div>
  )
}
