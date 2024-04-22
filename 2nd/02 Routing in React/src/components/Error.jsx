import React from 'react'
import {Link} from 'react-router-dom';
export default function Error() {
  return (
    <>
        <div>
        404 Page not found
        </div>
        <Link to="/">return to homepage</Link>
    </>
    
  )
}
