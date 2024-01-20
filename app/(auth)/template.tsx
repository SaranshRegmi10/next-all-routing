"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import "./global.css"

export default function AuthenticationLayout ({
  children,
}:{
  children:React.ReactNode;
})
  {
    const pathname = usePathname();
    const navlinks=[
      {href:"./forgetpassword",name:"ForgetPassword"},
      {href:"./register",name:"Register"},
      {href:"./login",name:"Login"},
    ]
    const [input, setInput] = useState("");
    return(
      <>
      {/* Example of how template works */}
        <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <div className="linker">
          {navlinks.map((link)=>{
            // way of determining the active link
          const isActive = pathname.startsWith(link.href);
            return(
              <Link className={isActive? "font-bold mr-5" : "text-blue-500 mr-5"} href={link.href} key={link.name}>{link.name}</Link>
            )
          })}
        </div>
        {children}
        </>  

    )
  }