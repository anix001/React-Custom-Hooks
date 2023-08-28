import { useState } from "react"

export const useArray = (defaultvalue:any) => {
  const [array, setArray] = useState(defaultvalue);
  
//   push(element): Adds the specified element to the array.
  const push = (element:any) => {
    setArray([
        ...array, element
    ]);
  };
  
//   filter(callback): Filters the array based on the provided callback function, removing elements that don't satisfy the condition.
  const filter = (callback:any) => {
    setArray((a:any)=> a?.filter(callback));
  };
  
//   update(index, newElement): Replaces the element at the specified index with the newElement.
  const update = (index:number, newElement:any) => {
    let arr = [...array];
    arr.splice(index, 1 , newElement);
    setArray([
        ...arr
    ]);
  };
  
//   remove(index): Removes the element at the specified index from the array.
  const remove = (index:number) => {
    let arr = [...array];;
    arr.splice(index, 1)
    setArray([
        ...arr
    ]);
  };
  
//   clear(): Clears the array, setting it to an empty array.
  const clear =()=>{
    setArray([]);
  }


  return {array, set: setArray, push, filter, update, remove, clear};
}
