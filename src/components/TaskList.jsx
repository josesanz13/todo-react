import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GloblaContext } from '../context/GlobalContext'
import { IoAddCircleSharp,IoCheckmarkOutline,IoTrashBin,IoReturnDownBackOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const TaskList = () => {

    const { tasks, deleteTask, doneTask } = useContext(GloblaContext);

    return (
        <div className='flex flex-col justify-center'>
            <div className='flex justify-end items-end mb-3'>
                <Link to={'/add'}>
                    <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className='pr-2'>
                            <IoAddCircleSharp />
                        </span>
                        Nueva tarea
                    </button>
                </Link>
            </div>
            {tasks.map(task => (
                <div className='bg-gray-900 px-8 lg:px-20 py-5 text-white shadow-2x1 mb-4 flex items-start rounded-lg' key={task.id}>
                    <div className="block xl:flex xl:flex-row w-full">
                        <div className="flex w-full lg:w-4/5 flex-col mb-4 md:mb-0">
                            <div className='title text-left'>
                                <h2 className={task.done ? 'text-lg line-through' : 'text-lg'}> * {task.title}</h2>
                            </div>
                            <div className='description text-sm text-left mt-2'>
                                <h3 className={task.done ? 'text-md line-through' : 'text-md'}>{task.description}</h3>
                            </div>
                        </div>
                        <div className="flex w-full md:w-auto justify-end">
                            <div className="flex flex-col w-full md:w-auto md:flex-row md:items-center">
                                <button 
                                    className='px-2 rounded rounded bg-purple-700 hover:bg-purple-800 text-white font-semibold text-center inline-flex items-center rounded text-sm h-12 mx-0 lg:mx-2'
                                    onClick={()=> doneTask(task.id) }
                                >
                                    <span className="mr-2">
                                        {
                                            !task.done 
                                                ?
                                            <IoCheckmarkOutline />
                                                :
                                            <IoReturnDownBackOutline/>
                                        }
                                    </span>
                                    {!task.done ? 'Finalizar' : 'Deshacer'}
                                </button>

                                {
                                    !task.done && 
                                    <>
                                        <Link to={`/edit/${task.id}`} className='w-full'>
                                            <button className='px-2 rounded rounded bg-green-700 hover:bg-green-800 text-white inline-flex items-center font-semibold rounded text-sm h-12 mt-2 lg:mt-0 mx-0 md:mx-2 w-full md:w-auto'>
                                                <span className='mr-2'>
                                                    <FaEdit />
                                                </span>
                                                Editar
                                            </button>
                                        </Link>
                                    </>
                                }
                                <button 
                                    className='px-2 rounded bg-red-700 hover:bg-red-800 text-white font-semibold rounded text-sm h-12 inline-flex items-center mx-0 lg:mx-2 mt-2 md:mt-0' 
                                    onClick={() => deleteTask( task.id )} 
                                >
                                    <span className="mr-2">
                                        <IoTrashBin/>
                                    </span>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskList