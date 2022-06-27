import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>Home page</h1>
        <p className={text}>testar</p>
      </div>

      <Link to="/about">about</Link>
      <Link to="/company/history">History</Link>
    </Layout>
  )
}
