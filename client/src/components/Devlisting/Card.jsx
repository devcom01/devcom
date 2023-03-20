import React from 'react'

const Card = () => {
  return (
    <div class="card-container">
	<span class="pro">Matched</span>
	<img class="round" style={{ paddingLeft: '10px'}} src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Ricky Park</h3>
	<h6>New York</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Take a deep look
		</button>
	</div>
	<div class="skills">
		<h6>stack : </h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>

  )
}

export default Card
