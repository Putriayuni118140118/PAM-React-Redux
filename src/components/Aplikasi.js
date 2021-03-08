import React, { Component } from 'react'
import Screen from '../containers/layar'
import ButtonList from '../containers/ButtonList'
import History from '../containers/riwayat'

class Aplikasi extends Component {
    render(){
        return (
            <div className = 'row'>
                <div classname = 'col-sm-12'>
                    <h3 className = 'mt-4'><i className = 'fa fa-calculator '/> Kalkulator React-redux</h3>
                </div>
                <div className = 'col-sm-8'>
                    <Screen />
                </div>
                <div className = 'col-sm-8'>
                    <h5>Tombol</h5>
                    <ButtonList/>
                </div>
                <div className = 'col-sm-4'>
                    <History />
                </div>
            </div>
        )
    }
}

export default Aplikasi