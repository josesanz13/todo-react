import React from 'react'
import { Link } from 'react-router-dom';
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Heading = () => {
	return (
		<div>
			<div className='flex items-center mb-10'>
				<Link to={'/'}>
					<h5 className='text-gray-100 text-3xl font-bold inline-flex'>
						<span className='mr-2'>
							<IoCheckmarkDoneOutline />
						</span>
						Lista de tareas
					</h5>
				</Link>
			</div>
		</div>
	)
}

export default Heading