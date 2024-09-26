import '../styles/ButtonStyle.css';
export default function Button({title}) {
    // if (title==null || title=='') {
    //     return null
    // }
    return (
        <div>
            {title == null || title === '' ? (
                <div></div>
            ): (
            <button className={"styled-button"} style={{}}>{title}</button>
        )}
        </div>
    
    );
}