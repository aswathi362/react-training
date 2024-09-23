import React from 'react'

function FooterComponent() {
  return (
    <div className='bg-light-green flex gap-10 p-20'>
        <div className='basis-2/5'>
            <h1 className='text-6xl font-bold mb-4'>Farmiest!</h1>
            <p className='font-thin mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh. </p>
            <div className='flex gap-4 '>
                <div className='rounded-lg bg-bright-green text-white py-2 px-3'><i className='bi bi-facebook text-3xl'></i></div>
                <div className='rounded-lg bg-bright-green text-white py-2 px-3'><i className='bi bi-instagram text-3xl'></i></div>
                <div className='rounded-lg bg-bright-green text-white py-2 px-3'><i className='bi bi-twitter text-3xl'></i></div>
                <div className='rounded-lg bg-bright-green text-white py-2 px-3'><i className='bi bi-linkedin text-3xl'></i></div>
            </div>
        </div>
        <div className='basis-1/5'>
            <h1 className='text-3xl font-bold mb-2'>Link</h1>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>My Account</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>My Wishlist</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>My Orders</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>Checkout</p>
        </div>
        <div className='basis-1/5'>
            <h1 className='text-3xl font-bold mb-2'>Information</h1>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>About Us</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>Contact Us</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>Our Team</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-arrow-right-short text-3xl'></i>Blog</p>
        </div>
        <div className='basis-1/5'>
            <h1 className='text-3xl font-bold mb-2'>Contact</h1>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-geo-alt-fill text-bright-orange text-xl me-1'></i>123, Hello Drive</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-envelope-fill text-bright-orange text-xl me-1'></i>johndoe@farmiest.com</p>
            <p className='flex items-center font-thin mb-2'><i className='bi bi-telephone-fill text-bright-orange text-xl me-1'></i>+1234567890</p>
        </div>
    </div>
  )
}

export default FooterComponent