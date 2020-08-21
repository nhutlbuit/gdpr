import React, { useState, useRef, useCallback } from 'react';

function SearchCriteria(props: any) {
    const [searchValue, setSearchValue] = useState('');
    const { onSubmit } = props;
    // created object, value is not change between render times
    const typingTimeOutRef = useRef<any | null>(null);

    function handleSearchValueOnChange(e: any) {
        const valueTemp = e.target.value;
        setSearchValue(e.target.value);
        if (!onSubmit) {
            return;
        }

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            onSubmit(valueTemp);
        }, 400);
    }

    const clearSearchValue = useCallback((type) => {
        onSubmit('');
        setSearchValue('');
    },[])

    return (
        <div>
            <div className="bold-text">Search criteria:</div>
            <form>
                <input className="text-box" type="text" value={searchValue} onChange={handleSearchValueOnChange}>
                </input>
                <button className="use-icon" onClick={clearSearchValue}>
                    <i className="fas fa-times"/>
                </button>
            </form>
        </div>
    );

}

export default SearchCriteria;
