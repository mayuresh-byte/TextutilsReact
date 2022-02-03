import React, { useState,  useRef } from 'react'

const TextForm = (props) => {

    
    const textAreaRef = useRef(null);
    


    const CopyToClipboard = (e) =>
    {
        textAreaRef.current.select();
        document.execCommand('copy');
        alert("Text Copied")
    }

    const HandleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const HandleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const HandleSortClick = () => {
        const words = Text.split(" ");
        words.sort();
        let newText = words.join(' ');
        setText(newText);
    }

    const FindWord = (event) => {
        setFind(event.target.value);
    }

    const Takeinp2 = (event) => {
        setinp2(event.target.value);
    }

    const ReplaceWords = () => {
        let newText = Text.replaceAll(Find, inp2);
        setText(newText);
        setshowForm(false);

    }

    const [showForm, setshowForm] = useState(false);
    const [Find, setFind] = useState("");
    const [inp2, setinp2] = useState("");

    const FormInput = () => {
        return (
            <div className="input-group">
                <div className="container col-6">
                    <input type="text" aria-label="First name" value={Find} onChange={FindWord} placeholder='Which word to replace' className="form-control" />

                    <span className="material-icons d-flex justify-content-center">arrow_downward</span>
                    <input type="text" aria-label="Last name" value={inp2} onChange={Takeinp2} placeholder='Replace by ' className="form-control" />
                    <div className="container d-flex justify-content-center  my-3">
                        <button type="button" onClick={ReplaceWords} class="btn btn-info">Confirm Replace</button>
                    </div>

                </div>
            </div>
        );
    }

    // const HandleReplaceClick = () => {

    //     // showForm();
    //     // let newText = Text.replace("", "");
    //     // setText(newText);
    //     console.log("Clicked")
    // }

    const GetText = (event) => {
        setText(event.target.value);
    }

    const [Text, setText] = useState("");

    return (
        <div>
            <div className='container'>
                <div className="container my-4 col-8">
                    <div className="mb-3 my-4">
                        <label htmlFor="MyInputBox" className="form-label text-center"><h2 className={`text-center text-${props.mode === 'dark'? 'light':'dark'}`}>Enter your text here</h2></label>
                        <textarea className={`form-control text-${props.mode === 'dark'? 'light':'dark'} bg-${props.mode}`} ref={textAreaRef} value={Text} onChange={GetText} rows="8" id="MyInputBox" />
                    </div>

                    <div className='container d-flex '>
                        <button type="button" onClick={HandleUpClick} className="btn btn-success mx-1">Convert to upper case</button>

                        <button type="button" onClick={HandleLoClick} class="btn btn-danger mx-1">Convert to Lower case</button>

                        <button type="button" onClick={HandleSortClick} class="btn btn-primary mx-1">Sort</button>

                        <button type="button" onClick={() => setshowForm(true)} class="btn btn-warning mx-1">Replace</button>

                        <button type="button" onClick={CopyToClipboard} class="btn btn-info mx-1">Copy To Clipboard</button>

                    </div>
                </div>

                <div className="container">
                    {showForm ? FormInput() : null}
                </div>

                <div className="my-4 col-8">
                    <div className="mb-3 my-4">
                        <h1>Text Summary </h1>
                        <span>Total Words : {Text.replace(/\s+/g,' ').trim().split(" ").length} </span>
                        <br />
                        <span>Total Characters : {Text.length} </span>
                        <br />
                        <span>It will take : {((Text.split(" ").length) * 0.008).toFixed(2)} minutes to read the paragraph</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default TextForm
