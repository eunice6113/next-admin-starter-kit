"use client"

import '@/assets/css/global/next.css'

const SSRBoardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <>
      <main className='page'>
          {children}
      </main>
  </>
  )
}
export default SSRBoardLayout;