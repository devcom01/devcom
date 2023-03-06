import React from 'react'
import bg from "../../assets/imgs/bg.jpg"
import face from "../../assets/imgs/face-2.png"
import Typewriter from "typewriter-effect";
const header = () => {
  return (
    <div> 
      <section class="bg-gray-900 dark:bg-gray-900"> 
      <div class="aa">
      
   
      </div>
      {/* <img class="img" src={face}/> */}
      <p class="font-sans font-extrabold p-discover  z-20 ml-96 text-6xl  text-white">Discover me</p>
      <p class=" font-mono  p-build z-20 ml-96 text-sm mb-9 text-white"> 
      
<Typewriter
  options={{
    strings: [ "I build Resume ." ],
    autoStart: true,
    loop: true,
  }}
/>
      

      </p>
     
    </section>
      
    </div>
  )
}

export default header




// import React from 'react'
// import bg from "../../assets/imgs/bg.jpg"
// import face from "../../assets/imgs/face-2.png"
// const header = () => {
//   return (
//     <div> 
//       <section class="bg-gray-900 dark:bg-gray-900 sectionh"> 
     
//       {/* <img class="img" src={face}/> */}
      
     
//     </section>
//     <p class="p-discover  z-20 ml-96 text-6xl  text-gray-900">Discover me</p>
//     <p class=" p-build z-20 ml-96 text-sx mb-9 text-white">  I build Resume. 

//       </p>
      
//     </div>
//   )
// }

// export default header
