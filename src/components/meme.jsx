import React from "react"
import memesData from "../memesData.js"
import Form from "./form.jsx"

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
            <Form />
            <div>
            <button className="btn" onClick={getMemeImage} aria-label="Get a new meme image.">Get a new meme image</button>
            </div>
            <div>
            <img className="memeImg" src = {meme.image} alt={meme.image ? "meme image" : ""}/>
            </div>
        </main>
    )
}

export default Meme

