import React, {useState, useEffect} from "react";
import { fetchFromAPI } from "../api";

const SingleUserView = (props) => {
    const {singleUser, token} = props;
    
    const [routines, setRoutines] = useState([])

    const getRoutines = async () => {
        const data = await fetchFromAPI({
            path: `/users/${singleUser}/routines`,
            token
        })

        console.log(data);
        setRoutines(data)
    }

    useEffect(() => {

        // loads posts immediately when the page loads
        getRoutines();
        
    }, [] )

return(
    <div id='single-user-view-main-div'>
        <div>
        <h1 id='single-user-header'>{`${singleUser}'s public routines`}</h1>
        <div>
        {
            routines.map((routine) =>{
                return(
                    <div key={routine.id} className = 'user-routine'>
                    <p id='routine-title'>{routine.name}</p>
                    <div id='creator-name-div'>
                        <p id='creator-name-not-button'>{routine.creatorName}</p>
                        <p id='routine-creator-label'>Routine creator</p>
                        </div>

                    <div id='routine-goal-div-public'>
                        <p id='routine-goal-label'>Goal: </p>
                        <p id='routine-goal'>{routine.goal}</p>
                    </div>
                    <div id='routine-activities-div'>
                        
                        <p id='activities-sec-header'>Activities</p>
                        {(routine.activities.length)
                        ? routine.activities.map(activity => {
                                return(
                                    <div key={activity.id} className = 'activity-card'>
                                        <div className = 'activity-first-row'>
                                            <p id='activity-name'>{activity.name}</p>
                                                <div id='duration-div-public'>
                                                    <p id='duration-label'>Duration (minutes): </p>
                                                    <p id='duration'>{activity.duration}</p>
                                                </div>
                                            <div id='count-div-public'>
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
                    


            </div>
                )
            } )
        }
        </div>
        </div>
    </div>
)
}

export default SingleUserView;