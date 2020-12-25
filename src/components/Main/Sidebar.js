import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	accordeon: {
		backgroundColor: '#E5E5E5',
		boxShadow: 0
	},
	items: {
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: 0
	},
	acordeon_header: {
		minHeight: 0
	}
}))

export default function Sidebar() {
	const classes = useStyles()
	const company = [
		{ name: 'Главная', icon: 'fas fa-home' },
		{ name: 'Запросы', icon: 'fas fa-bolt' },
		{ name: 'Календарь', icon: 'fas fa-calendar-alt' },
		{ name: 'База знаний', icon: 'fas fa-book' },
		{ name: 'Новости', icon: 'fas fa-book-open' },
		{ name: 'Задачи', icon: 'far fa-check-circle' },
		{ name: 'Чаты', icon: 'far fa-comment-dots' }
	]
	const admin = [
		{ name: 'Статистика компании', icon: 'fas fa-chart-line' },
		{ name: 'Структура компании', icon: 'fas fa-cubes' },
		{ name: 'Сотрудники', icon: 'fas fa-user', chosen: true },
		{ name: 'База знаний', icon: 'fas fa-book' },
		{ name: 'Новости', icon: 'fas fa-book-open' },
		{ name: 'Настройки', icon: 'fas fa-cog' },
		{ name: 'Служба поддержки', icon: 'fas fa-layer-group' }
	]
	return (
		<div className="main_sidebar">
			<Accordion defaultExpanded={true} elevation={0} className={classes.accordeon}>
				<AccordionSummary
					className={classes.acordeon_header}
					expandIcon={<div className="fas fa-angle-down"></div>}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<div>COMPANY NAME</div>
				</AccordionSummary>
				<AccordionDetails className={classes.items}>
					{company.map((item) => (
						<div key={item.icon} className="main_sidebar_acc1_item" id={item.name}>
							<i className={item.icon} /> <span>{item.name}</span>
						</div>
					))}
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded={true} elevation={0} className={classes.accordeon}>
				<AccordionSummary
					className={classes.acordeon_header}
					expandIcon={<div className="fas fa-angle-down"></div>}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<div>Администратор</div>
				</AccordionSummary>
				<AccordionDetails className={classes.items}>
					{admin.map((item) => (
						<div
							key={item.icon}
							className={
								item.chosen
									? 'main_sidebar_acc1_item main_sidebar_acc1_item_chosen'
									: 'main_sidebar_acc1_item'
							}
							id={item.name}
						>
							<i style={item.chosen && { color: 'white', marginLeft: '5px' }} className={item.icon} />{' '}
							<span style={item.chosen && { color: 'white' }}>{item.name}</span>
						</div>
					))}
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
