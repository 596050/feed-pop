import React, { forwardRef, ReactElement } from 'react'
import { Avatar as AntAvatar, AvatarProps } from 'antd'

type Props = AvatarProps

const Avatar = forwardRef<HTMLElement, Props>(
  ({ ...rest }, ref): ReactElement => {
    return <AntAvatar {...rest} ref={ref} />
  }
)

Avatar.displayName = 'Avatar'

export default Avatar
