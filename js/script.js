(function() {
  (function() {
    var fnFullSlideHome, fnValidateLogin;
    fnFullSlideHome = function() {
      var afterCatchDom, catchDom, dom, init, st;
      dom = {};
      st = {
        container: '#slides'
      };
      catchDom = function() {
        dom.container = $(st.container);
      };
      afterCatchDom = function() {
        dom.container.superslides({
          animation: 'fade',
          play: 4000
        });
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnValidateLogin = function() {
      var catchDom, dom, events, init, st, suscribeEvents;
      dom = {};
      st = {
        txtUser: '#txtUser',
        txtPassword: '#txtPassword',
        btnLogin: '#loginConfirm',
        dashboard: '/home.html'
      };
      catchDom = function() {
        dom.txtUser = $(st.txtUser);
        dom.txtPassword = $(st.txtPassword);
        dom.btnLogin = $(st.btnLogin);
      };
      suscribeEvents = function() {
        dom.btnLogin.on('click', events.eValidateLogin);
      };
      events = {
        eValidateLogin: function(e) {
          e.preventDefault();
          if ($.trim(dom.txtPassword.val()) !== '' && $.trim(dom.txtUser.val())) {
            window.location = st.dashboard;
          }
        }
      };
      init = function() {
        catchDom();
        suscribeEvents();
      };
      init();
    };
    fnValidateLogin();
    fnFullSlideHome();
  })();

}).call(this);
