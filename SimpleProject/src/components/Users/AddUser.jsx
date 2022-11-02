import Card from "../UI/Card"
import classes from './AddUsers.module.css'
import Button from "../UI/Button"
import { useState } from "react"
const AddUser=props=>{

    const [enteredUsername, setEnteredUsername]=useState('')
    const [enteredAge, setEnteredAge]=useState('')

    const addUserHandler=(e)=>{
        e.preventDefault()
        if(enteredUsername.trim().length===0|| enteredAge.trim().length===0) return
        if(+enteredAge<0) return

        props.addUser(enteredUsername ,enteredAge)

        setEnteredUsername('')
        setEnteredAge('')
    }

    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value)

    }

    function ageChangeHandler(event){
        setEnteredAge(event.target.value)

    }

    return(
        <Card className={classes.input}>

        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler} />
            <label htmlFor="age">Age(Years)</label>
            <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser