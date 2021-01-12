import React from 'react'

export interface IconT {
  icon
}
export const Icon = ({ iconData }: { iconData: IconT }) => {
  return (
    <div className='icon-tech'>
      <iconData.icon size={30} color='#D05A5A'/>
    </div>
  )
}
