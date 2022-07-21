import { React, useState } from "react";
import { AiOutlineDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from "./BackButton";





function Home({ addDetails,details,username}) {

    //state for store place
    const [place, setPlace] = useState('');
    //state for store agegruop
    const [ageGruop, setAgeGroup] = useState('');
    //state for gender
    const [gender, setGender] = useState('');


    //this is useNavigate() hooks for navigate while submit the form
    const navigate = useNavigate();


    //form submission control
    const onSubmit = (e) => {

        e.preventDefault();

        if (!place) {
            alert("please add your place");
            return;
        }

        //add  user details to details state in app.js
        addDetails({ place, ageGruop, gender });
        
        //after adding the state will empty
        setPlace('');
        setAgeGroup('');
        setGender('');

        //nvigate hooks to  navigate details
        navigate('/Details');

    }


    return (
        <div className="home">
            <Link to='/'>
                <BackButton  username={username} />
            </Link>
            <form className="submit-form flex-column" onSubmit={onSubmit}>
                <div className="submit-form-top flex-column">
                    {/* place text field */}
                    <div className="submit-form-control">
                        <label className="label-green">Place:</label>
                        <input
                            type='text'
                            vlalue={place}
                            onChange={(e) => setPlace(e.target.value)}
                            className="submit-form-inputbox input-box" />
                    </div>
                    {/* drop doem selector */}
                    <div className="select-box-container" >

                        <div  className="input-box select-box-sub-container"></div>
                        
                        <select className="selectores  input-box" value={ageGruop} onChange={(e) => setAgeGroup(e.target.value)}>
                            <option vlalue="" default selected  disabled >Age Group</option>
                            <option value="0-18">0-18</option>
                            <option value="18-25">18-25</option>
                            <option value="25-45">25-45</option>
                            <option value="55+">55+</option>

                        </select>
                       
                        <div className="drop-Icon-container">
                            <AiOutlineDown className="drop-Icon" />
                        </div>
                    </div>
                    {/* gender selector */}
                    <div>
                        <label className="label-green">Gender:</label>
                        <ul className="flex radio-btn-container">
                            <li>

                                <input
                                    className="radio-btn"
                                    type='radio'
                                    value='male'
                                    checked={gender === 'male'}
                                    name="Gender"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label>Male</label>
                            </li>
                            <li>

                                <input
                                    className="radio-btn"
                                    type='radio'
                                    value='female'
                                    checked={gender === 'female'}
                                    name="Gender"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label>Female</label>
                            </li>
                            <li>
                                <input
                                    className="radio-btn"
                                    type='radio'
                                    value='other'
                                    checked={gender === 'other'}
                                    name="Gender"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label>Other</label>
                            </li>
                            <li>
                                <input
                                    className="radio-btn"
                                    type='radio'
                                    value='undisclosed'
                                    checked={gender === 'undisclosed'}
                                    name="Gender"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label>Undisclosed</label>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* submit button */}
                <div className="submit-button-container">

                    <button type="submit"
                        className="button"
                    >Submit</button>

                </div>

            </form>
        </div>
    );
}

export default Home;