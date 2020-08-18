import './index.css'
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Row from '../../common/Row'
import Grid from '../../common/Grid'
import Input from '../../common/Input'

import { login } from './auth.actions'

let Auth = props => {
    const onSubmit = values => {
        const { login } = props
        login(values)
    }

    const { handleSubmit } = props
    return (
        <div className='login-page'>
            <div className="login-box">
                <div className="login-logo"><b>COPLACANA</b></div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bem vindo!</p>
                        <form onSubmit={handleSubmit(v => onSubmit(v))}>
                            <Field component={Input} type="input" name="login"
                                placeholder="Usuário" icon="user" />
                            <Field component={Input} type="password" name="password"
                                placeholder="Senha" icon='lock' />
                            <Row class='float-right'>
                                <Grid cols="12 12 12">
                                    <button type="submit"
                                        className="btn btn-primary">
                                            Entrar
                                    </button>
                                </Grid>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

Auth = reduxForm({form: 'auth'})(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)
export default connect(null,mapDispatchToProps)(Auth)