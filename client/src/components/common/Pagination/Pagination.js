import React from 'react'
import styles from './Pagination.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';
import { useEffect } from 'react';

import * as carService from '../../../services/carService.js';

function Pagination() {
    const[previusPage,setPreviousPage] = useState(0);
    const[nextPage,setNextPage] = useState(0);
    const[valuePage,setValuePage] = useState(0);
    const[page,setPage] = useState(0);

    let startingCurrentPage = 1;

    const [value, setValue] = useState({
        cars:[],
        pages:0,
        currentPage:0,
      });


      

    useEffect(()=>{
    const changePage = (selectedPage) =>{
    
   if(selectedPage === 1){
    startingCurrentPage = 1;
   }
   else if(selectedPage===2){
    startingCurrentPage = 2;
   }
    
   setPage(startingCurrentPage);
  };

  changePage(page)
},[startingCurrentPage])

    const onNext = () => {
        setPage(startingCurrentPage + 1);
      };
    
      const onPrevious = () => {
        setPage(startingCurrentPage - 1);
      };
console.log(page);
    useEffect(()=>{
        carService.getAll(page)
        .then(res=>setValue(res))
      },[page]);

console.log(valuePage);
      //const pageNumbers = [1,2];

    //   for (let i = 1; i <= value.pages.length; i++) {
    //     let element = value.pages[i];
    //     pageNumbers.push(element);

    //   }
    //   console.log(pageNumbers);
  return (
    <div className={styles.pageContainer}>
          <FontAwesomeIcon onClick={()=>onPrevious()} className={styles.arrowLefttIcon} icon={faArrowLeft} />
          {/* onClick={onPrevious} */}
          {/* <p>{value.currentPage}</p> */}
         
         {/* <a  value={} onClick={(e)=>changePage(e.target.value)} className={styles.pageNumbers}>1</a> */}
         
         <a  className={styles.pageNumbers}>{value.currentPage}</a>
         <a  className={styles.pageNumbers} onClick={()=>setPage(startingCurrentPage + 1)}>2</a>
          <FontAwesomeIcon onClick={()=>onNext()} className={styles.arrowRightIcon} icon={faArrowRight} />
        </div>
  )
}

export default Pagination