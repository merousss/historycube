import React from "react";

import Logo from "../../images/logo.png"

export const Header = () => {
  return(
    <div className="home-header">
      <div className="logo-container">
        <img src={Logo} width={100} height={83}/>
      </div>
    </div>
  )
}