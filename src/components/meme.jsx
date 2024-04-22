import React from "react"
import memesData from "../memesData.js"

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image:""
    })

    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => ({
            ...prevState,
            image: memesArray[randomNumber].url
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="top">
                    <label>Top text</label>
                    <input type="text" name="top"></input>
                </div>
                <div className="bottom">
                    <label>Bottom text</label>
                    <input type="text" name="bottom"></input>
                </div>
                <button className="btn" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img className="memeImg" src = {meme.image} />
        </main>
    )
}

export default Meme

