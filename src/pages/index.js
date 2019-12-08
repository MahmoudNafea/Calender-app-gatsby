import React, { useState } from "react"
import '../styles/index.scss'



const IndexPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userData = { username, password }

    const loginHandler = (e) => {
        e.preventDefault()

        const usersList = ['bob', 'robert']
        if (usersList.includes(username.toLowerCase())) {
            console.log(username)
        }
    }

    return (
        <div>
            <h1>Calendar App</h1>
            <div>
                <p>Please login to continue</p>
                <form onSubmit={loginHandler}>
                    <label>Username</label>
                    <input type="text" placeholder="Only as Bob or Robert"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" >Login</button>
                </form>
            </div>
        </div>
    )
}

export default IndexPage