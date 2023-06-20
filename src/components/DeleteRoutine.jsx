import React from "react";
import { fetchFromAPI } from "../api";



const DeleteRoutine = ({ 
    routine, 
    token, 
    onDelete 
}) => {
    const deleteRoutine = async () => {
        await fetchFromAPI({
            path: `/routines/${routine.id}`,
            method: 'delete',
            token
        });

        onDelete();
    }

    return (
            <button className="delete-button-routine-title" onClick={(event) => {
               event.preventDefault();
               deleteRoutine();
            }}>Delete routine </button>
    )

}

export default DeleteRoutine;
