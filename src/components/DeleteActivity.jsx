import React from "react";
import { fetchFromAPI } from "../api";

const DeleteActivity = ({ 
    activity: {
        routineActivityId
    }, 
    token, 
    onDelete 
}) => {
    const deleteActivity = async () => {
        await fetchFromAPI({
            path: `/routine_activities/${routineActivityId}`,
            method: 'delete',
            token
        });

        onDelete();
    }

    return (
            <button className="delete-activity-button" onClick={(event) => {
               event.preventDefault();
               deleteActivity();
            }}>Delete activity </button>
    )

}

export default DeleteActivity;