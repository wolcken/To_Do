import React from 'react'

const Header = ({ children, loading }) => {
    return (
        <header>
            {
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading }))
            }
        </header>
    )
}

export default Header
