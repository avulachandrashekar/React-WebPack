import React from "react";
import { render } from "react-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header"; 

class App extends React.Component
    {
    constructor(props)
        {
            super(props);
            this.state = {
                HomeLink: "Home",
                isHomeComponentMounted : true
            }
        }
    
    onGreet()
        {
            window.alert("Greetings from App Page!!!")
        }

    onChangeLink(newLinkName){
            this.setState({
                HomeLink : newLinkName
            });
        }
    
    onChangeHomeComponentVisibily(){
        this.setState({
            isHomeComponentMounted : !this.state.isHomeComponentMounted
        })
    }

    render(){ 
            let HomeComp = ""; 
            let buttonText = "Mount Home";           
            if(this.state.isHomeComponentMounted){
                HomeComp = (<Home 
                                Name={"Chandra"} 
                                Age={31} 
                                Greet={this.onGreet} 
                                OnChangeLink={this.onChangeLink.bind(this)}
                                InitialHomeLink= {this.state.HomeLink}/>
                                
                                );
                buttonText = "(un)Mount Home";
            }
            return(
                <div className="container">
                    <div className="row">       
                        <div className="col-xs-10">
                            <Header HomeLink={this.state.HomeLink}/> 
                            {HomeComp} 
                            <button onClick={()=> this.onChangeHomeComponentVisibily()}>{buttonText}</button> 
                        </div>                                                     
                    </div>
                </div>
            );
        }
    }

render(<App />, window.document.getElementById("app"));