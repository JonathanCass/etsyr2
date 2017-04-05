import store from '../store'
import $ from "jquery"

/*export function getData() {
  axios.get('http://localhost:3001/users').then(res=>{
    store.dispatch({
      type: 'GET_DATA',
      data: res.data
    })
  })
}*/

export function getData() {
  $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(res){
    store.dispatch({
      type: 'GET_DATA',
      data: res.results
    })
    console.log(res.results)
  })
}