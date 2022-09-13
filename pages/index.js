import React from "react";
import { client } from "../lib/client";
import { FooterBanner, HeroBanner, Product } from "../components";
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          minus est quia ipsa eligendi eos harum. Suscipit obcaecati ullam
          aperiam accusamus distinctio voluptatem deleniti excepturi qui veniam,
          enim corporis pariatur. Illum!
        </p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <FooterBanner FooterBanner={bannerData && bannerData[0]} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
