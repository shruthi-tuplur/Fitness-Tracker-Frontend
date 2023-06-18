import React, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchFromAPI } from "../api";

const CreateRoutine = (props) => {
    const {token} = props;
    const [routinePrivacy, setRoutinePrivacy] = useState(true);
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');

    const history = useHistory()

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(token)

        const requestBody = { 
            name: routineName,
            goal: routineGoal,
            isPublic: true
            
    }

        const data = await fetchFromAPI({
            path: "/routines",
            method: "POST",
            body: requestBody,
            token: token,
        });

        console.log(data);
        setRoutineName('');
        setRoutineGoal('');
        history.push('/routines/publicroutines');

    }

    return(
        <div id='create-routine-main-div'>
            <form id='new-routine-form' onSubmit={handleSubmit}>
                <h3 id='new-routine-header'>Create a new routine</h3>
                <div id='new-routine-name-div'>
                    <label className="new-routine-label" htmlFor="new-routine-name">Routine name </label>
                    <input type='text' name='new-routine-name' value = {routineName} onChange = {(event) => {setRoutineName(event.target.value)}} className="new-routine-labels"></input>
                </div>
                <div id='new-routine-goal-div'>
                    <label className="new-routine-label" htmlFor="new-routine-goal">Routine goal </label>
                    <input type='text' name='new-routine-goal'  value = {routineGoal} onChange = {(event) => {setRoutineGoal(event.target.value)}} className="new-routine-labels"></input>
                </div>
                <div id='new-routine-priv-or-pub'>
                    <p id='private-or-public'>Would you like this routine to be public?</p>
                    <div id='pub-or-priv-buttons-div'>
                        <button className="pub-or-priv-button" onClick={(event) => {
                            event.preventDefault()
                            setRoutinePrivacy(true)
                            }}>Yes</button>
                        <button  className="pub-or-priv-button" onClick={(event) =>{ 
                            event.preventDefault()
                            setRoutinePrivacy(false)
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