import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";

const Portfolio =() => {
 return (
    <section id="portfolio" className="portfolio">
      
    <PageHeaderContent
      headerText="My Portfolio"
      icon={<BsInfoCircleFill size={24}/>}
    />
  </section>
 )
};

export default Portfolio;