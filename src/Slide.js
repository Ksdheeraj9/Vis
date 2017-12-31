import React, { Component } from 'react'
import Sidebar from './Sidebar';
import FilteredMultiSelect from 'react-filtered-multiselect';
import axios from 'axios';

class Slide extends Component{
  constructor() {
    super()
    this.state = {
      options:[],
      selectedOptions: [],
      
    }
 
  }
componentDidMount(){
    axios.get("https://api.myjson.com/bins/1g8w3b")
     .then((response)=>{
      this.setState(()=>{
               return {
                 selectedOptions: response.data.taxonomy,
                 options: response.data.taxonomy
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

    selectedOptions.sort((a, b) => a.taxId - b.taxId)
    this.setState({selectedOptions})
}
  
render() {
    
  return (

      <div className="row">  
        <div className="col-md-6">
         <FilteredMultiSelect
          placeholder="Select Taxonomy"
          buttonText="Add"
          classNames={{

            filter: 'form-control',            
            select: 'form-control',            
            button: 'btn btn btn-block btn-default',            
            buttonActive: 'btn btn btn-block btn-danger'
          
          }}

          onChange={this.handleDeselect}
          options={this.state.selectedOptions}
          textProp="taxonomyName"
          valueProp="taxId"
        />

       
      </div> 
       <div className="col-md-6">
        

        <FilteredMultiSelect
          placeholder="Visible Taxonomy"
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
          textProp="taxonomyName"
          valueProp="taxId"
        />
      </div>      

    </div>)
    
}
}

export default Slide;





 