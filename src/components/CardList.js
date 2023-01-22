import React from 'react'
import CardItem from './CardItem'

const CardList = ({posts}) => {
  return (
   <div className='container'>
    <div className='row'>
{
    posts.length?(
        posts.map((item)=>{
return(    <CardItem key={item.id} item={item}/>)
        })
    ):(null)
} 
    </div>
   </div>
  )
}

export default CardList
