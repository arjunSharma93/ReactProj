import React from "react";


export default class ClassComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            name: "sunny",
            email: "sunny@email.com"
        }
    }

    componentDidMount(){
        console.warn("Class component called"); 
    }

    updateName(){
        this.setState({
            name: "Arjun"
        })
    }

    render(){
         return(
            <div>
                <h1>{this.props.text}</h1>
                <h1 onClick={()=>{this.updateName()}}>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
            </div>
         )
    }
}