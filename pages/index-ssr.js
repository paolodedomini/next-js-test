import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import PRODOTTI_DONNA from "../queries/donna";
import Image from 'next/image'

export default function Home() {
  const { data, loading, error } = useQuery(PRODOTTI_DONNA, { ssr: true });

  console.log({ loading, error });

  const [cached, setCached] = useState(true);
  useEffect(() => {
    if (loading) setCached(false);
  }, [loading]);

  if (loading) return "Loading...";
  
  const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#fff" offset="20%" />
        <stop stop-color="#e2e2e2" offset="50%" />
        <stop stop-color="#fff" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#fff" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
  const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
  return (
    <>
      <h1>{data.products.products[0].name}</h1>
      <div>
        <Image
          src={
            "https://unsplash.com/photos/Q9Dw7v6GDwc/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NTAzNzE0Mzk&force=true&w=2400"
          }
          alt="Picture of the author"
          width={1900}
          height={1200}
          priority={true}
          layout={"responsive"}
        />
      </div>

      <section>
        
        {data.products.products.map((item)=>{

          return (<div className="col" key={item.id}>
         {item.image && <>
          <Image
          
            src={item.image}
            alt="Picture of the author"
            width={1900}
            height={1200}
            layout={"responsive"}

            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          /> 
          <h3>{item.sku}</h3>
          </>}
        </div>)
        })}
        
      
      </section>
    </>
  );
}

