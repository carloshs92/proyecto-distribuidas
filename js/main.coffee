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
			dom.buttons.ladda('bind')
			return
		init = ->
			catchDom()
			afterCatchDom()
			return
		init()
		return
	fnInitTable = ->
		dom = {}
		st =
			tables : '#tables'
		catchDom = ->
			dom.tables = $(st.tables)
			return
		afterCatchDom = ->
			dom.tables.dataTable()
			return
		init = ->
			catchDom()
			afterCatchDom()
			return
		init()
		return
	fnSearchDNI = ->
		dom = {}
		st =
			url 	: "http://marti1125.webfactional.com/reniec/index.php/verificar/"
			dni 	: "48754156"
			button 	: "#searchDNI"
			txtDNI 		: "#txtDNI"
			txtName 	: '#txtName'
			txtLastName : '#txtLastName'
			txtAddress 	: '#txtAddress'
			currentValue: null
		catchDom = ->
			dom.button = $(st.button)
			dom.txtDNI 		= $(st.txtDNI)
			dom.txtName 	= $(st.txtName)
			dom.txtLastName = $(st.txtLastName)
			dom.txtAddress 	= $(st.txtAddress)
			return
		suscribeEvents = ->
			dom.button.on 'click', events.eSearchDNI
			dom.txtDNI.on 'change', events.eCleanForm
			dom.txtDNI.on 'keyup', events.eCleanForm
			return
		events =
			eSearchDNI : (e) ->
				dni = dom.txtDNI.val()
				if dni == ""
					dom.txtDNI.val(st.dni)
					dni = st.dni
				st.currentValue = dni
				$.ajax(
					url 		: "#{st.url}#{dni}"
					crossDomain : true
					type		: "GET"
					dataType 	: "json"
				).done((data)->
					if data.length > 0
						obj = data[0]
						dom.txtName.val(obj.nombre_completo)
						dom.txtLastName.val(obj.nombre_completo)
						dom.txtAddress.val(obj.direccion)
					else
						alert('DNI no encontrado')
					return
				).always((data)->
					dom.button.removeAttr('disabled')
					dom.button.removeAttr('data-loading')
					return
				)
				return
			eCleanForm : (e)->
				if $(@).val() != st.currentValue
					dom.txtName.val('')
					dom.txtLastName.val('')
					dom.txtAddress.val('')
				return
		init = ->
			catchDom()
			suscribeEvents()
			return
		init()
		return

	fnSearchRUC = ->
		dom = {}
		st =
			url		: "http://marti1125.webfactional.com/sunat/index.php/verificar/"
			ruc		: "20546462324"
			button	: "#searchRUC"
			txtRUC				: "#txtRUC"
			txtCompanyName		: '#txtCompanyName'
			txtCompanyAddress	: '#txtCompanyAddress'
			currentValue: null
		catchDom = ->
			dom.button				= $(st.button)
			dom.txtRUC				= $(st.txtRUC)
			dom.txtCompanyName		= $(st.txtCompanyName)
			dom.txtCompanyAddress	= $(st.txtCompanyAddress)
			return
		suscribeEvents = ->
			dom.button.on 'click', events.eSearchRUC
			dom.txtRUC.on 'change', events.eCleanForm
			dom.txtRUC.on 'keyup', events.eCleanForm
			return
		events =
			eSearchRUC : (e) ->
				ruc = dom.txtRUC.val()
				if ruc == ""
					dom.txtRUC.val(st.ruc)
					ruc = st.ruc
				st.currentValue = ruc
				$.ajax(
					url 		: "#{st.url}#{ruc}"
					crossDomain : true
					type		: "GET"
					dataType 	: "json"
				).done((data)->
					if data.length > 0
						obj = data[0]
						dom.txtCompanyName.val(obj.nombre)
						dom.txtCompanyAddress.val(obj.direccion)
					else
						alert('RUC no encontrado')
					return
				).always((data)->
					dom.button.removeAttr('disabled')
					dom.button.removeAttr('data-loading')
					return
				)
				return
			eCleanForm : (e)->
				if $(@).val() != st.currentValue
					dom.txtCompanyName.val('')
					dom.txtCompanyAddress.val('')
				return
		init = ->
			catchDom()
			suscribeEvents()
			return
		init()
		return
	fnValidate = ->
		dom = {}
		st =
			form : '#form_register'
		catchDom = ->
			dom.form = $(st.form)
			return
		afterCatchDom = ->
			dom.form.validate(
				rules:
					txtDNI:
						minlength	: 8
						number		: true
						required	: true
					txtRUC:
						minlength	: 11
						number		: true
						required	: true
				)
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
	fnInitTable()
	fnSearchDNI()
	fnSearchRUC()
	fnValidate()
	return
)()