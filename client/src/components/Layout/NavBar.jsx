import "./navbar.scss"
export default function NavBar({which}) {
    return (
        <nav className='companies__navbar' style={{position:"fixed"}}>
            <div className='companies__container' style={{ background: "transparent" }}>
              
                <div class styles={which==="companies" ? { marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px" ,borderRight:"1px solid #fff",color:"black"}:{ marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px" ,borderRight:"1px solid #fff"}}>
                    For Developpers
                </div>
                <div styles={which==="companies" ? { marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px",color:"black" } : { marginLeft: '30px', fontSize: "20px", background: "transparent" , width:"200px"} }>
                    For Companies   
                </div>
            </div>
            <div className='companies__nav-user'>
                <button className="button" styles={which==="companies" ? { boxShadow: "inset 0 0 0 1px black" , color : "black" } : { boxShadow: "inset 0 0 0 1px white" } }>Log in</button>
                <button className="button" styles={which==="companies" ? {color : "black" }:undefined} >Join</button>
            </div>
        </nav>
    )
}
