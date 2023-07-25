
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" py-[2px]  bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto xl:w-[80%] lg:w-[90%] px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              
            


              <div className="flex flex-1 items-center  ">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto translate-y-[-3px]"
                    src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJh2rnff0VdcDoKUDan1E4CFtwVSTwgLVNg&usqp=CAU"
                    alt="Your Company"
                  /> */}
                  <h1 className=' font-bold text-2xl text-white'>LOGO</h1>



                </div>
                <div className="hidden sm:ml-6 sm:block">
                  

                </div>
              </div>



              {/*  */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full  p-1 text-white focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-800"
                  // className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className=" translate-y-4  absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      
                    <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? ' text-[#C1C1C1]' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            rented properties
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? ' text-[#C1C1C1]' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            hosted properties
                          </a>
                        )}
                      </Menu.Item>


                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? ' text-[#C1C1C1]' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            wishlist
                          </a>
                        )}
                      </Menu.Item>
 

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? ' text-[#C1C1C1]' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            settings
                          </a>
                        )}
                      </Menu.Item>


                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? ' text-[#C1C1C1]' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            logout
                          </a>
                        )}
                      </Menu.Item>
                    


                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              {/*  */}



              




            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}
