import React from 'react'

class HackerNewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyTitles: [],
      storyIds: [],
      selectedStory: null
    }
    // this.handleSelectChange = this.handleSelectChange.bind(this);
}

  componentDidMount(){
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"

    fetch(url)
    .then(res => res.json())
    .then(storiesIdList => {
      return storiesIdList.map((id) => {
        return `https://hacker-news.firebaseio.com/v0/item/${id}.json `
      })
    })
    .then(anything => this.setState({storyIds: anything}))
    .catch(err => console.error)
  }

  render(){
    return (
      <h1>Hi</h1>
    )
  }

}


export default HackerNewsContainer
