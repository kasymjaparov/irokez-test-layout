import React from 'react'
import ContentContainer from '../../../containers/ContentContainer'
import './Staffs.css'

export default function Staffs() {
	const userData = [
		{
			name: 'Александров Александр Александрович',
			dev: 'Frontend Разработчик - Frontend departament',
			number: '+996 770 000 000',
			email: 'alexandrov.alexandr@fankihr.com',
			index: '00 00 123456',
			address: 'УФМС России по Московской области 01.01.2012 000-000',
			learn: 'Разработчик программно-информационных систем'
		},
		{
			name: 'Александров Александр Александрович',
			dev: 'Frontend Разработчик - Frontend departament',
			number: '+996 770 000 000',
			email: 'alexandrov.alexandr@fankihr.com',
			index: '00 00 123456',
			address: 'УФМС России по Московской области 01.01.2012 000-000',
			learn: 'Разработчик программно-информационных систем'
		},
		{
			name: 'Александров Александр Александрович',
			dev: 'Frontend Разработчик - Frontend departament',
			number: '+996 770 000 000',
			email: 'alexandrov.alexandr@fankihr.com',
			index: '00 00 123456',
			address: 'УФМС России по Московской области 01.01.2012 000-000',
			learn: 'Разработчик программно-информационных систем'
		},
		{
			name: 'Александров Александр Александрович',
			dev: 'Frontend Разработчик - Frontend departament',
			number: '+996 770 000 000',
			email: 'alexandrov.alexandr@fankihr.com',
			index: '00 00 123456',
			address: 'УФМС России по Московской области 01.01.2012 000-000',
			learn: 'Разработчик программно-информационных систем'
		},
		{
			name: 'Александров Александр Александрович',
			dev: 'Frontend Разработчик - Frontend departament',
			number: '+996 770 000 000',
			email: 'alexandrov.alexandr@fankihr.com',
			index: '00 00 123456',
			address: 'УФМС России по Московской области 01.01.2012 000-000',
			learn: 'Разработчик программно-информационных систем'
		},
		{
			name: 'Александров Александр Александрович',
			dev: 'Frontend Разработчик - Frontend departament',
			number: '+996 770 000 000',
			email: 'alexandrov.alexandr@fankihr.com',
			index: '00 00 123456',
			address: 'УФМС России по Московской области 01.01.2012 000-000',
			learn: 'Разработчик программно-информационных систем'
		},
		{
			name: 'Александров Александр Александрович',
			dev: 'Frontend Разработчик - Frontend departament',
			number: '+996 770 000 000',
			email: 'alexandrov.alexandr@fankihr.com',
			index: '00 00 123456',
			address: 'УФМС России по Московской области 01.01.2012 000-000',
			learn: 'Разработчик программно-информационных систем'
		}
	]
	const [open, setOpen] = React.useState(false)
	return (
		<div className="main_staffs">
			<div className="main_staffs_header">
				<div className="main_staffs_header_container">
					<div className="main_staffs_header_search">
						<i className="fas fa-search" />
						<input
							className="main_staffs_header_search_input"
							placeholder="Начните ввод для поиска сотрудника"
							type="text"
						/>
					</div>
					<div className="main_staffs_header_buttons">
						<div onClick={() => setOpen(true)} className="main_staffs_header_buttons_filter">
							<i className="fas fa-sliders-h" />
							<span>Фильтры(12)</span>
						</div>
						<div className="main_staffs_header_buttons_otchet">Сформировать отчет</div>
						<div className="main_staffs_header_buttons_staffs">Добавить сотрудников</div>
					</div>
				</div>
			</div>
			<div className="main_staffs_nav">
				<div className="main_staffs_nav_container">
					<input className="main_staffs_nav_checkbox" type="checkbox" />
					<span className="main_staffs_nav_info">Личная информация</span>
					<i className="fas fa-chevron-up" />
					<span className="main_staffs_nav_contact">Контактная информация</span>
					<span className="main_staffs_nav_pasport">Паспортные данные</span>
					<span className="main_staffs_nav_learn">Образование</span>
					<span className="main_staffs_nav_status">Статус</span>
				</div>
			</div>
			<div className="main_staffs_items">
				{userData.map((item, index) => (
					<div key={index} className="main_staffs_items_item">
						<div className="main_staffs_items_container">
							<input className="main_staffs_nav_checkbox" type="checkbox" />
							<div className="main_staffs_items_item_ava" />
							<div className="main_staffs_items_item_dev">
								<div className="main_staffs_items_item_dev_name">{item.name}</div>
								<div className="main_staffs_items_item_dev_dev">{item.dev}</div>
							</div>
							<div className="main_staffs_items_item_contact">
								<b>{item.number}</b> <br /> {item.email}
							</div>
							<div className="main_staffs_items_item_pasport">
								<b>{item.index}</b> <br /> {item.address}
							</div>
							<div className="main_staffs_items_item_learn">
								<b>Высшее</b> <br /> {item.learn}
							</div>
							<div className="main_staffs_items_item_status">Работает</div>
						</div>
					</div>
				))}
			</div>
			{open && (
				<div className="modal">
					<div className="modal_content">
						<div className="modal_content_header">
							Модальное окно <i onClick={() => setOpen(false)} className="fas fa-times" />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
