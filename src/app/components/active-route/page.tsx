"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export const metaData:Metadata = {
    title : "Phinehas tutorial",
    authors: [{name:"Phinehas Company LTD",url:"/"}]
}

const navLinks = [
    {key:"home",href:"/", name:"home"},
    {key:"about",href:"/about",name:"about"},
    {key:"profile",href:"/profile",name:"profile"}
]

const ActiveRoute = (
) => {
    const pathname = usePathname();
   
    
    return (
        <div className='p-4 m-4'>
           {navLinks.map(link =>{ 
            
            const  isActive = pathname === link.href ||( pathname.startsWith(link.href) && link.href !=="/");
            return (
            <Link key={link.key} href={link.href} className={isActive ? "font-bold bg-blue-400": "font-semibold bg-red-400"}>
                {link.name}
            </Link>)}
            )
}
        </div>
    );
}

export default ActiveRoute;
