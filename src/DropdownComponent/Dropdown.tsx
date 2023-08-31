import { useState } from "react";

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(null);
    const toggleDropdown = () => {
        setIsActive( isActive => !isActive);
    }
    const selectedOption = (option) => {
        setSelected(option);
        setIsActive(false);
    }
    return (
        <div className="dropdown">
             <div className="dropdown-button" onClick={() => toggleDropdown()}>
                {selected ? selected : 'Choose One' }
                <span>{isActive ? '+' : '-'}</span>
             </div>
             {isActive &&           
             <ul className="dropdown-options">
                {options.map((option, index) => (
                    <li className="dropdown-item" onClick={() => selectedOption(option)}>
                        {option}
                    </li>
                ))}
             </ul>}
        </div>
    )
}

const options = ['apple', 'banana', 'cherry', 'orange', 'pear'];
export default Dropdown;
