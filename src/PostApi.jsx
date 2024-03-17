import React from 'react'
import axios from 'axios'

const PostApi = () => {
    
    const submitHandler=(event)=>{
        event.preventDefault();
        const fname=event.target.fname.value;
        const lname=event.target.lname.value;
        const data = {fname,lname};
        axios.post('https://jsonplaceholder.typicode.com/posts',data).then((response)=>{
            console.log(response);
            event.target.reset();
        }).catch((e)=>{
            console.log(e);
        })
    }
  return (
    <div>
        <form action="" onSubmit={submitHandler}>
        <br />
        <label htmlFor="">First Name</label>
        <input type="text" name='fname' />
        <label htmlFor="">Last Name</label>
        <input type="text" name='lname' />
        <input type="submit" />
        </form>

    </div>
  )
}

export default PostApi