import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {

const ref =useRef(null)

    const data = [
        {
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".7mb",
            close: true,
            tag: { isOpen: true, tagtitle: "Download Now", color: "green" },
        },

        {
          des: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          filesize: ".21mb",
          close: false,
          tag: { isOpen: false, tagtitle: "Download Now", color: "green" },
      },

        {
          des: "Lorem, ipsum dolor sit amet consectetur adipisicing note.",
          filesize: ".14mb",
          close: false,
          tag: { isOpen: true, tagtitle: "Download Now", color: "blue" },
      },

      {
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".13mb",
        close: true,
        tag: { isOpen: false, tagtitle: "Download Now", color: "green" },
    }
    ];


    return (
        <div ref={ref} className='w-full p-5 flex gap-10 h-full fixed top-0 left-0 z-[4] flex-wrap'>
          {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
          ))}


        </div>
    )
}

export default Forground