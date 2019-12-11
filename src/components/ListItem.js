import React from 'react'



  const ListItem = (props) =>{
    return (

      <div className = "listItem">
        <a href={props.value.url}>{props.value.title}</a>
        <p>Score - {props.value.score}</p>
      </div>

    )
  }


export default ListItem;
