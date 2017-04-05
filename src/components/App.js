import React from 'react'
import store from '../store'
import {getData} from '../api/data'

const styles = {

}

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
        <div>
          {this.state.data.map(data=>(
            <div style={styles.itemBox}>
              <div img src={data.Images.url_570xN} style={styles.imageBox}/>
              <div style={styles.infoBox}>
                <span style={styles.itemTitle}>{data.title}</span>
                <div styles={styles.storePriceBox}>
                  <span styles={styles.store}>{data.state}</span>
                  <span styles={styles.price}>{data.price}</span>
                </div>  
              </div>
            </div>
            //<li key={data.listing_id}>{data.price}</li>
          ))}
        </div>
      </div>
    )
  }
})