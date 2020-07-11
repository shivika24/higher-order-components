import React,{ Component} from 'react';
import UpdatedComponent from './withCounter';
class Hover extends Component
{

    render()
    {
        return(
            <div>
                <center><h2 onMouseOver={this.props.inc}>Hovered {this.props.count} times</h2></center>
            </div>
        )
    }
}
export default UpdatedComponent(Hover);//export higher order component