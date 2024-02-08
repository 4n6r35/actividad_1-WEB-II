import React from 'react'

export const Card = ({count, info}) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center border-solid border-2 w-64'>
    <img className='w-64' src={info.img} alt="logo" />
    <div>
        {count>=0?(
            <div className='flex justify-between px-6'>
                <h2>{info.title}</h2>
                <h2>{count}</h2>
            </div>
        ):(
    <>
        <h2>{info.title}</h2>
        </>  
        )}
        <p>{info.description}</p>
        <button>Detail</button>
    </div>
</div>
  )
}
