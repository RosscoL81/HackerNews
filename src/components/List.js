import React from 'react'

const List = (props) => {
  return (
    <div>
      {props.storyIds.map((story, index) =>{
        return (
          <ListItem
            value = {story}
            key = {index}
            />
        )
      })}
      </div>
  )

}

export default List;
