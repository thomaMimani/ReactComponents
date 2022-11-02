import Card from "../UI/Card"
import classes from './UserList.module.css'

const UserList=({users})=>{

    return (
        
        users.map(user=>{
            return(
              <Card className={classes.list}>
                <p>{user.username+ ' ' +user.age+'(Years Old)'}</p>
             </Card>
            )
        })


    )
}

export default UserList