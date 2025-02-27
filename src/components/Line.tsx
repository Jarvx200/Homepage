import React from 'react';

interface LineProps{
    width: Number,   
    rounded: boolean, 
    animated: boolean,
}

const Line: React.FC<LineProps> = ({width, rounded, animated}) => {
    return(<>
        <div className={`w-[${width}%] h-1 ${animated ? `animate-fade-down animate-once  animate-duration-300` : ``}  dark:bg-dark-fg bg-light-fg ${rounded ? `rounded-full` : `` }`}/>
    </>);
};

export default Line