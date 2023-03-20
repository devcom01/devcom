import { useNavigate } from "react-router-dom"
import "./navbar.scss"
export default function NavBar({which}) {
    const navigate = useNavigate()
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
                <button className="nav__button" style={which==="companies" ? { boxShadow: "inset 0 0 0 1px black" , color : "black" } : { boxShadow: "inset 0 0 0 1px white" , color:"#fff" } } onClick={e=>{
                    which==="companies" ?  navigate("/company/signup") : navigate("/testdev") 
                }}>Join</button>
                <button className="nav__button" onClick={e=>{
                   which==="companies" ?  navigate("/company/signin") : navigate("/developer/signin") 
                }}  style={which==="companies" ? { boxShadow: "inset 0 0 0 1px black" , color : "black" } : { boxShadow: "inset 0 0 0 1px red" , color:"#fff" } } >Log in </button>
            </div>
        </nav>
    )
}
