import React from "react";

import { Header } from "./Header";
import { HeadBlock } from "./HeadBlock";
import { ContentBlock } from "./ContentBlock";

import "./styles.css"


export const HomePage = ({}) => {

  return(
    <div className="home-container">

      <Header />
      <HeadBlock />
      <ContentBlock />
    </div>
  )
}