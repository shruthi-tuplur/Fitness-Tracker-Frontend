import React, {useState, useEffect} from "react";
import { fetchFromAPI } from "../api";

const SingleRoutine = (props) => {

const {currentSingleRoutine, user, token} = props;
const [routines, setRoutines] = useState([])

const getMyRoutines = async () => {
    
    // fetches posts from API
    let data = await fetchFromAPI({path: `/users/${user.username}/routines`, token});  
    
    setRoutines(data)
    
    return(
        {routines.map(routine => {

            return(
                <div key={routine.id} className = 'my-routine'>
                        <p id='routine-title'>{routine.name}</p>
                        <div id='creator-name-div'>
                            <p id='creator-name'>{routine.creatorName}</p>
                            <p id='routine-creator-label'>Routine creator</p>
                            </div>
    
                        <div id='routine-goal-div'>
                            <p id='routine-goal-label'>Goal: </p>
                            <p id='routine-goal'>{routine.goal}</p>
                        </div>
                        <Link to={`/routines/${routine.id}/activities`} ><button id="add-activity-button" onClick={(event) => {
                            event.preventDefault();
                            setCurrentSingleRoutine(routine.id)
                        }}>View or add activities</button></Link>
                        <div id='routine-activities-div'>
                            
                            <p id='activities-sec-header'>Activities</p>
                            {(routine.activities.length)
                            ? routine.activities.map(activity => {
                                    return(
                                        <div key={activity.id} className = 'activity-card'>
                                            <div className = 'activity-first-row'>
                                                <p id='activity-name'>{activity.name}</p>
                                                    <div id='duration-div'>
                                                        <p id='duration-label'>Duration (minutes): </p>
                                                        <p id='duration'>{activity.duration}</p>
                                                    </div>
                                                <div id='count-div'>
                                                    <p  id='count-label'>Count: </p>
                                                    <p id='count'>{activity.count}</p>
                                                </div>
                                                
                                            </div>
                                            <p id='activity-description'>{activity.description}</p>
                                        </div>
                                    )
                              
                                })
                            : <div><p id='no-activities-to-show'>No activities to show at this time</p></div>      
                            }
                        </div>
                        <AddActivity token={token}/>
                </div>
    
            )
    
        })
        }
    



    )
}

}

export default SingleRoutine;