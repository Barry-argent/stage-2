"use client"
import React, { Suspense } from "react";
import Header from "../Header";
import Form from "../form";
import Loading from "../Loading";
export default function Page() {
  return (
    <div className="bg-background min-h-screen w-full px-5 py-5 md:px-[10rem]">
      <Header/>

      <Suspense fallback={<div><Loading/></div>}>
      
     <Form/>
    </Suspense>
     
     
    </div>
  );
}
