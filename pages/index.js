import { gql } from "@apollo/client";
import Image from "next/image";
import client from "../libs/apollo";
import Jumbo from "../components/home/jumbo"
import Layout from "../components/layout"
import CenterHome from "../components/home/centerHome"
import CategorieHome from "../components/home/categorie"
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

    <Layout>
      <Jumbo />
      <CenterHome />
      <CategorieHome />
    </Layout>

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
