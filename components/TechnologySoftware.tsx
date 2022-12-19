import React, {MouseEvent} from "react";

const handleClick = ( website: string): void => {
    window.open(website, "_blank")
}

const TechnologySoftware = (props: any ) => {
    const {technologyName, component, website} = props
    console.log(component)
    return (
        <div className="flex p-1 flex-row cursor-pointer justify-start gap-5 max-sm:w-full " onClick={() => handleClick(website)}>
        <h2 className='text-2xl mb-5 max-sm:text-1xl hover:text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-amber-400'>{technologyName}</h2>
            <div className='text-3xl' >
            {component}
            </div>
        </div>
    )
}

export default TechnologySoftware;