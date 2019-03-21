import React from 'react'
import {
    Style
} from 'react-imvc/component'
export default function View({
    state,
    handlers
}) {
    const {
        handleCountMinus,
        handleCountPlus
    } = handlers
    return (
        <div className='container'>
            <Style name='index' />
            <h1 className='title'>{state.title}</h1>
            <div className='main'>
                <span 
                    className='button'
                    onClick={handleCountPlus}
                >+</span>
                <span className='count'>{state.count}</span>
                <span 
                    className='button'
                    onClick={handleCountMinus}
                >-</span>
            </div>
        </div>
    )
}
