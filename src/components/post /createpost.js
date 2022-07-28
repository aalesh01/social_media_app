import React, { useState } from 'react';
import { FormControl,FormLabel,Input,FormHelperText, Button,Heading} from '@chakra-ui/react';
import './createpost.css'
import { sliderClasses } from '@mui/material';

const CreatePost = () => {
  
    const [user,setUser]=useState({"like_count":0, "date":new Date().toISOString().slice(0,10),"comments":[]});
    
    const handleForm= (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value ,})
    }

    const handleSubmit = async (event) => {
        console.log(user)
        await fetch(`http://localhost:3000/posts`, {
            method: "PATCH",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
        alert("Login Successfull");
    }

  
  return (
    
 <div className='postForm'>
  <Heading>Create a Post</Heading>
 <FormControl colorScheme='blackAlpha' isRequired>
  <FormLabel>Name</FormLabel>
  <Input onChange={handleForm} name="name" type='text' />
  <FormLabel>Image Link</FormLabel>
  <Input onChange={handleForm} name="image" type='text' />
  <FormLabel>Write a post</FormLabel>
  <Input onChange={handleForm} name="text" type='text' />
  <Button onClick={()=>handleSubmit()} >Post</Button>
</FormControl>
</div>
  )
}


export default CreatePost