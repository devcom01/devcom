import React, { useState } from 'react'
import {Avatar, Button, Input, Modal, TextareaAutosize, Typography} from '@mui/material'
import {ImShrink2} from  'react-icons/im'
import { Box } from '@mui/system'
import DateTimePicker from 'react-datetime-picker';
import { useNavigate } from 'react-router-dom';


const ListingAll = () => {
  const [open,setopen]=useState(false)
    const [view,setView]=useState(
        {class:"listing__info__container",
        mainClass:"listing__mainsection",
        selected : false , 
        selectedItem : null ,
        
        
        
    })
  return (
    <div className="listing__listingAll">
      <h3>Showing n jobs</h3>
      <div className={view.mainClass} >
    <div className={view.class} >
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
<button  style={{cursor:"pointer"} } onClick={e=>setView( view =>  {
        if (view.class =="listing__info__container") { return {mainClass:"listing__mainsection flex" ,class:"containershort" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"listing__info__container" , selected:false,selectedItem:null}} } )}>See more </button>
</div>
    </div>
    <div className={view.class} >
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
<button onClick={e=>setView( view =>  {
        if (view.class =="listing__info__container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"listing__info__container" , selected:false,selectedItem:null}} } )}>See more </button>
</div>
    </div>    <div className={view.class} >
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
<button onClick={e=>setView( view =>  {
        if (view.class =="listing__info__container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"listing__info__container" , selected:false,selectedItem:null}} } )}>See more </button>
</div>
    </div>    <div className={view.class} >
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
<button onClick={e=>setView( view =>  {
        if (view.class =="listing__info__container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"listing__info__container" , selected:false,selectedItem:null}} } )}>See more </button>
</div>
    </div>
    
   

      </div>
 {view.selected &&
<div className="specific__offer">
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
      <h2>overview :</h2>onClick
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem molestiae quaerat aperiam facilis dicta minus quod nesciunt odio? Sequi fugit molestias atque eum vitae labore nisi maiores minima nostrum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptate tempora dicta culpa magni esse id consequatur accusantium quam! Nihil recusandae saepe neque labore, repellat beatae doloremque ducimus libero voluptates?</p>
    </div>
<div className="description">
<h2>description :</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem molestiae quaerat aperiam facilis dicta minus quod nesciunt odio? Sequi fugit molestias atque eum vitae labore nisi maiores minima nostrum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptate tempora dicta culpa magni esse id consequatur accusantium quam! Nihil recusandae saepe neque labore, repellat beatae doloremque ducimus libero voluptates?</p>
 
</div>
<div className="offer_infos__buttons">
  <button style={{cursor:"pointer"}} onClick={e=>setopen(true)}>Apply now</button>
</div>
<ImShrink2 style={{cursor:"pointer"}} onClick={e=>setView( view =>  {
        if (view.class =="listing__info__container") { return {mainClass:"listing__mainsection flex" ,class:view.class+"short" , selected:true , selectedItem:{}} } else {return {mainClass:"listing__mainsection",class:"listing__info__container" , selected:false,selectedItem:null}} } )}/>
    <Modal
  open={open}
  onClose={e=>setopen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{background:"#fff",margin:"150px",height:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fff"}}>
    <Typography id="modal-modal-title" color="#000" variant="h5" component="h2">
      Please submit your cover letter
    </Typography>
    <TextareaAutosize style={{padding:"10px",width:"500px",height:"150px",color:"#000"}}></TextareaAutosize>
    <Typography color="#000" variant="h5" component="h2">Chose a date for an online interview</Typography>
    <DateTimePicker />
    <Button onClick={e=>setopen(false)}>Submit now </Button>
  </Box>
</Modal>

  </div>
</div>}
    </div>
  )
}

export default ListingAll
