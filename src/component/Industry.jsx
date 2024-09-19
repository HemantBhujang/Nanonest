import React from 'react'
import Post from './Post'

const Industry = ({title,content,wave}) => {
  return (
    <>    
<div class="container text-start">
  <div class="row">
    <div class="col">
        <h1 className='my-5' style={{fontSize:'15vmin'}}>{title}</h1>
        <h5 className='text-start' style={{color:'#F9BC6E'}}>{content}</h5>
    </div>
  </div>
</div>
<img src={wave} alt="Wave image" className='start my--5' width='100%' />
<Post />

    </>
  )
}

export default Industry