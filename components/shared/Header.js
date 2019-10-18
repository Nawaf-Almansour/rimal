// import React, { Component } from 'react'
// import Link from 'next/link';
import {Link as NextLink} from '../../routes'

// export default class Headers extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
       
//     }
//   }
  
//   render() {
//     return (
//     <div>
//         <Link href = "/" >
//         <a> Home </a> 
//         </Link> 
//         <Link href = "/about" >
//         <a> About </a> 
//         </Link> 
//         <Link href = "/blogs" >
//         <a> Blog </a> 
//         </Link> 
//         <Link href = "/portfolios" >
//         <a> Portfolios </a> 
//         </Link> 
//         <Link href = "/cv">
//         <a> CV </a>
//         </Link> 
//         {/* <NextLink route='test' params={{id: '2'}}>
//           Test 2
//         </NextLink>
//         <NextLink route= '/test/5'>
//           Test5
//         </NextLink> */}
      
//     </div>
//     )
//   }
// }

 
  import React, { useState} from 'react';
 import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
 } from 'reactstrap';


 const Header = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return ( <
     div >
     <
     Navbar color = "light"
     light expand = "md" >
     <
     NavbarBrand href = "/" > reactstrap < /NavbarBrand> <
     NavbarToggler onClick = {
       toggle
     }
     /> <
     Collapse isOpen = {
       isOpen
     }
     navbar >
     <
     Nav className = "ml-auto"
     navbar >
     <
     NavItem >
     <
     NavLink href = "/components/" > Components < /NavLink> <
     /NavItem> <
     NavItem >
     <
     NavLink href = "https://github.com/reactstrap/reactstrap" > GitHub < /NavLink> <
     /NavItem> <
     UncontrolledDropdown nav inNavbar >
     <
     DropdownToggle nav caret >
     Options <
     /DropdownToggle> <
     DropdownMenu right >
     <
     DropdownItem >
     Option 1 <
     /DropdownItem> <
     DropdownItem >
     Option 2 <
     /DropdownItem> <
     DropdownItem divider / >
     <
     DropdownItem >
     Reset <
     /DropdownItem> <
     /DropdownMenu> <
     /UncontrolledDropdown> <
     /Nav> <
     /Collapse> <
     /Navbar> <
     /div>
   );
 }

 export default Header;