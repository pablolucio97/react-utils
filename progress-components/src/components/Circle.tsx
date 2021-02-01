import React from 'react'

import {Circle} from 'rc-progress'

interface ICircle{
    currentValue: number
}

const CircleComponent : React.FC<ICircle> = ({currentValue}) =>  {
    return (
        <>
            <Circle 
                percent={currentValue} 
                strokeColor='#555ffa'
                strokeWidth={5}
                strokeLinecap='square'
                style={{
                    width: 200,
                    height: 200
                }}
            />            
        </>
    )
}

export default CircleComponent