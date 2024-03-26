import React from "react"
const ViewContainer : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({children, className, ...props}) => {
    return(
        <div className="mx-auto w-[750px] p-10" {...props}>
            {children}
        </div>
    )
} 

export default ViewContainer;