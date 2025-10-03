/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import OptionCards from '../components/OptionCards'
import Footer from '../components/Footer'

export default function Home() {
    useEffect(() => {


        return () => {

        }
    }, [])

    return (
        <>
            <div className="flex justify-between h-lvh">
                <div className='text-white flex items-center h-100 p-4 ml-20'>
                    <div>
                        <h1 className='text-6xl my-1'>Adopt A Pet</h1>
                        <h1 className='text-6xl my-1 text-primary'>Make A Difference</h1>
                        <p className="text-xl my-1">Open Your Heart & Home To An Animals in Need<br />
                            Bring home a Forever Friend</p>

                        <button className='mx-0 my-20 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary'>JOIN US</button>

                    </div>
                </div>
                <div>
                    <div className='flex items-center p-16'>
                        {/* <LoginForm /> */}
                    </div>
                </div>
            </div>
            <div className='h-100' id='services'>
                <h1 className='text-center text-4xl font-semibold text-white mb-11'>Let's join together and help them!</h1>
                <OptionCards />
            </div>

            <Footer/>

        </>)
}
