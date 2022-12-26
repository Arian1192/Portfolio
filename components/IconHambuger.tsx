
const IconHambuger = (props: any) => (
    <svg
        fill="none"
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <path d="M5 7h14M5 12h14M5 17h14" />
        </g>
    </svg>
)

export default IconHambuger
