import React from 'react'

function Create() {
  return (
    <div>
      <form>
        <div className='main-picture'>
        <label htmlFor="">Main Picture</label>
        <input type="text" placeholder='url'/>
        </div>


        <div className='three-little-photos'>
        <label htmlFor="">Three smaller</label>
        <label htmlFor="">Picture:1</label>
        <input type="text" placeholder='url'/>

        <label htmlFor="">Picture:2</label>
        <input type="text" placeholder='url'/>

        <label htmlFor="">Picture:3</label>
        <input type="text" placeholder='url'/>
        </div>

        <div className='main-info'>
        <label htmlFor="">Make</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Model</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Description Upper</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <label htmlFor="">Price</label>
        <input type="text" placeholder='' />
        </div>
       
       <div className='specifics'>
        <label htmlFor="">Type</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Make</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Model</label>
        <input type="text" placeholder='' />

        <label htmlFor="">First Registration</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Mileage</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Fuel</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Engine Size</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Power</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Gearbox</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Number of Seats</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Doors</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Color</label>
        <input type="text" placeholder='' />
       </div>

      <div className='bigger description'>
      <label htmlFor="">Description</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div className='contact-info'>
      <label htmlFor="">Name</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Phone</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Address</label>
        <input type="text" placeholder='' />

        <label htmlFor="">Email</label>
        <input type="text" placeholder='' />
      </div>

      </form>
    </div>
  )
}

export default Create;