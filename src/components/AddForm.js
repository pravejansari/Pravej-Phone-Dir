

import {Component} from 'react';




class AddForm extends Component{
    constructor(props){
        super(props);

        this.state ={
            dir:[],
            item:{
                firstname:"",
                lastname:"",
                officephone:"",
                residentphone:"",
                cityname:"",
                countryname:"",
                streetaddress:""

            }
        
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const name=event.target.name;
        const value=event.target.value;
        let item=this.state.item;

        item[name]=value;

        
    }

      add(e){
          e.preventDefault()
          console.log("this.state.item")
      }

     render(){
         return(
             <div className="col-md-6">
                 <form method="POST" onSubmit={this.add}> 
                     <div className="mb-2">
                        <input  
                          type ='text'
                          name ="name"
                          placeholder="Enter FirstName"
                          className="form-controle"
                          value={this.state.item.name}
                          onChange={this.handleChange}
                        />
                        <input 
                          type ='text'
                          name ="name"
                          placeholder="Enter LastName"
                          className="form-controle"
                          value={this.state.item.name}
                          onChange={this.handleChange}
                        />
                     </div>
                     <div className="mb-2">
                        <input 
                          type ='text'
                          name ="num"
                          placeholder="Enter Office Phone"
                          className="form-controle"
                          value={this.state.item.num}
                          onChange={this.handleChange}
                         />
                         <input 
                          type ='text'
                          name ="num"
                          placeholder="Enter Residetial Phone"
                          className="form-controle"
                          value={this.state.item.num}
                          onChange={this.handleChange}
                         />
                     </div>
                     <div className="mb-2">
                        <input 
                          type ='text'
                        name ="city"
                          placeholder="Enter City Name"
                          className="form-controle"
                          value={this.state.item.city}
                          onChange={this.handleChange}
                         />
                     </div>
                     <div className="mb-2">
                        <input 
                          type ='text'
                          name ="country"
                          placeholder="Enter Country Name"
                          className="form-controle"
                          value={this.state.item.country}
                          onChange={this.handleChange}
                         />
                     </div>
                     <div className="mb-2">
                        <input 
                          type ='text'
                          name ="address"
                          placeholder="Enter Street Address Name"
                          className="form-controle"
                          value={this.state.item.address}
                          onChange={this.handleChange}
                         />
                     </div>
                     <div className="mb-2">
                        <button className="btn btn-success" type="submit">
                            save
                        </button>
                     </div>
                 </form>
             </div> 
         )
     }
}

export default AddForm;