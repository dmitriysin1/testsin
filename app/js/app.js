import noUiSlider from 'nouislider'

document.addEventListener('DOMContentLoaded', () => {

	const rangeSlider = document.getElementById('range-slider')
	const levelTitle2 = document.getElementById('title-level-2')
	const levelDesc2 = document.getElementById('desc-level-2')
	const iconLevel2 = document.getElementById('icon-level-2')
	const percentLevel2 = document.getElementById('percent-level-2')
	const [...bonusLevel2] = document.getElementsByClassName('friendship-level-2__card-bonus')
	const [...iconPlusLevel2] = document.getElementsByClassName('friendship-level-2__card-bonus-icon')
    const [...subtitleLevel3] = document.getElementsByClassName('friendship-level3__card-subtitle')
	const titleLevel3 = document.getElementById('title-level-3')
	const descLevel3 = document.getElementById('desc-level-3')
	const iconLevel3 = document.getElementById('icon-level-3')
	const percentLevel3 = document.getElementById('percent-level-3')
	const [...iconPlusLevel3] = document.getElementsByClassName('friendship-level-3__card-bonus-icon')
	const [...bonusLevel3] = document.getElementsByClassName('friendship-level-3__card-bonus')


	noUiSlider.create(rangeSlider, {
		start: 0,
		connect: 'lower',
		padding: [0, 7],
		range: {
			'min': 0,
			'max': 100
		}
	});

	rangeSlider.noUiSlider.on('update', function (values) {

		let val = Math.round(values)
		const level2 = 33
		const level3 = 69

		val >= level2
			? levelTitle2.classList.remove('friendship-level__card-title--gray')
			: levelTitle2.classList.add('friendship-level__card-title--gray')
		val >= level2
			? levelDesc2.classList.remove('friendship-level__card-desc--gray')
			: levelDesc2.classList.add('friendship-level__card-desc--gray')
		val >= level2
			? iconLevel2.classList.remove('friendship-level__card-icon--gray')
			: iconLevel2.classList.add('friendship-level__card-icon--gray')
		val >= level2
			? percentLevel2.classList.remove('friendship-level__card-percent--gray')
			: percentLevel2.classList.add('friendship-level__card-percent--gray')
		val >= level2
			? bonusLevel2.map((el) => el.classList.remove('friendship-level__card-bonus--gray'))
			: bonusLevel2.map((el) => el.classList.add('friendship-level__card-bonus--gray'))
		val >= level2
			? iconPlusLevel2.map((el) => el.classList.remove('friendship-level__card-bonus-icon--gray'))
			: iconPlusLevel2.map((el) => el.classList.add('friendship-level__card-bonus-icon--gray'))
		val >= level3
			? subtitleLevel3.map((el) => el.classList.remove('friendship-level__card-subtitle--lightgray'))
			: subtitleLevel3.map((el) => el.classList.add('friendship-level__card-subtitle--lightgray'))
		val >= level3
			? titleLevel3.classList.remove('friendship-level__card-title--lightgray')
			: titleLevel3.classList.add('friendship-level__card-title--lightgray')
		val >= level3
			? descLevel3.classList.remove('friendship-level__card-desc--lightgray')
			: descLevel3.classList.add('friendship-level__card-desc--lightgray')
		val >= level3
			? iconLevel3.classList.remove('friendship-level__card-icon--lightgray')
			: iconLevel3.classList.add('friendship-level__card-icon--lightgray')
		val >= level3
			? percentLevel3.classList.remove('friendship-level__card-percent--lightgray')
			: percentLevel3.classList.add('friendship-level__card-percent--lightgray')
		val >= level3
			? iconPlusLevel3.map((el) => el.classList.remove('friendship-level__card-bonus-icon--lightgray'))
			: iconPlusLevel3.map((el) => el.classList.add('friendship-level__card-bonus-icon--lightgray'))
		val >= level3
			? bonusLevel3.map((el) => el.classList.remove('friendship-level__card-bonus--lightgray'))
			: bonusLevel3.map((el) => el.classList.add('friendship-level__card-bonus--lightgray'))
	})



})
