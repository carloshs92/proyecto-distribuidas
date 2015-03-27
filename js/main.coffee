(->
	fnActiveCalendar = ->
		dom = {}
		st =
			container : '#calendar'
			events : [
				{
					title: 'Event1'
					start: '2015-03-30'
					end: '2015-04-15'
				},
				{
					title: 'Event2'
					start: '2015-05-01'
					end: '2015-05-15'
				},
			]
		catchDom = ->
			dom.container = $(st.container)
			return
		afterCatchDom = ->
			dom.container.fullCalendar
				lang: 'es'
				defaultView: 'month'
				eventSources: [
					events	 : st.events
					color	 : '#26A2E0'
					textColor:'white'
				]
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