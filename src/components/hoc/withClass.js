import React from 'react';

const withClass = (Compon, classes) => {
    return props => (
        <div className={classes}>
            <Compon {...props}/>
        </div>
    )
}
export default withClass;