import React, { HTMLAttributes } from "react";

const PageContent : React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({children, className, ...props}) => {
    return(
        <div className=" h-[500px] flex justify-center items-center" {...props}>
            {children}
        </div>
    )
}

export default PageContent;