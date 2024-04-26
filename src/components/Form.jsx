import React from "react"

function Form() {
    const [formData, setFormData] = React.useState(
        {topText: "", bottomText: ""}
    )
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form className="form">
            <input
                className="top"
                type="text"
                placeholder="Top Text"
                onChange={handleChange}
                name="topText"
                value={formData.topText}
            />
            <input
                className="bottom"
                type="text"
                placeholder="Bottom Text"
                onChange={handleChange}
                name="bottomText"
                value={formData.bottomText}
            />
        </form>
    )
}

export default Form