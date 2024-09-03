import html2canvas from "html2canvas"
import { useEffect, useId, useState } from "react"

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image:""
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevState => ({
            ...prevState,
            image: allMemes[randomNumber].url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
        }))
    }

    function generateImage() {
            html2canvas(document.getElementById("meme"), 
                {
                    logging: true, 
                    letterRendering: 1, 
                    allowTaint: false,
                    useCORS: true 
                })
                    .then(function (canvas) {
                        var image = canvas.toDataURL("image/png");
                        document.getElementById("downloadLink").href = image;
                    })
    }

    const id = useId()

    return (
        <main>
            <div className="form">
                <div className="input-container">
                    <div className="input">
                        <label htmlFor={id + "-topText"}>Top Text: </label>
                        <input
                            id={id + "-topText"}
                            type="text"
                            onChange={handleChange}
                            name="topText"
                            value={meme.topText}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor={id + "-bottomText"}>Bottom Text: </label>
                        <input
                            id={id + "-bottomText"}
                            className="bottom"
                            type="text" 
                            onChange={handleChange}
                            name="bottomText"
                            value={meme.bottomText} 
                        /> 
                    </div> 
                </div>
                <div className="btn">
                    <button onClick={getMemeImage} aria-label="Get a new meme image.">Get a new meme image</button> 
                </div>
            </div>
            <div id="meme">
                <img className="memeImg" src = {meme.image} alt={meme.image && "meme image"}/> 
                <h2 className="meme-text top">{meme.topText} </h2> 
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div> 
            <div className= {meme.image ? "final-btns" : "no-btns"}>
                <div className="btn">
                    <button onClick={generateImage} aria-label="Save meme.">Save meme</button>
                </div>
                <div className="btn">
                    <button><a id="downloadLink" href="" download="my_meme.png">Download your last saved meme</a></button>
                </div>
            </div>
        </main>
    )
}

export default Meme

