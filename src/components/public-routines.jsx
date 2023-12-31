import React, {useEffect, useState} from "react";
import { fetchFromAPI } from "../api";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CreateRoutine } from './index';

const PublicRoutines = (props) => {
    const {token, setSingleUser} = props;
    const [routines, setRoutines] = useState([]);
    const [newPost, setNewPost] = useState({});
    
    const history = useHistory()

    const getPublicRoutines = async () => {

        // fetches posts from API
        let data = await fetchFromAPI({path: '/routines'});  
        
        setRoutines(data)
        console.log(data)
    }

    useEffect(() => {

        // loads posts immediately when the page loads
        getPublicRoutines();
        
    }, [] )

if(token){
    return(
    <div id='public-routines-main-div'>
    <div id='public-routines-left'>
     <h1 id='public-routines-header'>Public Routines</h1>   
    {routines.map(routine => {
        setSingleUser('cheese');
        return(
            <div key={routine.id} className = 'routine'>
                    <p id='routine-title'>{routine.name}</p>
                    <div id='creator-name-div'>
                        <Link to={`/routines/publicroutines/singleuserview`}>
                        <button id='creator-name' onClick={(event) => {
                            event.preventDefault();
                            setSingleUser(routine.creatorName);
                            history.push('/routines/publicroutines/singleuserview')
                        }}>{routine.creatorName}</button>
                        </Link>
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

    })
    }
    </div>
    <div id='create-routine-div'>
        <CreateRoutine setNewPost = {setNewPost} token={token} getPublicRoutines={getPublicRoutines}/>
    </div>
</div>
)
} else {

return (
    <div id='public-routines-main-div'>
        <div id='public-routines-left'>
         <h1 id='public-routines-header'>Public Routines</h1>   
        {routines.map(routine => {
            return(
                <div key={routine.id} className = 'routine'>
                        <p id='routine-title'>{routine.name}</p>
                        <div id='creator-name-div'>
                            <p id='creator-name'>{routine.creatorName}</p>
                            <p id='routine-creator-label'>Routine creator</p>
                            </div>

                        <div id='routine-goal-div'>
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
                        


                </div>

            )

        })
        }
        </div>
        <div id='login-or-reg-to-post'>
            <p id='want-to-start-sharing'>Want to start sharing your routines?</p>
            <Link to='/users/login'><button className="button" id='want-to-start-sharing-button'>login or register to post</button></Link>
        </div>
    </div>
)


}

}
export default PublicRoutines;