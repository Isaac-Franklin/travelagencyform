import React from "react"

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            agebracket: "",
            dietary:"",
            Location: "",
            allocation:""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event){
        const {name, value, type, checked} = event.target
        this.setState(
            {[name] : value}
        )
    }
    
    render(){
        
        function Alert(){
            return alert("Your Data Has Been Noted!")
        }
        return(
            <div>
                <label>
                    <input type="text" name="firstName" placeholder = "First Name" onChange = {this.handleClick}/>
                    <br/><br/>
                    <input type="text" name="lastName" placeholder = "Last Name" onChange = {this.handleClick}/>
                    <br/><br/>
                    <input type="number" name="age" placeholder = "Age" onChange = {this.handleClick}/>
                    <br/><br/>
                    
                    <hr/>
                </label>
                
                <label>
                    <h3>What's your age bracket?</h3>
                    <input type="radio" name="agebracket" value="15 - 20" onChange = {this.handleClick}/> :15 - 20
                    <br/><br/>
                    <input type="radio" name="agebracket" value="20 - 25" onChange = {this.handleClick}/> :20 - 25
                    <br/><br/>
                    <input type="radio" name="agebracket" value="25 - 30" onChange = {this.handleClick}/> :25 - 30
                    <hr/>
                </label>
                  <label>  
                    <h3>What's Your Gender?</h3>
                    <input type="radio" value="Male" name="gender" onChange = {this.handleClick}/> Male
                    <br/><br/>
                    <input type="radio" value="Female" name="gender" onChange = {this.handleClick}/> Female
                    <hr/>
                </label>
                <label>  
                    <h3>What Location Are You Traveling To?</h3>
                    <input type="radio" name="Location" value="Location" onChange = {this.handleClick}/> Africa
                    <br/><br/>
                    <input type="radio" name="Location" value="Location" onChange = {this.handleClick}/> Europe
                    <hr/>
                </label>
                <label>
                    <h3>Do You Have Any Dietary Restrictions </h3>
                    <input type="checkbox" name="dietary" value="Vegetarian" onChange = {this.handleClick}/> Vegetarian
                    <br/><br/>
                    <input type="checkbox" name="dietary" value="Kosher" onChange = {this.handleClick}/> Kosher
                    <br/><br/>
                    <input type="checkbox" name="dietary" value="Lactose Free" onChange = {this.handleClick}/> Lactose Free
                    <br/><br/>
                    <input type="checkbox" name="dietary" value="None" onChange = {this.handleClick}/> None
                    <hr/>
                </label> 
                <label>
                    <h3>What's Your Prefered Seat Allocation?</h3>
                    <select name="allocation" onChange = {this.handleClick}>
                        <option value="None">None</option>
                        <option value="Front Seat">Front Seat</option>
                        <option value="Back Seat">Back Seat</option>
                        <option value="Window Seat">Window Seat</option>
                        <option value="Outter Seat">Outter Seat</option>
                    </select>
                    <hr/>
                </label>
                <label>
                    <h2>Entered Information:</h2>
                    <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your Age: {this.state.age}</p>
                    <p>Your Age Bracket: {this.state.agebracket}</p>
                    <p>Your Gender: {this.state.gender}</p>
                    <p>Your Location: {this.state.Location}</p>
                    <p>Your Dietery: {this.state.dietary}</p>
                    <p>Your Preffered Seat Allocation: {this.state.allocation}</p>
                    <br/>
                    <button onClick = {Alert}>Submit</button>
                </label>
                
            </div>
        )
    }
}

export default Form
