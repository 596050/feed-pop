import React, { ReactElement } from 'react'

import { Avatar, ListItem } from '../../component'
import { Post } from '../../model'

type Props = {
  data: Partial<Post>
}

const PostListItem = ({ data }: Props): ReactElement => {
  return (
    <div id="list-item">
      <ListItem
        avatar={
          <Avatar
            src={
              data.image ||
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            }
            draggable={false}
          />
        }
        title={
          <div>
            {data.username} {data.id}
          </div>
        }
        description={data.text}
      />
    </div>
  )
}

export default PostListItem
