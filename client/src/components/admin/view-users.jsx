import React, { useState, useEffect } from 'react'
import { getUsers, makeAdmin } from '../../helpers/admin/admin-helper'
import Swal from 'sweetalert2'
function ViewUsers() {
    const [user, setUser] = useState([])
    useEffect(() => {
        getUsers().then((data) => {
            console.log(data.data.user, 'user data');
            if (data) {
                setUser(data.data.user)
            }
        })
    }, [])
    const handleUser = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make Admin!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let details = await makeAdmin(id)

                if (details) {
                    setUser(details.data.user)
                }
                Swal.fire(
                    'Changed!',
                    'Changed to admin.',
                    'success'
                )
            }
        })

    }
    return (
        <div>
            <section className="container px-4 mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                            Users
                        </h2>

                    </div>

                </div>
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                <span>Name</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Email
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
                                            </th>


                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>


                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            user.map((details) => {
                                                return (
                                                    <tr key='key'>
                                                        <td className="py-4 px-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">

                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">

                                                                    </div>
                                                                    <div className="text-sm text-gray-500 dark:text-gray-300">
                                                                        {details.name}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-12 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900 dark:text-white">

                                                            </div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-300">
                                                                {details.email}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 whitespace-nowrap">
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                {details.isAdmin ? 'Admin' : 'User'}
                                                            </span>
                                                        </td>

                                                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            {
                                                                details.isAdmin == false ?

                                                                    <button onClick={() => { handleUser(details._id) }} className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                                                                        makeAdmin
                                                                    </button> : ""}


                                                        </td>
                                                    </tr>)
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ViewUsers
