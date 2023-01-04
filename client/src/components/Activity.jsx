import React from "react";

export default function ActivityOptions({allActivity})

{return(
    <>{
        allActivity.map(e => {
            return(
                <option key={e.id} value={e.name}>
            {
                e.name
            }
            </option>
            )
        })
    }</>
)}