export const BookSection = (props) => {

    const btnClick = () => {
        props.onPrintInfoClick(props.bookName, props.bookCharacters);
    }
    return (
        <div className="bookSectionContainer">
            <img className="bookImage" src={props.imgLink} alt=""/>
            <div>
                <h1 className="header">{props.bookName}</h1>
                <p className="description">{props.bookDescription}</p>
                <h3>Characters: </h3>
                {props.bookCharacters.map((character, index) => {
                    return (
                        <div key={index}>
                            <p className="character">{character}</p>
                        </div>
                    )
                })}
                <button onClick={btnClick}>Book info log</button>
            </div>
        </div>
    )
        
}