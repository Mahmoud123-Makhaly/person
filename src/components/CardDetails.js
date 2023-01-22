import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    const param = useParams();
    const [post , setPost] = useState([])
    const[comment , setComment] = useState([])
    const[ person, setPerson] = useState([])
    const getPosts = async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
        setPost(res.data)
    }
useEffect(()=>{getPosts()} , [])
//Get Comments
 const getComments = async()=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${param.id}`)
setComment(res.data) 
}
useEffect(()=>{getComments()} , [])
//Get user
const getPerson = async()=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${param.id}`)
setPerson(res.data)
}
useEffect(()=>{getPerson()} , [])
  return (
    <div className='cardDetails'>
<div className='details-info'>
<div class="alert alert-danger">
<h6>Title: <span className='card-info'> {post.title}</span></h6> 
</div>
<div class="alert alert-danger" >
<h6>Body: <span className='card-info'>{post.body}</span></h6>
</div>
<div class="alert alert-warning">
<h6>Name: <span className='card-info'>{comment.name}</span></h6>
</div>
<div class="alert alert-warning" >
<h6>Email: <span className='card-info'>{comment.email}</span></h6>
</div>
<div class="alert alert-primary" >
<h6>phone: <span className='card-info'>{person.phone}</span></h6>
</div>
<div class="alert alert-primary" >
<h6>Website: <span className='card-info'>{person.website}</span></h6>
</div>

</div>
    </div>
  )
}

export default CardDetails
