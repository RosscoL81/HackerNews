import React from 'react'
import List from '../components/List'
import MoreItems from '../components/MoreItems'

class HackerNewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyIds: [],
      stories: [],
      numberOne: 0,
      numberTwo: 10
    }
    this.handleNumberChange = this.handleNumberChange.bind(this);
}


  handleNumberChange(){
    const newNumberOne = this.state.numberOne += 10;
    this.setState({numberOne: newNumberOne})
    const newNumberTwo = this.state.numberTwo += 10;
    this.setState({numberTwo: newNumberTwo})

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
    .then(storyIds => this.setState({storyIds: storyIds.slice((this.state.numberOne, this.state.numberTwo).handleNumberChange())}))
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
       <MoreItems numberOne={this.state.numberOne}
       numberTwo={this.state.numberTwo}
       onNumberChange={this.handleNumberChange()}
       />
      </div>
    )
  }

}


export default HackerNewsContainer
