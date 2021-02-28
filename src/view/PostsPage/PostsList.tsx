import React, { ReactElement, useEffect, useState } from 'react'
import { useVirtual } from 'react-virtual'

import { List } from '../../component'

import ListItem from './PostListItem'

type Props<T> = {
  data: T[]
}

const PostsList = <T,>({ data = [] }: Props<T>): ReactElement => {
  const parentRef = React.useRef(null)
  const [state, setState] = useState<{ data: any[] }>({ data })

  useEffect(() => setState({ data }), [data])

  const rowVirtualizer = useVirtual({
    overscan: 10,
    paddingStart: 20,
    parentRef,
    size: state.data.length,
  })

  return (
    <List className="posts-list" ref={parentRef}>
      <div
        className="row-visualizer-container"
        style={{
          height: `${rowVirtualizer.totalSize}px`,
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          return (
            <div
              key={virtualRow.index}
              ref={virtualRow.measureRef}
              style={{
                height: `${state.data[virtualRow.index]}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
              className="list-item-container"
            >
              <ListItem
                data={{
                  id: state.data[virtualRow.index].id,
                  image: state.data[virtualRow.index].image,
                  text: state.data[virtualRow.index].text,
                  username: state.data[virtualRow.index].username,
                }}
              />
            </div>
          )
        })}
      </div>
    </List>
  )
}

export default PostsList
