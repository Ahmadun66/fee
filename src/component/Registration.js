import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {

  return (
    <div className='w-full h-screen flex items-center'>
      <div className="max-w-4xl mx-auto">
        <div className="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-xl p-8 sm:p-10 lg:p-12 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Create an Account</h3>
            <div className=''>
              <label htmlFor="nama" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Nama</label>
              <input type="text" name="nama" id="nama" value="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Email</label>
              <input type="email" name="email" id="email" value="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Password</label>
              <input type="password" name="password" id="password" value="" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="gender" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Jenis Kelamin</label>
              <select name="gender" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Pilih Jenis Kelamin</option>
                <option value="male">Laki-Laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>

            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" checked required />
                </div>
                <div className="text-sm ml-3">
                  <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Back To <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
