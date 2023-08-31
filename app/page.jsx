"use client"

import React from "react"
import Feed from "@components/Feed"
import Nav from "@components/Nav"

const Home = () => {

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">Agricultural Ideas</span>
      </h1>
      <p className="desc text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, autem? Veniam, dolorem officia nihil vel rerum sit minus aliquam est?
      </p>

      <Feed />
    </section>
  )
}

export default Home