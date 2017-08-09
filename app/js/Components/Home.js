import React from "react";
import Button from 'react-bootstrap';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age : props.Age,
            status : 0,
            HomeLink : props.InitialHomeLink
        };
        setTimeout(() => {
            this.setState({
            status : this.state.status = 1}
            )
        }, 3000);
        console.log("I am from Home Component's  constructor");
    }

    componentWillMount(){
        console.log("In Component will mount method")
    }

    componentDidMount(){
        console.log("Component did mount method")
    }

    componentWillReceiveProps(nextProps){
        console.log("Updating part, componentWillReceiveProps ", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Updating part, shouldComponentUpdate", nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("Updating part, componentWillUpdate ", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Updating part, componentDidUpdate ", prevProps, prevProps);
    }

    OnIncreaseAge(){
        this.setState({
            age : this.state.age + 3
        });
        console.log(this.state.age);
    }

    onChangeLink(){
        this.props.OnChangeLink(this.state.HomeLink);
    }

    HandleHomeLinkChange(event){
        this.setState({
            HomeLink: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>In Home Component</h1>
                <p>Name = {this.props.Name}</p>
                <p>Age = {this.state.age}</p>     
                <p>status = {this.state.status}</p>                
                <div>
                    <button onClick={() => this.OnIncreaseAge()}>                        
                        Click to Increase Age
                    </button>                    
                </div>
                <div>
                    <button onClick={this.props.Greet}>                        
                        Click To Greet
                    </button>                    
                </div>
                <div>
                    <input type="text" value={this.state.HomeLink} onChange={(event) => this.HandleHomeLinkChange(event)}/>
                    <button onClick={() => this.onChangeLink()}>                        
                        Change Link
                    </button>                    
                </div>
            </div>
        );
    }
}
export {Home};