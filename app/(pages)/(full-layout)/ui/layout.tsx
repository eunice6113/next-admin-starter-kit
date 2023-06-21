"use client"

import '@/assets/css/pages/ui-guide.css';

const UiGuideLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <div className='ui-guide-container'>
      {children}
    </div>
  )
}
export default UiGuideLayout;