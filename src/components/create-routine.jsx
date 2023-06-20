import React, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchFromAPI } from "../api";

const CreateRoutine = ({ token, getPublicRoutines }) => {
    const [routinePrivacy, setRoutinePrivacy] = useState(true);
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [newRoutineActivityName, setNewRoutineActivityName] = useState('');
    const [newRoutineActivityDuration, setNewRoutineActivityDuration] = useState('');
    const [newRoutineActivityCount, setNewRoutineActivityCount] = useState('');
    const [newRoutineActivityDesc, setNewRoutineActivityDesc] = useState('');

    const history = useHistory()

    let activities = []

    const createActivity = () => {
        let newActivity = {
            name: newRoutineActivityName,
            description: newRoutineActivityDesc,
            count: newRoutineActivityCount,
            duration: newRoutineActivityDuration


        }

        setNewRoutineActivityName('');
        setNewRoutineActivityCount('');
        setNewRoutineActivityDesc('');
        setNewRoutineActivityDesc('');

        activities.push(newActivity)



    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(token)

        const requestBody = { 
            name: routineName,
            goal: routineGoal,
            isPublic: routinePrivacy
            
    }

        const postData = await fetchFromAPI({
            path: "/routines",
            method: "POST",
            body: requestBody,
            token
        });


        if(activities){
            activities.map(async(activity) => {
                const myRequestBody = {
                    name: activity.name,
                    description: activity.description
                }
                const data = await fetchFromAPI({
                    path: "/activities",
                    method: "POST",
                    body: myRequestBody,
                    token
                }) 

                console.log(data)

            })

            activities = [];
        }

    

        if(postData){
        setRoutineName('');
        setRoutineGoal('');
        await getPublicRoutines();
        history.push('/routines/publicroutines');
        
    }
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
                <div id='new-routine-activity-div'>
                    <label className="new-activity-label" htmlFor="new-routine-activity">Add an activity </label>
                    <p id='activity-desc-label'>Activity name</p>
                    <input type='text' name='new-routine-activity'  value = {newRoutineActivityName} onChange = {(event) => {setNewRoutineActivityName(event.target.value)}} className="new-routine-labels" id='activity-input-box'></input>
                    <p id='activity-desc-label'>Activity duration (minutes)</p>
                    <input type='text' name='new-routine-activity'  value = {newRoutineActivityDuration} onChange = {(event) => {setNewRoutineActivityDuration(event.target.value)}} className="new-routine-labels" id='activity-input-box'></input>
                    <p id='activity-desc-label'>Activity count</p>
                    <input type='text' name='new-routine-activity'  value = {newRoutineActivityCount} onChange = {(event) => {setNewRoutineActivityCount(event.target.value)}} className="new-routine-labels" id='activity-input-box'></input>
                    <p id='activity-desc-label'>Activity description</p>
                    <input type='text' name='new-routine-activity'  value = {newRoutineActivityDesc} onChange = {(event) => {setNewRoutineActivityDesc(event.target.value)}} className="new-routine-labels" id='activity-input-box'></input>
                    <div id='create-new-activity-button'>
                        <button id='add-activity-button'  onClick={(event) => {createActivity()}}>Add activity</button>
                    </div>
                    <div id='add-new-activity-div'> 

                    </div>
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
                    <button id='create-routine-button' type='submit'>Create Routine</button>
                </div>

            </form>


        </div>
    )


}

export default CreateRoutine;