import React, { Component } from 'react'

class InputPreview extends Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.value}
                    onChange={e => this.props.onChange(e.target.value)} />
            </div>
        )
    }
}

export default InputPreview