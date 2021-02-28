import React, {
  CSSProperties,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react'
import { List as AntList } from 'antd'

export type Props = {
  children?: ReactNode
  style?: CSSProperties
  className?: string
}

const List = forwardRef<HTMLDivElement, Props>(
  ({ children, style, className, ...rest }: Props, ref): ReactElement => {
    return (
      <div ref={ref} style={style} className={className} {...rest}>
        <AntList itemLayout="horizontal">{children}</AntList>
      </div>
    )
  }
)

export default List

List.displayName = 'List'
