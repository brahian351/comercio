import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Tarjeta({ titulo, imagen, texto, enlace, ancho, alto, color }) {
    return (
        <>
            <Link href={enlace}>
                <div
                    className={`p-2 w-full text-center bg-gradient-to-tr ${color} rounded-md shadow-md shadow-black cursor-pointer`}
                    title="See More"
                >
                    <h1 className="font-bold text-lg ">{titulo}</h1>
                    <Image
                        className="mx-auto rounded-md shadow-sm shadow-gray-700"
                        src={imagen}
                        alt="imagen"
                        height={alto}
                        width={ancho}
                    />
                    <p className="font-serif italic font-thin mt-2">
                        {texto}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default Tarjeta