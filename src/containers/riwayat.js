import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectHistory, clearHistory } from "../action/index"

class Riwayat extends Component {
    render (){
        return (
            <div>
                <h4><i className = 'fa fa-clock'/>Riwayat Operator</h4>
                <ul className = 'list-group'>
                    { this.props.riwayat.map(riwayat, index) => (
                        <li key={index} className = 'list-group-item list-group-item-action' onClick = {() => {
                            this.props.selectHistory(index) }} > {`${riwayat} = ${eval(riwayat)}`}</li>
                        ))}
                </ul>
                <div className = 'mt-3 text-right'>
                    <button className = 'btn btn-danger' onClick={() => {
                        this.props.clearHistory()
                     }}> <i className = 'fa fa-trash' /> Hapus </button>
            </div>
        </div>
        )
    }
}
function mapStateToProps (state){
    return {
        riwayat: state.calcu.riwayat
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreator({selectHistory , clearHistory}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(History)