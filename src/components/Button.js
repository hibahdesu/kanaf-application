import { Link } from 'react-router-dom';
import '../styles/ButtonStyle.css';

export default function Button({ title, link }) {
    return (
        <div>
            {title == null || title === '' ? (
                <div></div>
            ) : (
                <Link to={link} className="styled-button">
                    {title}
                </Link>
            )}
        </div>
    );
}