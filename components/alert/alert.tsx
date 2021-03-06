import React from 'react';
import t from 'prop-types';

import { AlertProps,KindMap } from './interface';

const prefixClis = 'smile-alert';

const kinds: KindMap = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warning: '#FFA502',
}

const Alert:React.FC<AlertProps> = ({children,kind = 'info', ...rest})=>{
    return (
        <div 
            className={prefixClis}
            style = {{
                background:kinds[kind]
            }}
            {...rest}
        >
            {children}
        </div>
    );
}

Alert.propTypes = {
    kind:t.oneOf(['info','positive','negative','warning'])
}

export default Alert;