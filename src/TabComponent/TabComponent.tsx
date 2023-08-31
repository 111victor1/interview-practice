import {useState} from 'react'
import './tab.css'

// export default function TabComponent() {
//     const tabsData = [
//         { id: 1, title: 'Tab 1', content: 'Content of Tab 1' },
//         { id: 2, title: 'Tab 2', content: 'Content of Tab 2' },
//         { id: 3, title: 'Tab 3', content: 'Content of Tab 3' },
//       ];
    
//       const [activeTab, setActiveTab] = useState(tabsData[0].id);
    
//       const handleTabClick = (tabId) => {
//         setActiveTab(tabId);
//       };
    
//       return (
//         <div className="tab-container">
//           <div className="tab-buttons">
//             {tabsData.map((tab) => (
//               <button
//                 key={tab.id}
//                 className={tab.id === activeTab ? 'active-tab' : ''}
//                 onClick={() => handleTabClick(tab.id)}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//           <div className="tab-content">
//             {tabsData.map((tab) => (
//               <div
//                 key={tab.id}
//                 className={tab.id === activeTab ? 'active-content' : 'hidden-content'}
//               >
//                 {tab.content}
//               </div>
//             ))}
//           </div>
//         </div>
//       );
// }

// const TabComponent = () => {
//   const [activeTab, setActiveTab] = useState(1);
//   const toggleTab = (id: number) => {
//     setActiveTab(id);
//   }
//  return (
//     <>
//       <div className='wrapper'>
//         <ul className='tabs-buttons'>
//           {
//               tabsData.map((tab, index) => (
//                   <li className={activeTab === tab.id ? 'active tab' : 'tab'}
//                       key={tab.id}
//                       onClick={() => toggleTab(tab.id)}>
//                         {tab.title}
//                   </li>
//               ))
//             }
//         </ul>
//         <div className='contents'>
//           {
//               tabsData.map((tab, index) => (
//                 <div className='tabs-container'>
//                   <div className={activeTab === tab.id ? 'active-content content' : 'content'}>
//                     <p>{tab.content}</p>
//                   </div>
//                 </div>
//               ))
//             }
//         </div>
//       </div>
//     </>
//  )
// }

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (index) => {
    setActiveTab(index);
  }
  return (
    <div className='wrapper'>
      <ul className='tab-buttons'>
        {tabsData.map((tab, index) => (
          <li className= {index === activeTab ? 'tab-button active' : 'tab-button'} key={tab.id} onClick={() => toggleTab(index)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div>
        {tabsData.map((tab, index) => {
          return (
            activeTab === index &&  (
              <p className='tab-content' key={index}>
                {tab.content}
              </p>
            )
          )
        })}
      </div>
    </div>
  )
}

export default TabComponent;


const tabsData = [
    { id: 1, title: 'Tab 1', content: 'Content of Tab 1' },
    { id: 2, title: 'Tab 2', content: 'Content of Tab 2' },
    { id: 3, title: 'Tab 3', content: 'Content of Tab 3' },
  ];