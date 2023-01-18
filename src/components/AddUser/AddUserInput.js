import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUserInput.module.css'
import ErrorModal from '../UI/ErrorModal';

const AddUser = props =>{

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const AddUserHandler = (e) => {
         e.preventDefault();

         if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
         }

         if(+enteredAge<1){
            return;
         }

         props.onAddUser(enteredUsername,enteredAge);
         //console.log(enteredUsername,enteredAge);
         setEnteredUsername('');
         setEnteredAge('')
    }

    const UserNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <div>
            {/* Adding Error Modal */}
        <ErrorModal title="An Error occured!" message="Something went wrong!"></ErrorModal>
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                 <label htmlFor='username'>UserName :</label>
                 <input id='username' type="text" value={enteredUsername} onChange={UserNameChangeHandler}></input>
                 <label htmlFor='age'>Age (in Years):</label>
                 <input id='age' type="number" value={enteredAge} onChange={AgeChangeHandler}></input>
                 <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;