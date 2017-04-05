import React from 'react'
import store from '../store'
import {getData} from '../api/data'

export default React.createClass({
  getInitialState() {
    return {
      data:[]
    }
  },
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{
      const appState = store.getState()

      this.setState({
        data: appState.dataReducer.data
      })
    })
    getData()
  },
  componentWillUnmount() {
    this.unsubscribe()
  },
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(data=>(
            <li key={data.listing_id}>{data.title}</li>
          ))}
        </ul>
      </div>
    )
  }
})