import '../styles/ButtonTwo.css';
export default function ButtonTwo({title}) {
    return (
        <div>
            {title == null || title === '' ? (
                <div></div>
            ): (
            <button className={"styled-button-two"} style={{}}>{title}</button>
        )}
        </div>
    
    );
}