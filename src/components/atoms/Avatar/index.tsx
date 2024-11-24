import "./index.css"
import cx from "classnames"

import { ComponentProps } from 'react'

import profileImage from "@/assets/profile.png"

export type AvatarProps = ComponentProps<'div'> 

export function Avatar({
  className,
  ...rest
}: AvatarProps) {
  const avatarClassname = cx('avatarWrapper', className)

  return (
    <div className={avatarClassname} {...rest}>
      <img className='avatar' src={profileImage} alt="Profile Avatar" />
    </div>
  )
}
