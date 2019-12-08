import React from "react"
import Calendar from 'react-calendar'
import Popup from "reactjs-popup";


const IndexPage = () => {
    const clicked = () => {
        return (
            <Popup position="right center">
                <div>Popup content here !!</div>
            </Popup>
        )
    }

    return (
        <div>
            <h1>Tasks</h1>
            <Calendar onClickDay={clicked} />
            <Popup position="right center">
                <div>Popup content here !!</div>
            </Popup>
        </div>
    )
}


export default IndexPage