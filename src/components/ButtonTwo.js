// src/components/ButtonTwo.js
import '../styles/ButtonTwo.css';

export default function ButtonTwo({ children, onClick, disabled }) {
    return (
        <button 
            className={"styled-button-two"} 
            onClick={onClick} 
            disabled={disabled}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }} // Optional: Change cursor style when disabled
        >
            {children}
        </button>
    );
}