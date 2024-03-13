import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '@/context/StateContext';
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={125} height={50} />
        </Link>
      </p>
      <div>
        <button type='button'
          className='cart-icon'
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
