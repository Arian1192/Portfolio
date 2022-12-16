import React from 'react'

const CloseIconHamburger = (props: any) => (
    <svg
        fill="none"
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m5 5 14 14M5 19 19 5"
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
    </svg>
)

export default CloseIconHamburger
