"use client"
import React from "react";

const Todo: React.FunctionComponent = () => {
    return(
        <div className="w-full border rounded shadow-md shadow-neutral-200 px-2 py-7 flex flex-col gap-4">
            <div className=" text-center text-3xl text-neutral-500">To-Do</div>
            <input className="w-full border-none border rounded shadow-sm shadow-neutral-200" placeholder="Add a todo here"></input>
            <div></div>
        </div>
    )
}

export default Todo;