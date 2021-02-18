import React from 'react'

export interface IconT {
  icon, iconStyle
}
export const Icon = ({ iconData }: { iconData: IconT }) => {
  return (
    <div data-aos="zoom-in" className={iconData.iconStyle}>
      <iconData.icon size={30} color='#383838'/>
    </div>
  )
}
