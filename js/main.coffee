(->
	fnActiveCalendar = ->
		dom = {}
		st =
			container : '#calendar'
		catchDom = ->
			dom.container = $(st.container)
			return
		afterCatchDom = ->
			dom.container.fullCalendar
				lang: 'es'
				defaultView: 'month'
			return
		init = ->
			catchDom()
			afterCatchDom()
			return
		init()
		return

	fnGetSchedule = ->
		dom = {}
		st =
			select : '#heavyMachinery'
		catchDom = ->
			dom.select = $(st.select)
			return

		init = ->
			catchDom()
			return
		init()
		return

	fnRangeCalendar = ->
		dom = {}
		st =
			toDate 		: '#toDate'
			fromDate 	: '#fromDate'
		catchDom = ->
			dom.toDate 		= $(st.toDate)
			dom.fromDate 	= $(st.fromDate)
			return
		afterCatchDom = ->
			dom.toDate.datepicker(
				changeMonth: true
				changeYear: true
				dateFormat: 'dd-mm-yy'
				maxDate: "+2Y"
				minDate: 0
				numberOfMonths: 3
				onClose: (selectedDate )->
					dom.fromDate.datepicker( "option", "minDate", selectedDate )
					return
				)
			dom.fromDate.datepicker(
				changeMonth: true
				changeYear: true
				dateFormat: 'dd-mm-yy'
				maxDate: "+2Y"
				minDate: 0
				numberOfMonths: 3
				onClose: (selectedDate )->
					dom.toDate.datepicker( "option", "maxDate", selectedDate )
					return
				)
			return

		init = ->
			catchDom()
			afterCatchDom()
			return
		init()
		return

	fnLoadingButtons = ->
		dom = {}
		st =
			buttons : '.btn'
		catchDom = ->
			dom.buttons = $(st.buttons)
			return
		afterCatchDom = ->
			dom.buttons.ladda('bind', { timeout: 2000 })
			return
		init = ->
			catchDom()
			afterCatchDom()
			return
		init()
		return

	fnLoadingButtons()
	fnRangeCalendar()
	fnGetSchedule()
	fnActiveCalendar()
	return
)()