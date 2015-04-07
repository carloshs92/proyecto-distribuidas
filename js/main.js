(function() {
  (function() {
    var fnActiveCalendar, fnAddHeavyMachinery, fnGetHeavyMachinery, fnGetSchedule, fnInitTable, fnLoadingButtons, fnRangeCalendar, fnSearchDNI, fnSearchRUC, fnValidate;
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
          dateFormat: 'dd/mm/yy',
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
          dateFormat: 'dd/mm/yy',
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
          dni = dom.txtDNI.val();
          if (dni === "") {
            dom.txtDNI.val(st.dni);
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
            if (data.length > 0) {
              obj = data[0];
              dom.txtName.val(obj.nombre_completo);
              dom.txtLastName.val(obj.nombre_completo);
              dom.txtAddress.val(obj.direccion);
            } else {
              alert('DNI no encontrado');
            }
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
    fnSearchRUC = function() {
      var catchDom, dom, events, init, st, suscribeEvents;
      dom = {};
      st = {
        url: "http://marti1125.webfactional.com/sunat/index.php/verificar/",
        ruc: "20546462324",
        button: "#searchRUC",
        txtRUC: "#txtRUC",
        txtCompanyName: '#txtCompanyName',
        txtCompanyAddress: '#txtCompanyAddress',
        currentValue: null
      };
      catchDom = function() {
        dom.button = $(st.button);
        dom.txtRUC = $(st.txtRUC);
        dom.txtCompanyName = $(st.txtCompanyName);
        dom.txtCompanyAddress = $(st.txtCompanyAddress);
      };
      suscribeEvents = function() {
        dom.button.on('click', events.eSearchRUC);
        dom.txtRUC.on('change', events.eCleanForm);
        dom.txtRUC.on('keyup', events.eCleanForm);
      };
      events = {
        eSearchRUC: function(e) {
          var ruc;
          ruc = dom.txtRUC.val();
          if (ruc === "") {
            dom.txtRUC.val(st.ruc);
            ruc = st.ruc;
          }
          st.currentValue = ruc;
          $.ajax({
            url: "" + st.url + ruc,
            crossDomain: true,
            type: "GET",
            dataType: "json"
          }).done(function(data) {
            var obj;
            if (data.length > 0) {
              obj = data[0];
              dom.txtCompanyName.val(obj.nombre);
              dom.txtCompanyAddress.val(obj.direccion);
            } else {
              alert('RUC no encontrado');
            }
          }).always(function(data) {
            dom.button.removeAttr('disabled');
            dom.button.removeAttr('data-loading');
          });
        },
        eCleanForm: function(e) {
          if ($(this).val() !== st.currentValue) {
            dom.txtCompanyName.val('');
            dom.txtCompanyAddress.val('');
          }
        }
      };
      init = function() {
        catchDom();
        suscribeEvents();
      };
      init();
    };
    fnValidate = function() {
      var afterCatchDom, catchDom, dom, init, st;
      dom = {};
      st = {
        form: '#form_register'
      };
      catchDom = function() {
        dom.form = $(st.form);
      };
      afterCatchDom = function() {
        dom.form.validate({
          rules: {
            txtDNI: {
              minlength: 8,
              number: true,
              required: true
            },
            txtRUC: {
              minlength: 11,
              number: true,
              required: true
            }
          }
        });
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnGetHeavyMachinery = function() {
      var afterCatchDom, catchDom, dom, events, init, st, suscribeEvents;
      dom = {};
      st = {
        btnAdd: '#btnAddMachinery',
        urlMachinaries: 'http://willyaguirre.me/RestMaquinaria/api/Maquinaria/codigomaquinaria',
        urlPrices: 'http://willyaguirre.me/RestMaquinaria/api/Maquinaria/obtenerprecio/',
        select: '#heavyMachinery',
        currentPrice: '#txtCurrentPrice'
      };
      catchDom = function() {
        dom.select = $(st.select);
        dom.currentPrice = $(st.currentPrice);
        dom.btnAdd = $(st.btnAdd);
      };
      suscribeEvents = function() {
        dom.select.on('change', events.getPrice);
      };
      afterCatchDom = function() {
        $.ajax({
          url: "" + st.urlMachinaries,
          crossDomain: true,
          type: "GET",
          dataType: "json"
        }).done(function(data) {
          var options;
          options = "<option value=''>--------- Seleccione ---------</option>";
          if (data.length > 0) {
            $.each(data, function(index, value) {
              options += "<option value='" + value.codigo + "'>" + value.nombreMaquinaria + "</option>";
            });
            dom.select.html(options);
            suscribeEvents();
          } else {
            alert('No hay maquinarias');
          }
        }).always(function(data) {}).fail(function(jqXHR, textStatus, errorThrown) {
          afterCatchDom();
        });
      };
      events = {
        getPrice: function(e) {
          var codigo;
          dom.currentPrice.val("");
          dom.currentPrice.data("perhour", "");
          dom.btnAdd.attr('disabled', 'disabled');
          dom.btnAdd.attr('data-loading', '');
          codigo = dom.select.val();
          $.ajax({
            url: "" + st.urlPrices + codigo,
            crossDomain: true,
            type: "GET",
            dataType: "json"
          }).done(function(data) {
            dom.currentPrice.val("S/. " + data.precio);
            dom.currentPrice.data("perhour", data.precio);
          }).always(function(data) {
            dom.btnAdd.removeAttr('disabled');
            dom.btnAdd.removeAttr('data-loading');
          }).fail(function(jqXHR, textStatus, errorThrown) {});
        }
      };
      init = function() {
        catchDom();
        afterCatchDom();
      };
      init();
    };
    fnAddHeavyMachinery = function() {
      var catchDom, dom, events, functions, init, st, suscribeEvents;
      dom = {};
      st = {
        btnAdd: '#btnAddMachinery',
        selMachinery: '#heavyMachinery',
        txtPrice: '#txtCurrentPrice',
        toDate: '#toDate',
        fromDate: '#fromDate',
        container: '.heavyMachineryItems',
        items: '.heavyMachinerySelected'
      };
      catchDom = function() {
        dom.btnAdd = $(st.btnAdd);
        dom.selMachinery = $(st.selMachinery);
        dom.txtPrice = $(st.txtPrice);
        dom.toDate = $(st.toDate);
        dom.fromDate = $(st.fromDate);
        dom.container = $(st.container);
      };
      suscribeEvents = function() {
        dom.btnAdd.on('click', events.eAddMachinery);
      };
      events = {
        eAddMachinery: function(e) {
          e.preventDefault();
          if (functions.isValid()) {
            functions.drawItem();
            functions.cleanForm();
          } else {
            alert('Ingrese los datos de la maquinaria correctamente');
          }
          setTimeout(function() {
            dom.btnAdd.removeAttr('disabled');
            dom.btnAdd.removeAttr('data-loading');
          }, 50);
        }
      };
      functions = {
        drawItem: function() {
          var html;
          html = "<div class='heavyMachinerySelected'><div data-machinery='" + (dom.selMachinery.val()) + "' class='heavyMachineryName'>" + (dom.selMachinery.find('option:selected').html()) + "</div><div class='heavyMachineryDate'>" + (dom.toDate.val()) + " - " + (dom.fromDate.val()) + "</div><div class='heavyMachineryDelete'>X</div></div>";
          dom.container.append(html);
        },
        cleanForm: function() {
          dom.txtPrice.val('');
          dom.toDate.val('');
          dom.fromDate.val('');
          dom.selMachinery.val('');
        },
        isValid: function() {
          var machinery, result;
          result = true;
          machinery = dom.selMachinery.val();
          if (dom.selMachinery.val() === '') {
            result = false;
          }
          $(st.items).each(function(index, element) {
            if (dom.selMachinery.find('option:selected').html() === $(element).find('.heavyMachineryName').html()) {
              result = false;
            }
          });
          return result;
        }
      };
      init = function() {
        catchDom();
        suscribeEvents();
      };
      init();
    };
    fnAddHeavyMachinery();
    fnLoadingButtons();
    fnRangeCalendar();
    fnGetSchedule();
    fnGetHeavyMachinery();
    fnActiveCalendar();
    fnInitTable();
    fnSearchDNI();
    fnSearchRUC();
    fnValidate();
  })();

}).call(this);
