import React from 'react'
import ContentContainer from '../../containers/ContentContainer'

export default function Content() {
	const quarter1 = [
		{
			title: 'Контактная информация',
			first: '+7 770 0000 000',
			second: 'alexandrov.alexandr@fankihr.com'
		},
		{
			title: 'Адрес проживания',
			first: 'Россия, Москва',
			second: 'мкр. Центральный, пр. Уличных улиц 220, кв. 350'
		},
		{ title: 'Адрес прописки', first: 'Росстя, Москва', second: 'мкр. Восточный, ул. Улиц 220' },
		{ title: 'Гражданство', first: 'Кыргызстан', second: '' }
	]

	const quarter2 = [
		{
			title: 'Паспортные данные',
			first: 'ИНН 0000 0000 0000 0000',
			second: 'Выдан - УФМС России по Московской области '
		},
		{
			title: 'Номер паспорта и дата выдачи',
			first: 'Номер/серия - 503 413 783 01',
			second: '01.01.2012 - 01.01.2022'
		},
		{ title: 'Семейное положение', first: 'Не женат', second: '' },
		{ title: 'Национальность', first: 'Русский', second: '' }
	]
	const quarter3 = [
		{
			title: 'Образование',
			first: 'Высшее',
			second: 'Разработчик программно-информационных систем '
		},
		{
			title: 'Университет',
			first: 'Университет высоких технологий им. И.И. Иванова',
			second: 'Факультет информационных технологий и математики'
		},
		{ title: 'Годы обучения', first: '2014-2018' }
	]
	const quarter4 = [
		{
			title: 'Знание языков',
			first: 'Русский',
			second: 'Родной '
		},
		{
			title: '         ',
			first: 'Английский',
			second: 'Технический'
		},
		{ title: '         ', first: 'Немецкий', second: 'Технический' }
	]
	return (
		<div className="main_content">
			<div className="main_content_first">
				<ContentContainer>
					<div className="main_content_header">
						<div className="main_content_header_back">
							<div className="main_content_header_back_arrow fas fa-arrow-left" />
							<span className="main_content_header_back_title">Назад</span>
						</div>
						<div className="main_content_header_editgroup">
							<div className="main_content_header_editgroup_edit">
								<div className="fas fa-pen" />
							</div>
							<div className="main_content_header_editgroup_points">
								<div className="fas fa-ellipsis-h" />
							</div>
						</div>
					</div>
					<div className="main_content_logo" />
					<div className="main_content_username">Александров Александр Александрович</div>
					<div className="main_content_desc">
						<div className="main_content_desc_left">
							<div className="main_content_desc_left_dev">
								Frontend Разработчик - Frontend departament
							</div>
							<div className="main_content_desc_left_date">
								Дата рождения: <b>1 января 1990</b>{' '}
							</div>
						</div>
						<div className="main_content_desc_right">
							<div className="main_content_desc_right_zp">
								<b>Работает - Оклад:100000 руб</b>
							</div>
							<div className="main_content_desc_right_datework">
								Дата начала работы: <b>20 октября 2018</b>
							</div>
							<div className="main_content_desc_right_holiday">
								Отпускные - доступно / использовано: <b>21,4 дн / 1,6 дн</b>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			<div className="main_content_second">
				<ContentContainer>
					<div className="main_content_second_quarter">
						{quarter1.map((item) => (
							<div className="main_content_second_quarter_block">
								<ContentContainer>
									<div className="main_content_second_quarter_block_title">{item.title}</div>
									<div className="main_content_second_quarter_block_sec">{item.first}</div>
									<div className="main_content_second_quarter_block_third">{item.second}</div>
								</ContentContainer>
							</div>
						))}
					</div>
					<div className="main_content_second_quarter">
						{quarter2.map((item) => (
							<div className="main_content_second_quarter_block">
								<ContentContainer>
									<div className="main_content_second_quarter_block_title">{item.title}</div>
									<div className="main_content_second_quarter_block_sec">{item.first}</div>
									<div className="main_content_second_quarter_block_third">{item.second}</div>
								</ContentContainer>
							</div>
						))}
					</div>
					<div className="main_content_second_quarter">
						{quarter3.map((item) => (
							<div className="main_content_second_quarter_block">
								<ContentContainer>
									<div className="main_content_second_quarter_block_title">{item.title}</div>
									<div className="main_content_second_quarter_block_sec">{item.first}</div>
									<div className="main_content_second_quarter_block_third">{item.second}</div>
								</ContentContainer>
							</div>
						))}
					</div>
					<div className="main_content_second_quarter">
						{quarter4.map((item) => (
							<div className="main_content_second_quarter_block">
								<ContentContainer>
									<div className="main_content_second_quarter_block_title">{item.title}</div>
									<div className="main_content_second_quarter_block_sec">{item.first}</div>
									<div className="main_content_second_quarter_block_third">{item.second}</div>
								</ContentContainer>
							</div>
						))}
					</div>
				</ContentContainer>
			</div>
		</div>
	)
}
