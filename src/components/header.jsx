import logo from "../img/troll.png"

function Header() {
    return(
        <section className="header">
            <img className="logo" alt="troll-face" src={logo}/>
            <h2 className="title">Meme Generator</h2>
        </section>
    )
}

export default Header