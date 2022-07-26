import React from 'react'

const CreatePost = () => {
  return (
    <div>
 <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
    </div>
  )
}

export default CreatePost