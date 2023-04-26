import React, { useState,useContext, useEffect } from 'react'
import { IoCheckmarkOutline,IoChevronBackSharp } from "react-icons/io5";
import { GloblaContext } from '../context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
	const {addTask,tasks, updateTask} = useContext( GloblaContext );

	const [task, setTask] = useState({
		id: "",
		title: "",
		description: "",
		done: false
	})

	const navigate = useNavigate();
	const params = useParams();

	const handleChange = (e) => setTask({...task, [e.target.name] : e.target.value })

	const goBack = () => navigate('/');	

	const handleSubmit = (e) => {
		e.preventDefault();

		if (task.id) {
			updateTask(task);			
		}else{
			addTask(task);
		}

		navigate('/');
	}

	useEffect(() => {
		const taskFound = tasks.find( task => task.id === params.id);
		if (taskFound) {
			setTask(taskFound)
		}

	}, [params.id,tasks])
	
	// Return JSX
	return (
		<div>
			<div className="content-form rounded flex justify-center items-center h-3/4">
				<form action="" className="p-10 bg-gray-900 w-3/5 rounded-lg shadow-2x1" onSubmit={handleSubmit}>
					<h3 className='mb-2 text-lg font-bold'>Tarea</h3>
					<div className="mb-5">
						<input 
							type="text" 
							name='title'
							placeholder='Titulo de la tarea...'
							onChange={handleChange}
							value={task.title}
							className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
							required
						/>
					</div>
					<div className="mb-5">
						<textarea 
							name="description" 
							placeholder='Descripción de la tarea...'
							rows="3"
							onChange={handleChange}
							value={task.description}
							className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
							required
						>
						</textarea>
					</div>
					<div className="flex justify-end">
						<button 
							className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded inline-flex items-center mx-2"
							onClick={() => goBack( task.id )} 
						>
							<span className='pr-2'>
								<IoChevronBackSharp />
							</span>
							{ task.id ? 'Cancelar' : 'Volver'}
						</button>
						<button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
							<span className='pr-2'>
								<IoCheckmarkOutline />
							</span>
							{ task.id ? 'Editar' : 'Crear'}
						</button>
					</div>
				</form>

			</div>
		</div>
	)
}

export default TaskForm