(->


	fnFullSlideHome = ->
		dom = {}
		st =
			container : '#slides'
		catchDom = ->
			dom.container = $(st.container)
			return
		afterCatchDom = ->
			dom.container.superslides
				animation: 'fade'
				play: 4000
			return
		init = ->
			catchDom()
			afterCatchDom()
			return
		init()
		return

	
	fnValidateLogin = ->
		dom = {}
		st =
			txtUser 		: '#txtUser'
			txtPassword : '#txtPassword'
			btnLogin 		: '#loginConfirm'
			dashboard		: '/home.html'
		catchDom = ->
			dom.txtUser	 		= $(st.txtUser)
			dom.txtPassword = $(st.txtPassword)
			dom.btnLogin 		= $(st.btnLogin)
			return
		suscribeEvents = ->
			dom.btnLogin.on 'click', events.eValidateLogin
			return
		events =
			eValidateLogin : (e)->
				e.preventDefault()
				if $.trim(dom.txtPassword.val()) != '' and $.trim(dom.txtUser.val())
					window.location = st.dashboard
				return
		init = ->
			catchDom()
			suscribeEvents()
			return
		init()
		return
	

	#Funciones
	fnValidateLogin()
	fnFullSlideHome()
	return
)()