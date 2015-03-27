(function() {
  (function() {
    var fnActiveCalendar, fnGetSchedule, fnLoadingButtons, fnRangeCalendar;
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
        dom.buttons.ladda('bind', {
          timeout: 2000
        });
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnLoadingButtons();
    fnRangeCalendar();
    fnGetSchedule();
    fnActiveCalendar();
  })();

}).call(this);
