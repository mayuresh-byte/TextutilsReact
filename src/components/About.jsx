import React, { useState } from 'react'

const About = () => {

    const [Mode, setMode] = useState(
        {
            color: 'black',
            backgroundColor: 'white',
        }
    );
    
    const [btntxt, setbtntxt] = useState("Enale Dark Mode");

    const ToggleMode = () => {
        if (Mode.backgroundColor === 'white') {
            setMode(
                {
                    color: 'white',
                    backgroundColor: 'black',
                    border: '2px white solid'
                    
                }
            )
            setbtntxt("Back To White");
        }
        else if(Mode.backgroundColor === 'black')
        {
            setMode(
                {
                    color: 'black',
                    backgroundColor: 'white',
                }
            )
            setbtntxt("Enale Dark Mode");
        }
    }


    return (
        <div className='container my-3' style={Mode}>
            <h1 className='text-center'>About US</h1>
            <div className="accordion my-3" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={Mode}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" style={Mode} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body " >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={Mode}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" style={Mode} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={Mode}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" style={Mode} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3 d-flex justify-content-center">
                <button type="button" onClick={ToggleMode} class="btn btn-outline-dark">{btntxt}</button>
            </div>

        </div>

    )
}

export default About
