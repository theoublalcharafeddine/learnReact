function Button(){
    return(
        <>
{/* 
            <input type="button" value="click me" className="custom-button" href='https://github.com/theoublalcharafeddine'  /> */}

            <button 
                type="button" 
                className="custom-button" >
                    <a 
                        class="custom-link"
                        href="https://github.com/theoublalcharafeddine" 
                        target="_blank" >
                            Github 
                    </a>
            </button>
        </>
    );
}
export default Button;