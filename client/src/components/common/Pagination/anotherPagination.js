// import React from 'react'
// import styles from './Pagination.module.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import { useState } from 'react';
// import { useEffect } from 'react';

// import * as carService from '../../../services/carService.js';

// function Pagination() {
//     const[valuePage,setValuePage] = useState(0);
//     const[page,setPage] = useState(1);
//     // const [currentPage, setCurrentPage] = useState(1);


//     const [value, setValue] = useState({
//         cars:[],
//         pages:0,
//         currentPage:0,
//       });

//       useEffect(()=>{
//         carService.getAll(page)
//         .then(res=>setValue(res))
//       },[page]);

   
//  //Handle events on click
// const onNext = () => {
//         setPage(page + 1);
//         console.log(page);
// };
      
// const onPrevious = () => {
//         setPage(page - 1);
//         console.log(page);
// };

// const handlePageClick = (e)=>{
//         setPage(e.target.id)
// };

// //Fill the array with pages 
// let pageArray = [];

// for (let i = 1; i <= value.pages; i++) {
//   pageArray.push(i);

// } 

// //Preparing the li item page
//     //   const pageNumbers = pageArray.map(page => {
//     //     <li key={page} id={page} onClick={handlePageClick} 
//     //         className={value.currentPage===page ? 'active' : null}>
//     //         {page}
//     //     </li>
//     // }
//  );
// console.log(pageNumbers);
// return (
//     <div className={styles.pageContainer}>
//           {/* <FontAwesomeIcon onClick={()=>onPrevious()} className={styles.arrowLefttIcon} icon={faArrowLeft} /> */}
//               <ul className="pageNumbers"> 
//                <li>
//                    <button onClick={onPrevious} disabled={value.currentPage === pageArray[0]}>Prev</button>
//                </li>
//                <ul>
//                {
//                pageArray.length > 0 && pageArray.map(page => {
//                     <li key={page} id={page} onClick={handlePageClick} 
//                         className={value.currentPage===page ? 'active' : null}>
//                         {page}
//                     </li>
//                }
//                </ul>
//                 <li>
//                    <button onClick={onNext} disabled={value.currentPage === pageArray[pageArray.length-1]}>Next</button>
//                </li>
//             </ul>
//              {/* <FontAwesomeIcon onClick={()=>onNext()} className={styles.arrowRightIcon} icon={faArrowRight} /> */}
//         </div>
//   )
// }

// export default Pagination