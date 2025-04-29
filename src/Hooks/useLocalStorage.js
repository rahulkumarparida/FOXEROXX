import { useState } from "react";

function useLocalStorage(key) {

  // let [value , setValue] = useState()
    
  function setData(value) {
      try {
        localStorage.setItem(key , JSON.stringify(value))
      } catch (error) {
        console.log("ERROR : " , error);
        
      }
  }
  function getData() {
    try { 
      let item = localStorage.getItem(key)
     if (item) {
      return JSON.parse(item)
     }
      
    } catch (error) {
      console.log("ERROR : ", error)
    }
  }
  function removeData() {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.log("ERROR : " , error);
      
    }
  }


  return { setData , getData , removeData}
}

export { useLocalStorage };
