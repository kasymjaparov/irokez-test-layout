import React from 'react'
import MainContainer from '../../containers/MainContainer'
import './Header.css'
export default function Header() {
	return (
		<div className="header">
			<MainContainer>
				<div className="header_container">
					<div className="header_logo">Fanki</div>
					<div className="header_profile_group">
						<div className="header_profile_group_message">
							<div className="header_profile_group_message-content">
								<div className="header_profile_group_message_bell far fa-bell" />
								<div className="header_profile_group_message_desc">Сообщений нет</div>
							</div>
						</div>
						<div className="header_profile_group_user">
							<div className="header_profile_group_user_name">Александров Александр</div>
							<div className="header_profile_group_user_dev">Frontend разработчик</div>
						</div>
						<div className="header_profile_group_userlogo" />
						<div className="header_profile_group_slider fas fa-angle-down" />
					</div>
				</div>
			</MainContainer>
		</div>
	)
}
