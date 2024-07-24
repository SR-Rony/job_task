import { Outlet } from 'react-router-dom'
import Sightbar from '../sightbar/Sightbar'
import Navbar from '../navbar/Navbar'

const Root = () => {
  return (
    <div className='grid grid-cols-12 relative'>
        <div className='hidden lg:block lg:col-span-2'>
            <Sightbar/>
        </div>
        <div className='col-span-12 lg:col-span-10 bg-bg_primary'>
                <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Root