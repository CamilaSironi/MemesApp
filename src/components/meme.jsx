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
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            
        }))
    }

    const id = React.useId()

    return (
        <main>
            <div className="form">
                <div className="input">
                    <label htmlFor={id + "-topText"}>Top Text</label>
                    <input
                        id={id + "-topText"}
                        type="text"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                </div>
                <div className="input">
                    <label htmlFor={id + "-bottomText"}>Bottom Text</label>
                    <input
                        id={id + "-bottomText"}
                        className="bottom"
                        type="text"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>
                <div>
                    <button className="btn" onClick={getMemeImage} aria-label="Get a new meme image.">Get a new meme image</button>
                </div>
            </div>
            <div className="meme">
                <img className="memeImg" src = {meme.image} alt={meme.image && "meme image"}/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme

