import React, { useEffect, useState } from 'react'
import './profile.css'
function Profile() {

    const [fetchedValue,setFetchedValue] = useState()
    const [userdata, setUserdata] = useState()
    const [posts, setPosts] = useState([]);
    const [userPosts,setUserPosts]= useState([]);



    useEffect(() => {
        fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(data => { 
            console.log("DATA: ",data);
            return setFetchedValue(data);
        });
        fetch(`http://localhost:8080/posts`)
        .then(res => res.json())
        .then(res=>{
            setPosts(res);
            console.log(posts);
        })
    },[])



    // posts.map(ele=>{
    //     if(ele.name === userdata.name){
    //       setUserPosts([...userPosts,ele])
    //     }
    // })

    // useEffect(()=>{
    //     fetch('http://localhost:8080/posts')
    //     .then(res => res.json())
    //     .then(res=>{
    //         setPosts(res);
    //         console.log(posts);
    //     })
    // },[])

    // posts.forEach(ele=>{
    //     if(ele.name===userdata.name){
    //       setUserPosts([...userPosts,ele])
    //     }
    // })

    
    
    useEffect(() => {
        fetchedValue && setUserdata(fetchedValue.find(v => v.name === localStorage.getItem("loginedUser")));
        // console.log("USERDATA: ",userdata);
    }, [fetchedValue, userdata])
    
    

return(
    
userdata ? (
    <div id='container'>
    <div className='Profile'>
    
        <div className='Details'>
            <h1 className='prof-head'>User Profile </h1>
            <div className='img-div'>
                <img className='prof-image' src={userdata.image} alt={userdata.name} />
            </div>
            <div className='details-info'>
            
            
                <h2 className='info-name'> {userdata && userdata.name}</h2>
           
            <div className='span-bio'>Bio</div>
            <h2 className='info-mail'><span className='span-info'>E-Mail:</span> {userdata && userdata.email}</h2>
            <h2 className='info'><span className='span-info'>Phone:</span>{userdata && userdata.phone}</h2>
            <h2 className='info'><span className='span-info'>Gender:</span>{userdata && userdata.gender}</h2>
            <h2 className='info'><span className='span-info'>DOB:</span>{userdata && userdata.dob}</h2>
            </div>
            <div className='edit'>
                <button className='edit-btn'>EDIT</button></div>
            
        </div>
        
    </div>
    <div className='allCards'>
        {
            userPosts.map(ele=>(
        <div className='Card'>
                <img id='profile-image' src={ele.image}/>
        </div>
            )
            )
}
    </div>
    
</div>
):<></>
)
}

export default Profile;