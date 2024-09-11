import React from 'react'
import { useState } from 'react'
import '../Asset/App.css'

const Facebook = () => {
    const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)

    return (
        <div>
            {
                button1 ? null :
                button2 ? null :

                        <div className="container">
                            <h1>Are you registered?</h1>
                            <button className="button" onClick={() => setButton1(true)}>True</button>
                            <button className="button" onClick={() => setButton2(true)}>False</button>
                        </div>
            }
            {
                button1 ?
                    <div className="form-container">
                        <h2>Log in to your account</h2>
                        <input type="text" placeholder="Enter your username" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <button className="button">Log in</button>
                    </div> : null
            }

            {
                button2 ?
                    <div className="form-container">
                        <h2>Signup to your account</h2>
                        <input type="text" placeholder="Enter your full name" className="input" />
                        <input type="text" placeholder="Enter your username" className="input" />
                        <input type="email" placeholder="Enter your email" className="input" />
                        <input type="password" placeholder="Create password" className="input" />
                        <input type="password" placeholder="Confirm password" className="input" />
                        <button className="button">Sign Up</button>
                    </div> : null
            }

        </div>
    )
}

export default Facebook