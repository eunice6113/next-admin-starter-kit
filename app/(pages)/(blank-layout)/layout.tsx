"use client"

import { useState } from "react"
import Header from "../../shared/layouts/header/Header"
import Footer from "../../shared/layouts/footer/Footer"

const BlankLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [naviOpen, setNaviOpen] = useState(true)

  const handleOpen = () => {
      setNaviOpen(!naviOpen)
  }

  return (
    <>
      <Header prefix="[Blank Layout]" handleOpen={handleOpen} />

      <main className='mainContainer'>
          {children}
      </main>

      <Footer />
    </>
  )
}
export default BlankLayout;