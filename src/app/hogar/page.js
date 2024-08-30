"use client"
import React, { useState } from 'react'
import Menu from '../Components/Menu/page'
import ProductoPagPrincipal from '../Components/ProductoPagPrincipal/page'


export default function Hogar() {
    return (
        <>
            <Menu />
            <div className="container mx-auto px-6">
                <h3 className="text-gray-700 text-2xl font-medium">Hogar</h3>
                <ProductoPagPrincipal titulo={"Sabanas"} costo='250.000' imagen={"/Pets/pet1.jpeg"} />

                <div className="flex justify-center">
                    <div className="flex rounded-md mt-8">
                        <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></a>
                        <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>1</span></a>
                        <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>2</span></a>
                        <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>3</span></a>
                        <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
                    </div>
                </div>
            </div>

        </>
    )
}

