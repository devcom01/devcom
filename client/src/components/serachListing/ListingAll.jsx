import React, { useState } from 'react'
import {Avatar} from '@mui/material'
import {IoIosExit} from  'react-icons/io'
const ListingAll = () => {
    const [view,setView]=useState(
        {class:"container",
        mainClass:"listing__mainsection",
        selected : false , 
        selectedItem : null ,
        
        
        
    })
  return (
    <div className="listing__listingAll">
      <h3>Showing n jobs</h3>
      <div className={view.mainClass} >
    <div className={view.class} onClick={e=>setView( view =>  {
        if (view.class =="container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"container" , selected:false,selectedItem:null}} } )}>
    <Avatar sx={{ bgcolor: 'green' , transform:'scale(1.2)' }} variant="rounded">
 H
</Avatar>
<div className="listing__info">
<h4>title of ad</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatibus illo consequatur perspiciatis? Quaerat,</p>
<div className="short_keywords">
<p >Full time </p>
<p >Min 1 yearExp</p>
<p >senior level</p>
</div>
<button>Apply now </button>
</div>
    </div>
    <div className={view.class} onClick={e=>setView( view =>  {
        if (view.class =="container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"container" , selected:false,selectedItem:null}} } )}>
    <Avatar sx={{ bgcolor: 'green' , transform:'scale(1.2)' }} variant="rounded">
 H
</Avatar>
<div className="listing__info">
<h4>title of ad</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatibus illo consequatur perspiciatis? Quaerat,</p>
<div className="short_keywords">
<p >Full time </p>
<p >Min 1 yearExp</p>
<p >senior level</p>
</div>
<button>Apply now </button>
</div>
    </div>
    <div className={view.class} onClick={e=>setView( view =>  {
        if (view.class =="container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"container" , selected:false,selectedItem:null}} } )}>
    <Avatar sx={{ bgcolor: 'green' , transform:'scale(1.2)' }} variant="rounded">
 H
</Avatar>
<div className="listing__info">
<h4>title of ad</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatibus illo consequatur perspiciatis? Quaerat,</p>
<div className="short_keywords">
<p >Full time </p>
<p >Min 1 yearExp</p>
<p >senior level</p>
</div>
<button>Apply now </button>
</div>
    </div>
   
    <div className={view.class} onClick={e=>setView( view =>  {
        if (view.class =="container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"container" , selected:false,selectedItem:null}} } )}>
    <Avatar sx={{ bgcolor: 'green' , transform:'scale(1.2)' }} variant="rounded">
 H
</Avatar>
<div className="listing__info">
<h4>title of ad</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatibus illo consequatur perspiciatis? Quaerat,</p>
<div className="short_keywords">
<p >Full time </p>
<p >Min 1 yearExp</p>
<p >senior level</p>
</div>
<button>Apply now </button>
</div>
    </div>
    
    <div className={view.class} onClick={e=>setView( view =>  {
        if (view.class =="container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"container" , selected:false,selectedItem:null}} } )}>
    <Avatar sx={{ bgcolor: 'green' , transform:'scale(1.2)' }} variant="rounded">
 H
</Avatar>
<div className="listing__info">
<h4>title of ad</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatibus illo consequatur perspiciatis? Quaerat,</p>
<div className="short_keywords">
<p >Full time </p>
<p >Min 1 yearExp</p>
<p >senior level</p>
</div>
<button>Apply now </button>
</div>
    </div>
    
   

      </div>
 {view.selected &&
<div className="specific__offer">
  
<IoIosExit onClick= {e=>{setView( view =>  {
        if (view.class =="container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"container" , selected:false,selectedItem:null}} } )}} style={{position:"absolute" ,scale:'2', zIndex:"6",color:"#0062ff"}}/>
  <div className="cover"  style={{"--bg-image": "url('https://wallpaperset.com/w/full/6/d/c/87298.jpg')"}} >
    <Avatar sx={{ bgcolor: 'green' ,  border:"2px solid #fff", scale:'2' ,  position:"absolute" , zIndex:"5",bottom:"20px",left:"10%" }} variant="rounded">
 H
</Avatar > 
  </div>
  <div className="offer__info">

    <h2> name of the offer</h2>
    <div className="details">
    <h4>auther name</h4>
    <h5>posted </h5>
    <h5>n applicants</h5>
    </div>
    <div className="summary">
      <div className="expeience">
        <h6>Experience</h6>
        <h5>minimum 1 yera</h5>
      </div>
      <div className="expeience">
        <h6>Work level</h6>
        <h5>senior</h5>
      </div>
      <div className="expeience">
        <h6>job time</h6>
        <h5>full time</h5>
      </div>
      <div className="expeience">
        <h6>offer salary</h6>
        <h5>2100DT/Month</h5>
      </div>
    </div>
    <div className="overview">
      <h2>overview :</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem molestiae quaerat aperiam facilis dicta minus quod nesciunt odio? Sequi fugit molestias atque eum vitae labore nisi maiores minima nostrum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptate tempora dicta culpa magni esse id consequatur accusantium quam! Nihil recusandae saepe neque labore, repellat beatae doloremque ducimus libero voluptates?</p>
    </div>
<div className="description">
<h2>description :</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem molestiae quaerat aperiam facilis dicta minus quod nesciunt odio? Sequi fugit molestias atque eum vitae labore nisi maiores minima nostrum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptate tempora dicta culpa magni esse id consequatur accusantium quam! Nihil recusandae saepe neque labore, repellat beatae doloremque ducimus libero voluptates?</p>
 
</div>
    
  </div>
</div>}
    </div>
  )
}

export default ListingAll
