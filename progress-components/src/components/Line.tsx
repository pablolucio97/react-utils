import React from 'react'

import {Line} from 'rc-progress'

interface ILine{
    currentValue: number
}

const LineComponent : React.FC<ILine> = ({currentValue}) =>  {
    return (
        <>
            <Line 
                percent={currentValue} 
                strokeColor='#555ffa'
                strokeWidth={2}
                strokeLinecap='square'
                style={{
                    width: 600,
                    height: 20,
                }}
            />            
        </>
    )
}

export default LineComponent