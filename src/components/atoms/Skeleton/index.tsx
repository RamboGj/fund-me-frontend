import "./index.css"

import cx from "classnames"
import { ComponentProps } from 'react'

export type SkeletonProps = ComponentProps<'div'> & {
  variant?: 'primary' | 'secondary'
  width?: number | string
  height?: number | string
  borderRadius?: number | string
}

export function Skeleton({
  width,
  height,
  borderRadius,
  className,
  variant = 'primary',
  ...rest
}: SkeletonProps) {
  const skeletonClassName = cx('at-skeleton', className)

  return (
    <div
      data-variant={variant}
      className={skeletonClassName}
      style={{ height, width, borderRadius }}
      {...rest}
    />
  )
}
