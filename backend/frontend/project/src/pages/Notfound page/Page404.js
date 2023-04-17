import React, { useEffect } from 'react'
import './page404.css'
import Animatepages from '../../AnimatepagesHome'

function Page404({ ToggleFooter }) {
  useEffect(() => {
    ToggleFooter(false)
  }, [])
  return (
    <Animatepages>
      <div className='page404'>
        <div className='container-box d-flex flex-column'>
          <h1 className='display-3 fw-bold'>OOPS!</h1>
          <h4 className='display-5'>Page Not Found 404</h4>
        </div>
      </div>
    </Animatepages>
  )
}

export default Page404