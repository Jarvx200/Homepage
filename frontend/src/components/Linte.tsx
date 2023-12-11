import React from 'react';

interface LineProps{
    width: Number,   
    rounded: boolean, 
}

const Line: React.FC<LineProps> = ({width, rounded}) => {
    return(<>
        <div className={`w-[${width}%] h-1 dark:bg-dark-fg bg-light-fg ${rounded ? `rounded-full` : `` }`}/>
    </>);
};

export default Line