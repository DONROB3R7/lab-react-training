import React from 'react'

export default function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props
  return (
    <>
        <div className="userCard">

            <div className='img'><img src={picture} alt={lastName} /></div>
            <div className="userInfo">
                <ul>
                    <li><span><strong>Name: </strong>{firstName}</span></li>
                    <li><span><strong>Last Name: </strong>{lastName}</span></li>
                    <li><span><strong>Gender: </strong>{gender}</span></li>
                    <li><span><strong>Height: </strong>{height}</span></li>
                    <li><span><strong>Birth: </strong>{birth.toDateString()}</span></li>
                </ul>
            </div>
        </div>
    </>
  )
}




// lastName='Delores '
// firstName='Obrien'
// gender='female'
// height={172}
// birth={new Date("1988-05-11")}
// picture="https://randomuser.me/api/portraits/women/44.jpg"