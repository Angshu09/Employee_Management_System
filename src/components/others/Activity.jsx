import React from 'react'

const Activity = ({count, title, color}) => {
  return (
    <div className={`${color} p-3 sm:p-4 lg:p-6 rounded-xl`}>
        <h2 className='font-bold text-3xl mb-2'>{count}</h2>
        <h3 className='text-md lg:text-xl font-medium'>{title}</h3>
    </div>
  )
}

export default Activity