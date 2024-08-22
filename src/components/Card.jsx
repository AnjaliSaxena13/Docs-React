import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.06 }} dragElastic={0.1}dragTransition={{bounceStiffness:100,bounceDamping:30}}className=' relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] px-8 py-10 text-lg text-white overflow-hidden'>

            <FaRegFileAlt />
            <p className='mt-5 text-base leading-tight font-semibold'>{data.des}</p>
            <div className="footer w-full absolute bottom-0 left-0">
                <div className='flex items-center justify-between mb-3 px-8 py-3'>
                    <h5> {data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <RiCloseLine /> : <FaDownload size=".7em" color='#fff' />}
                    </span>

                </div>


                {data.tag.isOpen && <div className={`tag w-full ${data.tag.color === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center  py-4`}>
                    <h3 className='text-base font-semibold'>{data.tag.tagtitle}</h3>
                </div>}



            </div>

        </motion.div>

    );
}

export default Card