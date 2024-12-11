import React from "react"


const HamburgerIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
    )
}

export default HamburgerIcon