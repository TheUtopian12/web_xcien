import React from "react";
import Header from './Navbar/Navbar'
const Layout = ({ children, pagina }) => {
  return (
    <>
      <head>
        <title>XCIEN - {pagina}</title>
        <meta name="description"    content="Xcien Internet Empresarial" />

      </head>
        <Header/>
    
        {children}


        //Footer

    </>
  );
};

export default Layout;
