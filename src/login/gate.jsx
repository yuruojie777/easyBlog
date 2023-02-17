import React from 'react'
import './gate.css'
import { Register } from '../login/register';
import { Login } from '../login/login';

export const Gate = () => {

  function handleFlip() {
    const form = document.getElementById('middle')
    if(!form.classList.contains("middle-flip")) form.classList.add("middle-flip")
    else form.classList.remove("middle-flip")
  }
  return (
    <div className='enter-wrap'>
      <div className="mainbody middle " id='middle'>
          <form className="form-box front">
            <div>
              <h2>Login</h2>
            </div>
            <div>
              <input className="input-normal" type="text" placeholder="UserAccount" />
              <input className="input-normal" type="password" placeholder="PassWord" />
              <button className="btn-submit" type="submit">
                LOGIN
              </button>
            </div>
            <div>
              <p style={{marginTop: "40px"}}>If you don't have account.Please</p>
              <p>Click here to <a id="signin" onClick={handleFlip}>Sign Up</a></p>
            </div>
          </form>

          <form className="form-box back">
            <div>
              <h2>Register</h2>
            </div>
            <div>
              <input className="input-normal" type="text" placeholder="UserAccount" />
              <input className="input-normal" type="password" placeholder="PassWord" />
              <button className="btn-submit" type="submit">
                Register
              </button>
            </div>
            <div>
              <p style={{marginTop: "40px"}}>Have a account ? You can</p>
              <p>Click here to <a id="login" onClick={handleFlip}>Log in</a></p>
            </div>
          </form>
        </div>
        <footer>Photo by <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on <a href="https://unsplash.com/s/photos/lighting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </footer>
    </div>
  )
}
