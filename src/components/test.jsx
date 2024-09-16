import { useState , useEffect } from "react";

export default function Test(){
    const [os, setOS] = useState('');

    useEffect(() => {
      const userAgent = window.navigator.userAgent;
  
      if (userAgent.indexOf('Win') !== -1) {
        setOS('Windows');
      } else if (userAgent.indexOf('Mac') !== -1) {
        setOS('MacOS');
      } else if (userAgent.indexOf('Linux') !== -1) {
        setOS('Linux');
      } else if (userAgent.indexOf('Android') !== -1) {
        setOS('Android');
      } else if (userAgent.indexOf('like Mac') !== -1) {
        setOS('iOS');
      } else {
        setOS('Unknown OS');
      }
    }, []);
  
    return (
      <div>
        <h1>Your Operating System is: {os}</h1>
      </div>
    );
  };





