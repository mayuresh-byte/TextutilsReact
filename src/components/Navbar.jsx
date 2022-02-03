import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = (props) => {
    // let initstate = props.mode
    // const [modepicker, setmodepicker] = useState(initstate);
    
    // const Modepicker = (input) => 
    // {
    //     setmodepicker(input);
    //     document.body.style.backgroundColor = modepicker;
    // }

    let md = props.mode;
    if(md == "#8fbff7")
    {
        md = "#002046";
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${md} bg-${md}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#' >About</a>
                            </li>
                        </ul>
                        <div className="container-fluid">
                            <a href="#" onClick={() => props.Modepicker("#8fbff7")}  className="specialbtn">Blue</a>
                        </div>
                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={()=>{props.ToggleMode("primary")}} style={{height:'30px', width:'30px', cursor: 'pointer' }}></div>
                            <div className="bg-success rounded mx-2" onClick={()=>{props.ToggleMode("success")}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
                            <div className="bg-danger rounded mx-2"  onClick={()=>{props.ToggleMode("danger")}} style={{height:'30px', width:'30px', cursor: 'pointer' }}></div>
                            <div className="bg-warning rounded mx-2" onClick={()=>{props.ToggleMode("warning")}} style={{height:'30px', width:'30px', cursor: 'pointer' }}></div>

                            
                        </div>

                        
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
