import React from 'react'
import styles from './Pagination.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";


function Pagination({paginate,carsPerPage,totalCars,totalPages}) {
   
let pageNumbers = [];

for (let i = 1; i <=totalPages; i++) {
  pageNumbers.push(i);

} 


return (
    <div className={styles.pageContainer}>
          {/* <FontAwesomeIcon onClick={()=>onPrevious()} className={styles.arrowLefttIcon} icon={faArrowLeft} /> */}
             <ul className={styles.pageList}>
              {pageNumbers.map(number=>(
                <li key={number} >
                    <a onClick={()=>paginate(number)} href='#' className={styles.pageNumbers}>
                      {number}
                    </a>
                </li>
              ))}
             </ul>
             {/* <FontAwesomeIcon onClick={()=>onNext()} className={styles.arrowRightIcon} icon={faArrowRight} /> */}
   </div>
  )
}

export default Pagination