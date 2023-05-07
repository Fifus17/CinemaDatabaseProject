import React from 'react'

const Test = () => {

    const getProgramme = () => {
        fetch("127.0.0.1:8000/programme", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then( response => console.log(response));
    }

    const getSeats = () => {
        fetch("127.0.0.1:8000/seats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                programmeID: '645807a49bbe2826034dbac4'
            })
        }).then( response => console.log(response));
    }

  return (
    <div className='test-container'>
        <h1>TESTING VIEWS</h1>
        <div className='test-views-buttons'>
            <button className='test-views-programme' onClick={getProgramme}>Programme</button>
            <button className='test-views-seats-available' onClick={getSeats}>Seats</button>
        </div>
    </div>
  )
}

export default Test