import React from "react"
import { Link } from 'gatsby'
import '../styles/index.css'

const IndexPage = () => {
    return (
        <div>
            <h1>Calendar App</h1>
            <div>
                <p>Please login to continue</p>
                <Link to='/calendar'>Bob</Link>
                <Link to='/calendar'>Robert</Link>
            </div>
        </div>
    )
}

export default IndexPage