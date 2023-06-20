import React, {useState} from "react";
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
        <div>
            <button className="delete-button-routine-title" onClick={(event) => {
               event.preventDefault();
               deleteRoutine();
            }}>Delete routine </button>
        </div>
    )

}

export default DeleteRoutine;
