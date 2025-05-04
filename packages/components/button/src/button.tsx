import React from 'react';

interface GButtonProps {
    type?: string;
    size?: string;
    icon?: string;
    round?: boolean;
    plain?: boolean;
    circle?: boolean;
    disabled?: boolean;
    loading?: boolean;
    children?: any;
    onClick?: any;
}

const GButton: React.FC<GButtonProps> = ({ 
    type = '', 
    size = '', 
    icon = '', 
    round = false, 
    plain = false, 
    circle = false, 
    disabled = false, 
    loading = false, 
    children, 
    onClick 
}) => {
    const classList = {
        [`g-button--${type}`]: type,
        [`g-button--${size}`]: size,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round,
        'is-plain': plain,
        'is-circle': circle
    };

    return (
        <button 
            className={`g-button ${Object.keys(classList).filter(key => classList[key]).join(' ')}`} 
            disabled={disabled || loading}
            onClick={(event: any) => onClick && onClick(event)}
        >
            {loading ? <i className="g-icon-loading"></i> : null}
            {icon && !loading ? <i className={`g-icon ${icon}`}></i> : null}
            {children}
        </button>
    );
};

export default GButton;