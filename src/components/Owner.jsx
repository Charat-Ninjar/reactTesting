import React from "react";
import Layout from "../Layout";

const Owner = () => {
  return (
    <Layout>
      <div className="owner mt-5">
        <h1>Ninjar Group I - 9</h1>
        <img src="/ninjar.jpg" className="w-25 mt-4 "></img>
        <h6 className="mt-5">
          <strong>Short Biography</strong>
        </h6>
        <p className=" bio">
          Hi, my name is Ninjar, and I'm a learner in the Software Developer
          program at Generation Thailand. I'm passionate about coding and always
          eager to embrace new challenges in the world of technology. 
          Nice to meet you.
        </p>
      </div>
    </Layout>
  );
};
export default Owner;
