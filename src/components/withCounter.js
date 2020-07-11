import React,{ Component} from 'react';
//HOC
const UpdatedComponent = OriginalComponent=>{ //originalcomponent is known as wrapped component
    class NewComponent extends React.Component
    {
        constructor()
        {
            super();
            this.state={
                count:0
            }
        }
        inc=()=>{
            this.setState({count:this.state.count+1})
        }
        render()
        {
        return <OriginalComponent count={this.state.count} inc={this.inc}/>
        }
    }
    return NewComponent;
}
export default UpdatedComponent;