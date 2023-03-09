import "./navbar.scss"
export default function NavBar({which}) {
    return (
        <nav className='navbar' style={{position:"fixed"}}>
            <div className='container' style={{ background: "transparent" }}>
              
                <div style={which==="companies" ? { marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px" ,borderRight:"1px solid #fff",color:"black"}:{ marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px" ,borderRight:"1px solid #fff"}}>
                    For Developpers
                </div>
                <div style={which==="companies" ? { marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px",color:"black" } : { marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px"} }>
                    For Companies
                </div>
            </div>
            <div className='nav-user'>
                <button style={which==="companies" ? { boxShadow: "inset 0 0 0 1px black" , color : "black" } : { boxShadow: "inset 0 0 0 1px white" } }>Log in</button>
                <button style={which==="companies" && {  color : "black" } } >Join</button>
            </div>
        </nav>
    )
}
