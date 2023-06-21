"use client"

import Link from 'next/link'
import '@/assets/css/pages/layout.css'
import { useEffect, useState } from 'react'
import Header from '@/app/shared/layouts/header/Header'
import LNB from '@/app/shared/layouts/sidebar/LNB'
import Footer from '@/app/shared/layouts/footer/Footer'

const FullLayout = ({
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
      <Header prefix="[Full Layout]" handleOpen={handleOpen} />

      <main className='mainContainer'>
        <div className={`lnbContainer navi ${naviOpen ? 'open':'close'}`}>
            <LNB open={naviOpen} />
        </div>
        <div className={`pageContainer ${naviOpen ? 'open':'close'}`}>
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}
export default FullLayout;