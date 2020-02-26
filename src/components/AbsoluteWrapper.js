import React, { Children } from 'react';

const AbsoluteWrapper = () => {
    const divStyle = {
        position:'absolute'
      };
    return (
        <div style={ divStyle }>
            {Children}
        </div>
    );
};

export default AbsoluteWrapper;