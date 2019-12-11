import React from 'react'
import List from '../components/List'

class HackerNewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyIds: [],
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
    .then(storyIds => this.setState({storyIds: storyIds.slice(0, 10)}))
    .then(promise => {
      const fetchRequests = this.state.storyIds.map((url) => {
        return fetch(url).then(res => res.json())
      })
      Promise.all(fetchRequests).then(articles => this.setState({stories: articles}))
    })
    .catch(err => console.error)
  }

  render(){
    return (
      <div>
       <h1>Hacker News - top 10</h1>
       <List stories={this.state.stories}
       />
      </div>
    )
  }

}


export default HackerNewsContainer
