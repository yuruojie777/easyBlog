import React, { useContext, useRef } from 'react'
import '../css/gate.css'
import {AuthContext} from "../context/authContext";
import {auth, register} from "../service/ApiService";
export const Gate = () => {

  const {value, setValue} = useContext(AuthContext);

  const loginForm = useRef(
      {
        username: "",
        password: ""
      }
  )

  const signUpForm = useRef(
      {
        username: "",
        password: ""
      }
  )

  function handleFlip() {
    const form = document.getElementById('middle')
    if(!form.classList.contains("middle-flip")) form.classList.add("middle-flip")
    else form.classList.remove("middle-flip")
  }

  function handleOnLoginSubmit(e) {
    e.preventDefault();
    auth(loginForm.current);
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
                     placeholder="UserAccount"
                     required={true}
                     onChange={e=>loginForm.current.username = e.target.value}/>
              <input className="input-normal"
                     type="password"
                     placeholder="PassWord"
                     required={true}
                     onChange={e=>loginForm.current.password = e.target.value}/>
              <button className="btn-submit" type="submit">
                Login
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
                     placeholder="UserAccount"
                     required={true}
                     onChange={e=>signUpForm.current.username = e.target.value}/>
              <input className="input-normal"
                     type="password"
                     placeholder="PassWord"
                     required={true}
                     onChange={e=>signUpForm.current.password = e.target.value}/>
              <button className="btn-submit" type="submit">
                Register
              </button>
            </div>
            <div>
              <p style={{marginTop: "40px"}}>Have an account ? You can</p>
              <p>Click here to
                <a id="login" onClick={handleFlip}>Log in</a>
              </p>
            </div>
          </form>
        </div>
        <footer>Photo by
          <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on
          <a href="https://unsplash.com/s/photos/lighting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </footer>
    </div>
  )
}
