/* eslint-disable @next/next/no-sync-scripts */
import NavBar from "./Navbar"
import Head from 'next/head'
import Menu from "./Menu"

import Slide from "./Slide"
import Apresentacao from "./Apresentacao"





const layout = ({children}) => {
   return(
       <>
       <Head>
           <title>Itriad</title>
           <link rel="stylesheet" href="./style/index.css"></link>
       </Head>

       <Menu> </Menu>

       <Slide></Slide>

       <Apresentacao ></Apresentacao>
  
       {(children)}

      
       </>
   ) 
}

export default layout
