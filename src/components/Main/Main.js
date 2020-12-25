import React from 'react'
import './Main.css'
import Profile from './Profile'
import Sidebar from './Sidebar'
import Staffs from './Staffs/Staffs'

export default function Main() {
	return (
		<div className="main">
			<div className="main_container">
				<Sidebar />
				{/* Раскомментируйте чтобы увидеть другой блок */}
				{/* <Staffs/> */}
				<Profile />
			</div>
		</div>
	)
}
