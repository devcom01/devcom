import React from 'react'
import { useNavigate } from 'react-router-dom'
import './error.scss'
const error = () => {
    const navigate = useNavigate()
  return (
<div className="error__page">


  <div>
    <div class="starsec"></div>
    <div class="starthird"></div>
    <div class="starfourth"></div>
    <div class="starfifth"></div>
  </div>


  <div class="lamp__wrap">
    <div class="lamp">
      <div class="cable"></div>
      <div class="cover"></div>
      <div class="in-cover">
        <div class="bulb"></div>
      </div>
      <div class="light"></div>
    </div>
  </div>

  <section class="error">

    <div class="error__content">
      <div class="error__message message">
        <h1 class="message__title">CATCHA ! YOU IMPOSTER </h1>
          </div>
      <div class="error__nav e-nav" onClick={navigate("/")}>
        <a href="/" target="_blanck" class="e-nav__link"></a>
      </div>
    </div>


  </section>


</div>

  )
}

export default error


