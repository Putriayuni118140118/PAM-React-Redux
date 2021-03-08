import React, { Component } from 'react'
import { connect } from 'react-redux'

class Layar extends Component {
    render(){
        return (
            <div className = 'row'>
                <div className = 'Layar'>
                    {(
                        !this.propos.Layar
                    )?'0':this.props.Layar}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        Layar: state.calcu.Layar
    }
}

export default connect(mapStateToPropos)(Layar)