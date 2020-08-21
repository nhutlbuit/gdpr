import React from 'react';

const ButtonFooter = (
  label: string,
  className: any,
  iconClasses: any,
  dataIndex: any,
  dataId: any,
  onClick: any
) => {
    return (
      <button
        className={'link card-footer-item ' + className}
        aria-label={label}
        tabIndex={0}
        onClick={onClick}
        data-index={dataIndex}
        data-id={dataId}
      >
        <i className={iconClasses} />
        <span>{label}</span>
      </button>
    );
  };

export default ButtonFooter;
