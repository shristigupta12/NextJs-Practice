
export default function Cities({location, temp, icon}:any){
    return(
        <div className="flex p-2 gap-3 justify-between w-fit items-center border-2 ">
            <div>{location}</div>
            <div className="flex gap-1 items-center">
                <div>{temp}</div>
                <img src={icon} alt="" height='30px' width='30px' />
            </div>
        </div>
    )
} 