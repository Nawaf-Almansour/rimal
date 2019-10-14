import React, { Component } from 'react'
import Link from 'next/link';

export default class Headers extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  
  render() {
    return (
    <div>
        <Link href = "/" >
        <a> Home </a> 
        </Link> 
        <Link href = "/about" >
        <a> About </a> 
        </Link> 
        <Link href = "/blogs" >
        <a> Blog </a> 
        </Link> 
        <Link href = "/portfolios" >
        <a> Portfolios </a> 
        </Link> 
        <Link href = "/cv">
        <a> CV </a>
        </Link> 
        <style jsx>
         { 
           `
           a {
             font-size: 20px;
             color: #f49;

            }
            `
          }
        </style>
    </div>
    )
  }
}
