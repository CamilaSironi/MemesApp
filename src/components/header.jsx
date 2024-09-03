import logo from "../img/troll.png"

function Header() {
    return(
        <div className="header">
            <div className="logo">
                <img alt="troll-face" src={logo}/>
            </div>
            <h2 className="title">Meme Generator</h2>
        </div>
    )
}

export default Header