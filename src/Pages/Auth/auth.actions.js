import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../../consts'

export function login(values) {
    return dispatch => {
        axios.post(`${consts.Api}/login`, values)
            .then(resp => {
                dispatch([
                    {type: 'USER_FETCHED', payload: resp.data}
                ])
            })
            .catch(e => {
                toastr.error('Erro', 'Usuário e/ou senha inválida')
                console.log(e.message)
            })
    }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.get(`${consts.Api}/token`).then(resp => {
                dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
            }).catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}