import PropTypes from 'prop-types'
import React, { Component } from 'react'


class Item extends Component{
    constructor(){
        super();
        Item.propTypes = {
            onClick: PropTypes.func.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        } 
    }

    render() {
        return (
            <div>
                <li className={'item'}
                onClick={this.props.onClick}
                style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
                >
                    {this.props.text}
                </li>
            </div>
            )
        }
}


export default Item