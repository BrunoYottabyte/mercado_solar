import React from 'react'

const ColumnFilter = ({column}) => {
  const {filterValue, setFilter} = column;
  
  return (
    <div>
        <span>Search {' '}
            <input type="text" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)}/>
        </span>
    </div>
  )
}

export default ColumnFilter