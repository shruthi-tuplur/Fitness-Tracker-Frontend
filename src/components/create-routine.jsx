import React, {useState} from "react";


const CreateRoutine = () => {
    const [routinePrivacy, setRoutinePrivacy] = useState(false)

    return(
        <div id='create-routine-main-div'>
            <form id='new-routine-form'>
                <h3 id='new-routine-header'>Create a new routine</h3>
                <div id='new-routine-name-div'>
                    <label className="new-routine-label" htmlFor="new-routine-name">Routine name </label>
                    <input type='text' name='new-routine-name' className="new-routine-labels"></input>
                </div>
                <div id='new-routine-goal-div'>
                    <label className="new-routine-label" htmlFor="new-routine-goal">Routine goal </label>
                    <input type='text' name='new-routine-goal'  className="new-routine-labels"></input>
                </div>
                <div id='new-routine-priv-or-pub'>
                    <p id='private-or-public'>Would you like this routine to be public?</p>
                    <div id='pub-or-priv-buttons-div'>
                        <button className="pub-or-priv-button" onClick={(event) => {
                            event.preventDefault()
                            setRoutinePrivacy(false)
                            }}>Yes</button>
                        <button  className="pub-or-priv-button" onClick={(event) =>{ 
                            event.preventDefault()
                            setRoutinePrivacy(true)
                            }}>No</button>
                    </div>
                </div>
                <div id='create-routine-button-div'>
                    <button id='create-routine-button'>Create Routine</button>
                </div>

            </form>


        </div>
    )


}

export default CreateRoutine;