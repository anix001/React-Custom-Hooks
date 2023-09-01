import { useCallback, useState } from 'react'

export const useCookie = (name:string, defaultValue:any) => {
  const [cookieValue, setCookieValue] = useState(()=>{
    const cookie = getCookie(name);
    if(cookie) return cookie;
    document.cookie =`${name}=${defaultValue}`;
    return defaultValue; 
  });

  const updateCookie =(newValue:string, options?:any)=>{
      console.log("new", newValue)
        document.cookie =`${name}=${newValue};${options}`;
        setCookieValue(newValue);
    }


  const deleteCookie = useCallback(()=>{
    document.cookie =  name+'=; Max-Age=-99999999;';
    setCookieValue(null);
  },[name])

  function getCookie(name:string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts?.pop()?.split(';').shift();
  }

  return [cookieValue, updateCookie, deleteCookie];
}
