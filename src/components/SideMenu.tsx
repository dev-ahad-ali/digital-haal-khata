import Image from 'next/image';
import Link from 'next/link';

export default function SideMenu() {
  const navLinks = [
    {
      href: '/dashboard',
      name: 'Dashboard',
      icon: (
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      href: '/dashboard/customerDetails',
      name: 'Customer Details',
      icon: (
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      href: '/dashboard/addCustomer',
      name: 'Add New Customer',
      icon: (
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
  ];
  return (
    <aside className='flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
      <Link href='/' className='text-2xl font-bold text-white bg-black rounded-md text-center '>
        Digital Haal Khata
      </Link>
      <div className='flex flex-col justify-between flex-1 mt-6'>
        <nav>
          {navLinks.map(({ href, name, icon }) => (
            <Link
              key={href}
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              href={href}
            >
              {icon}
              <span className='mx-4 font-medium'>{name}</span>
            </Link>
          ))}
        </nav>

        <a href='#' className='flex items-center px-4 -mx-2'>
          <Image
            className='object-cover mx-2 rounded-full h-9 w-9'
            src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            height={36}
            width={36}
            alt='avatar'
          />
          <span className='mx-2 font-medium text-gray-800 dark:text-gray-200'>Owner</span>
        </a>
      </div>
    </aside>
  );
}
