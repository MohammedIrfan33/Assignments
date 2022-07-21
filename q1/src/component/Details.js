import BackButton from "./BackButton";
import { Link } from 'react-router-dom';


const Details = ({details,username}) =>{
    return (<div className="results">
        {/* navigation link */}
        <Link to='/'>
            <BackButton  username={username} />
        </Link>
        {/* map ithe details state for get data */}
        {details.map((item)=>{
            return (
            <ul className="results-container">
            <li>
                <span className="results-label label-green" >Gender:</span>
                <span className="results-text">{item.gender}</span>
            </li>
            <li>
            <span className="results-label label-green" >AgeGroup:</span>
                <span className="results-text">{item.ageGruop}</span>
            </li>
            <li>
            <span className="results-label label-green" >Place:</span>
                <span className="results-text">{item.place}</span>
            </li>
        </ul>
        )
        })} 
        
    </div>
)}
export default Details
