import React, {useState, useEffect} from "react";
import { fetchFromAPI } from "../api";
import AddActivity from "./add-activity-to-routine";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MyRoutines = (props) => {
const {token, user} = props;
const [routines, setRoutines] = useState([])
const [isEditingRoutineName, setIsEditingRoutineName] = useState(false)
const [newRoutineName, setNewRoutineName] = useState('')
const [isEditingRoutineGoal, isEditingRoutineGoal] = useState(false);

const getMyRoutines = async () => {
    
    // fetches posts from API
    let data = await fetchFromAPI({path: `/users/${user.username}/routines`, token});  
    
    setRoutines(data)
    console.log(data)
}

const updateName = async(routineId) => {
    const requestBody = {
        name: newRoutineName,
    }
    const patchRequest = await fetchFromAPI({
        path:`/routines/${routineId}`,
        method: "PATCH",
        body: requestBody,
        token
    });

    console.log(patchRequest);
    await getMyRoutines();
    setNewRoutineName('')
    history.push('/routines/myroutines');
    
}



useEffect(() => {

    // loads posts immediately when the page loads
    getMyRoutines();
    
}, [] )

const history = useHistory();

return(
    <div id='my-routines-main-div'>
 <div id='public-routines-left'>
     <h1 id='my-routines-header'>My Routines</h1>   
    {routines.map(routine => {

        return(
            <div key={routine.id} className = 'my-routine'>
                    <div id='routine-title-div'>
                        
                        {(isEditingRoutineName)
                            ? (<div id='routine-title-plus-editing-div'>
                                    <p id='routine-title'>{routine.name}</p>
                                <div id='edit-routine-name-div'>
                                    <input placeholder='Enter new routine name' type='text' name='new-routine-name'  value={newRoutineName} onChange = {(event) => {setNewRoutineName(event.target.value)}} className="new-routine-labels"></input>
                                    <button id= 'done-editing-routine-name-button' onClick={(event) => {
                                        event.preventDefault();
                                        setIsEditingRoutineName(false);
                                        
                                        updateName(routine.id) 
                                    }}>Done</button>
                                </div>
                                </div>
                            )
                            : <p id='routine-title'>{routine.name}</p> }
                        <div id='edit-and-delete-buttons'>
                            <button className="edit-button-routine-title" onClick={(event) => {
                                event.preventDefault()
                                setIsEditingRoutineName(true);
                            }}>✎ Edit routine name </button>
                            <button className="delete-button-routine-title">Delete routine </button>
                           
                        </div>
                    </div>
                    <div id='creator-name-div'>
                        <p id='creator-name'>{routine.creatorName}</p>
                        <p id='routine-creator-label'>Routine creator</p>
                        </div>

                    <div id='routine-goal-div'>
                        <div id='routine-goal-name-div'>
                        <p id='routine-goal-label'>Goal: </p>
                        <p id='routine-goal'>{routine.goal}</p>
                        </div>
                        <div id='edit-button-goal-div'>
                            <button className="edit-button-routine-goal"> Edit routine goal </button>
                        </div>    
                    </div>
                    <div id='routine-activities-div'>
                        
                        <p id='activities-sec-header'>Activities</p>
                        {(routine.activities.length)
                        ? routine.activities.map(activity => {
                                return(
                                    <div key={activity.id} className = 'activity-card'>
                                        <div className = 'activity-first-row'>
                                            <div id='activity-title-div'>
                                                <p id='duration-label'>Activity name: </p>
                                                <p id='activity-name'>{activity.name}</p>
                                            </div>
                                                <div id='duration-div'>
                                                    <div id='my-activity-duration-content'>
                                                        <p id='duration-label'>Duration (minutes): </p>
                                                        <p id='duration'>{activity.duration}</p>
                                                    </div>
                                                    <div>
                                                     <button className="edit-button-duration"> Edit duration </button>
                                                    </div>    
                                                </div>
                                            <div id='count-div'>
                                            <div id='my-activity-count-content'>
                                                <p  id='count-label'>Count: </p>
                                                <p id='count'>{activity.count}</p>
                                            </div>
                                             <div>
                                                <button className="edit-button-count"> Edit count </button>
                                            </div>    
                                            </div>
                                            
                                        </div>
                                        <p id='my-activity-description'>Description: </p>
                                        <p id='activity-description'>{activity.description}</p>
                                        <div id='delete-activity-button-div'>
                                        <button className="delete-activity-button"> Delete activity </button>
                                        </div>
                                    </div>
                                )
                          
                            })
                        : <div><p id='no-activities-to-show'>No activities to show at this time</p></div>      
                        }
                    </div>
                    <AddActivity token={token} routineId={routine.id} getMyRoutines={getMyRoutines}/>
            </div>

        )

    })
    }
    </div>
    </div>

)


}

export default MyRoutines;