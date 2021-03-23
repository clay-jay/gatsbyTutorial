import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{color: "lightblue"}}>
      <Header headerText="Hello world!"/>
      <Link to="/contract/">Contract</Link>
      <p>SomeText</p>
      <Link to="/about/">About</Link>
      <p>SomeText</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
