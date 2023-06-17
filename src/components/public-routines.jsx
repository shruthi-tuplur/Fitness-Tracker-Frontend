import React, {useEffect, useState} from "react";
import { fetchFromAPI } from "../api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PublicRoutines = () => {
    const [routines, setRoutines] = useState([]);

    const getPublicRoutines = async () => {

        // fetches posts from API
        let data = await fetchFromAPI({path: '/routines'});  
        data.splice(6, 1)
        data.splice(8, 1)
        setRoutines(data)
        console.log(data)
    }

    useEffect(() => {

        // loads posts immediately when the page loads
        getPublicRoutines();
        
    }, [] )

return (
    <div id='public-routines-main-div'>
        <div id='public-routines-left'>
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
export default PublicRoutines;