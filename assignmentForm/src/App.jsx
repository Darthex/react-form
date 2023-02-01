import React from 'react'

export default function App() {
    return(
        <div>
            <form>
                <label>First Name: </label>
                <input type="text"/><br/><br/>
                <label>Email: </label>
                <input type="email"/><br/><br/>
                <label>Password: </label>
                <input type="password"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}