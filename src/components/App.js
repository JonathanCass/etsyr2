import React from 'react'
import store from '../store'
import {getData} from '../api/data'

const styles = {
  itemFence:{
    width: 1440,
    display: 'flex',
    flexWrap:'wrap'
  },
  itemBox : {
    width: 264,
    height: 262,
    margin: '10px 24px 4px 0',
    border: 'solid #CFCBC8 1px',
    overflow: 'hidden',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  image: {
    margin: 0,
    width: 264,
    height: 212,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
  imageLabel: {
    fontSize: 12,
    margin: 0,
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: 'solid #CFCBC8 0px',
    borderBottom: 1
  }
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
        <div styles={styles.itemFence}>
          {this.state.data.map(data=>(
            <div style={styles.itemBox} key={data.listing_id}>
              <img src={data.Images[0].url_570xN} style={styles.image} alt={data.listing_id}/>
              <div className='imageLabel'>
                <span className='title'>{data.title}</span>
                <span className='maker'>{data.Shop.shop_name}</span>
                <span className='price'>{data.price}</span>
                </div>  
              </div>
          ))}
        </div>
    )
  }
})