import React from 'react'
import Landing from '../../assets/imgs/landing.png'
const Layout = () => {
  return (
    <div>
      <h1 class="text-6xl font-sans mx-10 leading-normal mt-44 mb-2 text-gray-900">
       Our mission is to
       <br/>
conquer the world   
</h1>
<p class=" text-xs font-sans mx-10 leading-normal mt-0 mb-0 text-gray-900">
Just kidding, our mission is to provide you with the tools to conquer
<br/>

the world. One great project at a time.
    
</p>
<div >
<img src={Landing} class="w-5/6 mx-36"/></div>
    </div>
  )
}

export default Layout
