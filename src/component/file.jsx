import React, { Component } from 'react';
class File extends Component {
    // constructor(props.obj) {
    //     super(props.obj);
    // }
    state = {  }
    render() {
        if(this.props.show===1) 
        {
        return ( 
            <>
             <table>
                       <tbody>
                       <tr>
                            <td>Monthly EMI</td>
                            <td>{this.props.obj.emi}</td>
                        </tr>
                        <tr>
                            <td>Total Intrest</td>
                            <td>{this.props.obj.interest.toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>Total Payment</td>
                            <td>{this.props.obj.total}</td>
                        </tr>
                       </tbody>
                    </table>

            </>
         );
        }else{
            return (
                <>
                </>
            )
        }
    }
}
 
export default File;