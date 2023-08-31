import { useState } from "react";


// const CheckBox = ({label} : {label: string}) => {
//     const [permissions, setPermissions] = useState({
//         read: false,
//         write: false,
//         delete: false
//     });

//     const handleDeleteChanged = (isChecked: boolean) => {
//         setPermissions({
//             read: isChecked,
//             write: isChecked,
//             delete: isChecked
//         })
//     }

//     const handleNonDeleteChanged = (isChecked: boolean, key: string) => {
//         if(!isChecked) {
//             setPermissions({...permissions, [key]: isChecked, delete: false});
//         } else {
//             setPermissions(permissions => ({...permissions, [key]: isChecked}));
//         } 
//     }

//     return (
//         <>
//         <div>
//         {label}
//             <div>
//                 <input type="checkbox" 
//                     onChange={(e) => handleNonDeleteChanged(e.target.checked, "read")}
//                     checked={permissions.read}>
//                 </input>
//                 <input type="checkbox" 
//                     onChange={(e) => handleNonDeleteChanged(e.target.checked, "write")}
//                     checked={permissions.write}>
//                 </input>
//                 <input type="checkbox" 
//                     onChange={(e) => handleDeleteChanged(e.target.checked)}
//                     checked={permissions.delete}>
//                 </input>
//             </div>
//         </div>
     
//         </>

//     )
// }
const Checkbox = ({label}:{label: string}) => {
  const [checkStatus, setCheckStatus] =useState ({
      read: false,
      write: false,
      delete: false
  })


  const handleCheckStaus = (key: string, status: boolean) => {
    if(!status) {
      setCheckStatus( checkStatus => ({...checkStatus, [key]: status, delete: false}));
    } else {
      setCheckStatus( checkStatus => ({...checkStatus, [key]: status}));
    }
    
  }

  const handleDeleteCheck = (key: string, status: boolean) => {
      setCheckStatus( {
        read: status,
        write: status,
        delete: status
      });
  }

  return (
    <div>
      <input type="checkbox" checked={checkStatus.read} onChange={(e) => handleCheckStaus('read', e.target.checked)}/>
      <input type="checkbox" checked={checkStatus.write} onChange={(e) => handleCheckStaus('write', e.target.checked)}/>
      <input type="checkbox" checked={checkStatus.delete} onChange={(e) => handleDeleteCheck('delete', e.target.checked)}/>
    </div>
  )
}

const CheckBoxes = () => 
    (
        <div className="wrapper">
            <Checkbox label={"t1"} />
        </div>
    )



// const SelectComponent = ({ options }) => {
//   const [keyword, setKeyword] = useState('');
//   const [filteredOptions, setFilteredOptions] = useState([]);

//   const handleInput = (event) => {
//     const inputKeyword = event.target.value.toLowerCase();
//     setKeyword(inputKeyword);

//     const filteredOptions = options.filter(option => option.toLowerCase().includes(inputKeyword));
//     setFilteredOptions(inputKeyword ? filteredOptions : []);
//   };

//   const handleOptionClick = (selectedOption) => {
//     setKeyword(selectedOption);
//     setFilteredOptions([]);
//   };

//   return (
//     <div className="select-container">
//       <input
//         type="text"
//         value={keyword}
//         onChange={handleInput}
//         placeholder="请输入关键字"
//         className="select-input"
//       />
//       {filteredOptions.length > 0 && (
//         <ul className="select-dropdown">
//           {filteredOptions.map(option => (
//             <li key={option} onClick={() => handleOptionClick(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // 使用示例
// const options = ['apple', 'banana', 'cherry', 'orange', 'pear'];

// function CheckBoxes() {
//   return (
//     <div>
//       <h1>请选择水果:</h1>
//       <SelectComponent options={options} />
//     </div>
//   );
// }


export default CheckBoxes;
