import React, {useState, useEffect} from "react";


const Activities = ({token, fetchActivities, activities, setActivities}) => {
    

    console.log(activities);
return(
    <div id='main-activities-div'>
        
        <div id='all-activities'>
        <h1 id='activities-header'>Activities</h1>   
        {
            activities.map(activity => {
                
                return (<div id='activity-div-activities' key={activity.id}>
                        <div id='activity-title-div-activities'>
                        <p className="activity-label-activities">Activity name: </p>
                        <p className="activity-title-activities">{activity.name}</p>
                        </div>
                        <div id='activity-desc-div-activities'>
                        <p className="activity-label-activities">Description: </p>
                        <p className="activity-desc-activities">{activity.description}</p>
                        </div>

                </div>)
            })
        }
    </div>
    </div>

)
}

export default Activities;