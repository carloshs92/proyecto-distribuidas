(function() {
  (function() {
    var fnActiveCalendar, fnGetSchedule, fnInitTable, fnLoadingButtons, fnRangeCalendar, fnSearchDNI;
    fnActiveCalendar = function() {
      var afterCatchDom, catchDom, dom, init, st;
      dom = {};
      st = {
        container: '#calendar',
        events: [
          {
            title: 'Event1',
            start: '2015-03-30',
            end: '2015-04-15'
          }, {
            title: 'Event2',
            start: '2015-05-01',
            end: '2015-05-15'
          }
        ]
      };
      catchDom = function() {
        dom.container = $(st.container);
      };
      afterCatchDom = function() {
        dom.container.fullCalendar({
          lang: 'es',
          defaultView: 'month',
          eventSources: [
            {
              events: st.events,
              color: '#26A2E0',
              textColor: 'white'
            }
          ]
        });
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnGetSchedule = function() {
      var catchDom, dom, init, st;
      dom = {};
      st = {
        select: '#heavyMachinery'
      };
      catchDom = function() {
        dom.select = $(st.select);
      };
      init = function() {
        catchDom();
      };
      init();
    };
    fnRangeCalendar = function() {
      var afterCatchDom, catchDom, dom, init, st;
      dom = {};
      st = {
        toDate: '#toDate',
        fromDate: '#fromDate'
      };
      catchDom = function() {
        dom.toDate = $(st.toDate);
        dom.fromDate = $(st.fromDate);
      };
      afterCatchDom = function() {
        dom.toDate.datepicker({
          changeMonth: true,
          changeYear: true,
          dateFormat: 'dd-mm-yy',
          maxDate: "+2Y",
          minDate: 0,
          numberOfMonths: 3,
          onClose: function(selectedDate) {
            dom.fromDate.datepicker("option", "minDate", selectedDate);
          }
        });
        dom.fromDate.datepicker({
          changeMonth: true,
          changeYear: true,
          dateFormat: 'dd-mm-yy',
          maxDate: "+2Y",
          minDate: 0,
          numberOfMonths: 3,
          onClose: function(selectedDate) {
            dom.toDate.datepicker("option", "maxDate", selectedDate);
          }
        });
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnLoadingButtons = function() {
      var afterCatchDom, catchDom, dom, init, st;
      dom = {};
      st = {
        buttons: '.btn'
      };
      catchDom = function() {
        dom.buttons = $(st.buttons);
      };
      afterCatchDom = function() {
        dom.buttons.ladda('bind');
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnInitTable = function() {
      var afterCatchDom, catchDom, dom, init, st;
      dom = {};
      st = {
        tables: '#tables'
      };
      catchDom = function() {
        dom.tables = $(st.tables);
      };
      afterCatchDom = function() {
        dom.tables.dataTable();
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnSearchDNI = function() {
      var catchDom, dom, events, init, st, suscribeEvents;
      dom = {};
      st = {
        url: "http://marti1125.webfactional.com/reniec/index.php/verificar/",
        dni: "48754156",
        button: "#searchDNI",
        txtDNI: "#txtDNI",
        txtName: '#txtName',
        txtLastName: '#txtLastName',
        txtAddress: '#txtAddress',
        currentValue: null
      };
      catchDom = function() {
        dom.button = $(st.button);
        dom.txtDNI = $(st.txtDNI);
        dom.txtName = $(st.txtName);
        dom.txtLastName = $(st.txtLastName);
        dom.txtAddress = $(st.txtAddress);
      };
      suscribeEvents = function() {
        dom.button.on('click', events.eSearchDNI);
        dom.txtDNI.on('change', events.eCleanForm);
        dom.txtDNI.on('keyup', events.eCleanForm);
      };
      events = {
        eSearchDNI: function(e) {
          var dni;
          dni = $(this).val();
          if (dni === "") {
            $(this).val(st.dni);
            dni = st.dni;
          }
          st.currentValue = dni;
          $.ajax({
            url: "" + st.url + dni,
            crossDomain: true,
            type: "GET",
            dataType: "json"
          }).done(function(data) {
            var obj;
            obj = data[0];
            dom.txtName.val(obj.nombre_completo);
            dom.txtLastName.val(obj.nombre_completo);
            dom.txtAddress.val(obj.direccion);
          }).always(function(data) {
            dom.button.removeAttr('disabled');
            dom.button.removeAttr('data-loading');
          });
        },
        eCleanForm: function(e) {
          if ($(this).val() !== st.currentValue) {
            dom.txtName.val('');
            dom.txtLastName.val('');
            dom.txtAddress.val('');
          }
        }
      };
      init = function() {
        catchDom();
        suscribeEvents();
      };
      init();
    };
    fnLoadingButtons();
    fnRangeCalendar();
    fnGetSchedule();
    fnActiveCalendar();
    fnInitTable();
    fnSearchDNI();
  })();

}).call(this);
