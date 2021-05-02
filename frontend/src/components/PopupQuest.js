import React from 'react';

function PopupQuest(props) {
    return props.trigger ? (
        <div className="popup-result">
            <div className="popup-inner">{props.children}</div>
        </div>
    ) : (
        ''
    );
}

export default PopupQuest;
