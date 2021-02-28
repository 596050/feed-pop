import React, { ReactElement, ReactNode } from 'react'
import { List } from 'antd'

type Props = {
  title: ReactNode
  description?: ReactNode
  avatar?: ReactNode
}

const ListItem = ({ title, description, avatar }: Props): ReactElement => {
  return (
    <List.Item>
      <List.Item.Meta avatar={avatar} title={title} description={description} />
    </List.Item>
  )
}

export default ListItem
