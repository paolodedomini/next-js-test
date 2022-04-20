import { gql } from "@apollo/client";
import Image from "next/image";
import client from "../libs/apollo";
import PRODOTTI_DONNA from "../queries/donna";

export default function Home({ data }) {
  console.log(data);
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
        <div className="col">
          <Image
            src={data.products.products[0].image}
            
            alt="Picture of the author"
            width={1900}
            height={1200}
            layout={"responsive"}

            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
        </div>
        <div className="col">
          <Image
           src={data.products.products[0].image}
            alt="Picture of the author"
            width={1900}
            height={1200}
            layout={"responsive"}

            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            
          />
        </div>
        <div className="col">
          <Image
            src={data.products.products[0].image}
            alt="Picture of the author"
            width={1900}
            height={1200}
            layout={"responsive"}

            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
        </div>
        <div className="col">
          <Image
           src={data.products.products[0].image}
            alt="Picture of the author"
            width={1900}
            height={1200}
            layout={"responsive"}

            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: PRODOTTI_DONNA,
  });

  return {
    props: {
      data: data,
    },
  };
}
