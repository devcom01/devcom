import "./navbar.scss"
export default function NavBar() {
    return (
        <nav className='navbar'>
            <div className='container' style={{ background: "transparent" }}>
                <div style={{ width: "400px", background: "transparent" }}>

                </div>
                <div style={{ marginLeft: '30px', fontSize: "20px", background: "transparent" }}>
                    For Developpers
                </div>
                <div style={{ marginLeft: '30px', fontSize: "20px", background: "transparent" }}>
                    For Companies
                </div>
            </div>
            <div className='nav-user'>
                <button style={{ boxShadow: "inset 0 0 0 1px white" }}>Log in</button>
                <button>Join</button>
            </div>
        </nav>
    )
}
