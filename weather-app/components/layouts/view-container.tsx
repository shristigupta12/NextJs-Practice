
const ViewContainer = ({children, className, ...props}: any) => {
    return (
        <div className=" w-[900px] max-2xl:w-[800px] max-xl:w-[720px] max-lg:w-[640px] max-md:w-[560px] max-sm:w-[340px] box-border mx-auto bg-neutral-400;" {...props}>
            {children}
        </div>
    )
}

export {ViewContainer};