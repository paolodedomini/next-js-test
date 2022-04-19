import { gql } from "@apollo/client";
import Image from "next/image";
import client from "../libs/apollo";
import PRODOTTI_DONNA from "../queries/donna";

export default function Home({ data }) {
  console.log(data);

  return (
    <>
      <h1>puppami la fava {data.products.products[0].name}</h1>
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
            src={
              "https://unsplash.com/photos/Q9Dw7v6GDwc/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NTAzNzE0Mzk&force=true&w=2400"
            }
            alt="Picture of the author"
            width={400}
            height={300}
            layout={"responsive"}
            placeholder="blur"
          />
        </div>
        <div className="col">
          <Image
            src={
              "https://unsplash.com/photos/Q9Dw7v6GDwc/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NTAzNzE0Mzk&force=true&w=2400"
            }
            alt="Picture of the author"
            width={400}
            height={300}
            layout={"responsive"}
            placeholder="blur"
          />
        </div>
        <div className="col">
          <Image
            src={
              "https://unsplash.com/photos/Q9Dw7v6GDwc/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NTAzNzE0Mzk&force=true&w=2400"
            }
            alt="Picture of the author"
            width={400}
            height={300}
            layout={"responsive"}
            placeholder="blur"
          />
        </div>
        <div className="col">
          <Image
            src={
              "https://unsplash.com/photos/Q9Dw7v6GDwc/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NTAzNzE0Mzk&force=true&w=2400"
            }
            alt="Picture of the author"
            width={400}
            height={300}
            layout={"responsive"}
            placeholder="blur"
          />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: PRODOTTI_DONNA,
  });

  return {
    props: {
      data: data,
    },
  };
}
