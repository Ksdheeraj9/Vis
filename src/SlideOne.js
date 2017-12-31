import React, { Component } from 'react'
import Sidebar from './Sidebar';
import FilteredMultiSelect from 'react-filtered-multiselect';
import axios from 'axios';



class SlideOne extends Component  {
 constructor() {
    super()
    this.state = {
      options:[],
      selectedOptions: [],
      
    }
 
  }
componentDidMount(){
    axios.get("https://api.myjson.com/bins/7wszj")
     .then((response)=>{
      this.setState(()=>{
               return {
                 selectedOptions: response.data.keywords,
                 options: response.data.keywords
               }
      })
     })     
}
 
handleDeselect = (deselectedOptions) => {
    var selectedOptions = this.state.selectedOptions.slice()
    deselectedOptions.forEach(option => {
      selectedOptions.splice(selectedOptions.indexOf(option), 1)
    })
    this.setState({selectedOptions})
}

handleSelect = (selectedOptions) => {

    selectedOptions.sort((a, b) => a.keywordId - b.keywordId)
    this.setState({selectedOptions})
}
  
render() {
    
  return (

      <div className="row">  
        <div className="col-md-6">
         <FilteredMultiSelect
          placeholder="Select Keywords"
          buttonText="Add"
          classNames={{

            filter: 'form-control',            
            select: 'form-control',            
            button: 'btn btn btn-block btn-default',            
            buttonActive: 'btn btn btn-block btn-danger'
          
          }}

          onChange={this.handleDeselect}
          options={this.state.selectedOptions}
          textProp="keywordName"
          valueProp="keywordId"
        />

       
      </div> 
       <div className="col-md-6">
        

        <FilteredMultiSelect
          placeholder="Visible Keywords"
          buttonText="Delete"
          classNames={{
            filter: 'form-control',            
            select: 'form-control',
            button: 'btn btn btn-block btn-default',           
            buttonActive: 'btn btn btn-block btn-primary'
          }}
          onChange={this.handleSelect}
          options={this.state.options}
          selectedOptions={this.state.selectedOptions}
          textProp="keywordName"
          valueProp="keywordId"
        />
      </div>      

    </div>)
    
}
 
}

export default SlideOne;