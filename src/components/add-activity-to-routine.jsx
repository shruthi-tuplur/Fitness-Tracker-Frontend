import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchFromAPI } from "../api";

const AddActivity = ({token}) => {
    const [newRoutineActivityName, setNewRoutineActivityName] = useState('');
    const [newRoutineActivityDuration, setNewRoutineActivityDuration] = useState('');
    const [newRoutineActivityCount, setNewRoutineActivityCount] = useState('');
    const [newRoutineActivityDesc, setNewRoutineActivityDesc] = useState('');

    const params = useParams();

    const {routineId} = params;

    const handleSubmit= async() => {
        let newActivity = {
            name: newRoutineActivityName,
            description: newRoutineActivityDesc,
            count: newRoutineActivityCount,
            duration: newRoutineActivityDuration


        }


        const requestBody = { 
            name: newRoutineActivityName,
            description: newRoutineActivityDesc
            
    }
        // create activity 
        const activityData = await fetchFromAPI({
            path: "/activities",
            method: "POST",
            body: requestBody,
            token
        });

        // attach it to the routine

        setNewRoutineActivityName('');
        setNewRoutineActivityCount('');
        setNewRoutineActivityDesc('');
        setNewRoutineActivityDesc('')

        



    }
    return(
        <div id='add-activity-main'>
            <form>
           <label className="new-activity-label" htmlFor="new-routine-activity">Add an activity </label>
           <div id='add-activity-top-row'>
            <div className="activity-pair">
                    <p id='activity-desc-label'>Activity name</p>
                    <input type='text' name='new-routine-activity'  value = {newRoutineActivityName} onChange = {(event) => {setNewRoutineActivityName(event.target.value)}} className="new-routine-labels" id='activity-input-box'></input>
            </div>
            <div className="activity-pair">
                    <p id='activity-desc-label'>Activity duration (minutes)</p>
                    <input type='text' name='new-routine-activity'  value = {newRoutineActivityDuration} onChange = {(event) => {setNewRoutineActivityDuration(event.target.value)}} className="new-routine-labels" id='activity-input-box'></input>
            </div>       
            <div className="activity-pair">
                    <p id='activity-desc-label'>Activity count</p>
                    <input type='text' name='new-routine-activity'  value = {newRoutineActivityCount} onChange = {(event) => {setNewRoutineActivityCount(event.target.value)}} className="new-routine-labels" id='activity-input-box'></input>
            </div> 
            </div>   
            <div id='activity-desc-div'>
                    <p id='activity-desc-label'>Activity description</p>
                    <textarea cols="50" rows="10" name='new-routine-activity'  value = {newRoutineActivityDesc} onChange = {(event) => {setNewRoutineActivityDesc(event.target.value)}} className="new-routine-labels" id='activity-description-box'></textarea>
                    <div id='create-new-activity-button'>
                        <button id='add-activity-button'  type='submit' >Add activity</button>
                    </div>
            </div> 
            </form>       
        </div>
    )
}

export default AddActivity;