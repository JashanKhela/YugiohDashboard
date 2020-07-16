import React, { Fragment, useState } from "react";
import { set } from "mongoose";

export const DuelArena = () => {
    const [duelist1, setduelist1] = useState({
        name: null,
        lp: 10000
    })
    const [duelist2, setduelist2] = useState({
        name: null,
        lp: 10000
    })
    const [step, setStep] = useState({
        step: 1
    })
    const handleChange1 = (e) => {
        console.log(e.target.value)
        setduelist1({
            ...duelist1,
            name: e.target.value
        });
    }
    const handleChange2 = (e) => {
        console.log(e.target.value)
        setduelist2({
            ...duelist2,
            name: e.target.value
        });
    }
    return (
        <Fragment>

            <div class="container">
                {step.step === 1 ? (
                    <Fragment>
                        <div style={{ paddingTop: "30px", textAlign: "center" }}>

                            <h1 className="title" style={{ color: "white" }}>
                                Let's Get Ready To Duel
                    </h1>
                            <h1 className="subtitle" style={{ color: "white" }}>
                                Please Enter The Duelist Name Below
                    </h1>
                            <div className="field">
                                <div className="control"
                                    style={{ textAlign: "center" }}>
                                    <input
                                        onChange={handleChange1}
                                        className="duelist-input"
                                        type="text"
                                        placeholder="Duelist #1 Name"
                                        value={duelist1.name} />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="field">
                                <div className="control"
                                    style={{ textAlign: "center" }}>
                                    <input
                                        onChange={handleChange2}
                                        className="duelist-input"
                                        type="text"
                                        value={duelist2.name}
                                        placeholder="Duelist #2 Name" />
                                </div>
                            </div>
                        </div>
                        <div className="has-text-centered"
                            style={{ textAlign: "center", margin: "50px" }}>
                            <button onClick={e => setStep({ step: 2 })} class="button is-primary is-large">Let's Duel</button>

                        </div>
                        <div className="has-text-centered"
                            style={{ textAlign: "center", margin: "50px" }}>
                            <h1 className="subtitle" style={{ color: "white" }}>
                                ** We are working on implementing a 2v2 feature**
                    </h1>
                        </div>
                    </Fragment>) : (<div class="columns">
                        <div className="column">
                            {duelist1.name}
                        </div>
                        <div className="column">
                            {duelist2.name}

                        </div>
                    </div>)}


            </div>

        </Fragment >
    );
};
