import React, { Component } from 'react';
import File from './file';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { principle: "", rate: "",year:"",mon:"", emi: "",total:0,show:0,interest:0}
    }


Amval=event=>{
this.setState({principle:parseInt(event.target.value)})
}
Inval=event=>{
  
    this.setState({rate:event.target.value})
}
Yeval=event=>{
    this.setState({year:parseInt(event.target.value)})
}
Moval=event=>{
    this.setState({mon:parseInt(event.target.value)})
}
Calculate=event=>{
    let mon=this.state.mon+this.state.year*12
    // let emi=(this.state.principle * this.state.rate * Math.pow((1+this.state.rate), mon))/(Math.pow((1+this.state.rate),mon)-1) 

    const interest = (this.state.principle * (this.state.rate * 0.01)) / mon;
    const total = ((this.state.principle / mon) + interest).toFixed(2);
     this.setState({emi:total},()=>{
        this.setState({interest:interest},()=>{
            this.setState({total:total*mon})
        })
     })

    console.log(total)
}

Details=event=>{
    (this.state.show===0)?this.setState({show:1}):this.setState({show:0})
}
Resetor=event=>{
this.setState({principle: "", rate: "",year:"",mon:"", emi: "",total:0,show:0,interest:0})
}





    render() {
        return (
            <>
                <div className="container" style={{ width: "22%", padding: "0px", backgroundColor: "white" }}>
                    <div className="nav" style={{ backgroundColor: "#184f9c", width: "90%", padding: "2.5% 5% 2.5% 5%" }}><i className="fa fa-bars" aria-hidden="true"></i><p>EMI Calculator</p><i className="fa fa-history" aria-hidden="true"></i></div>
                    <div className="row flexAIC">
                        <input name="same" type="radio" />
                        <p>Loan Amount</p>
                        <input type="number" value={this.state.principle} onChange={this.Amval}/>
                    </div>
                    <div className="row flexAIC">
                        <input name="same" type="radio" />
                        <p>Interest %</p>
                        <input type="number" value={this.state.rate} onChange={this.Inval}/>
                    </div>
                    <div className="row flexAIC">
                        <input name="same" type="radio" />
                        <p>Period</p>
                        <input id="year" type="number" onChange={this.Yeval} value={this.state.year} style={{ marginRight: "0px" }} /><input id="year" onChange={this.Moval} value={this.state.mon} type="number" />
                    </div>
                    <div className="row flexAIC">
                        <input name="same" type="radio" />
                        <p>EMI</p>
                        <input type="number" value={this.state.emi}disabled />
                    </div>
                    <div className="row flexJCC" style={{ marginTop: "20px" }}>
                        <button className="btn btn-info" onClick={this.Calculate}>CALCULATE</button>
                        <button className="btn btn-info" onClick={this.Resetor}>RESET</button>
                        <button className="btn btn-info" onClick={this.Details}>DETAILS</button>
                    </div>
                   <File show={this.state.show} obj={{total:this.state.total,emi:this.state.emi,interest:this.state.interest}}/>
                </div>

            </>);
    }
}

export default Main;