import { useEffect, useState } from "react";

export const [scroll, setScroll] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            setScroll(window.scrollY > 30)
        })
        scroll? console.log("yes"):console.log("no");
    },[]);