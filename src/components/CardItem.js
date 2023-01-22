import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({item}) => {
  return (
    <div className='col-lg-6'>
    <div class="card my-3">

<div class="card-body ">
  <p class="card-text">{item.body}</p>
<Link to={`/posts/${item.id}`}>  <a href="#" class="btn btn-primary">Go To Details</a></Link>
</div>
</div>
    </div>
  )
}

export default CardItem
