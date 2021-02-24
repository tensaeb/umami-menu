import React from 'react'

const Catagories = ({ catagories, filterItems }) => {

    return (
        <div className='btn-container'>
            {
                catagories.map((catagory, index) => {
                    return (
                        <button type='button' className='filter-btn' key={index} onClick={() => filterItems(catagory)}>
                            {catagory}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Catagories
