import React from 'react'
import ListItem from "./ListItem"

const List = (props) => {

  return (
    <div>
      {props.stories.map((story, index) =>{
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
