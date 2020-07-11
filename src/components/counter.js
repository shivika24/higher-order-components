import React,{ Component} from 'react';
import UpdatedComponent from './withCounter';
class Counter extends Component
{

    render()
    {
        return (
            <div>
                <center><button onClick={this.props.inc}>Clicked {this.props.count} times</button></center>
            </div>
        )
    }
}
export default UpdatedComponent(Counter);