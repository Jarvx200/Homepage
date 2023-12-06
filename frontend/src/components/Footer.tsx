const Footer = () => {
    return(
        <>
            <div className="absolute bottom-3 left-0 w-[100vw] h-auto flex flex-row items-center justify-center">
                <a href="https://www.github.com" className="text-md font-bold dark:text-dark-fg text-light-fg" >source</a>
                <h1 className="ml-2 mr-2 dark:text-dark-fg text-light-fg">•</h1>
                <a className="text-md font-bold dark:text-dark-purple text-light-purple">buy me a coffee</a>
            </div>
        </>
    );
}

export default Footer