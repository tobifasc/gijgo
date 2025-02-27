﻿/* global window alert jQuery gj */
/**
  * @widget DatePicker
  * @plugin Base
  */
gj.datepicker = {
    plugins: {}
};

gj.datepicker.config = {
    base: {
        /** Whether to display dates in other months at the start or end of the current month.
         * @additionalinfo Set to true by default for Bootstrap.
         * @type Boolean
         * @default false
         * @example JS.True <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        showOtherMonths: true
         *    });
         * </script>
         * @example jQuery.True <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        showOtherMonths: true
         *    });
         * </script>
         * @example False <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     $('#datepicker').datepicker({
         *         showOtherMonths: false
         *     });
         * </script>
         */
        showOtherMonths: false,

        /** Whether days in other months shown before or after the current month are selectable.
         * This only applies if the showOtherMonths option is set to true.
         * @type Boolean
         * @default true
         * @example JS.True <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        showOtherMonths: true,
         *        selectOtherMonths: true
         *    });
         * </script>
         * @example jQuery.True <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        showOtherMonths: true,
         *        selectOtherMonths: true
         *    });
         * </script>
         * @example JS.False <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), {
         *        showOtherMonths: true,
         *        selectOtherMonths: false
         *     });
         * </script>
         */
        selectOtherMonths: true,

        /** The width of the datepicker.
         * @type number
         * @default undefined
         * @example JS.Config <!-- nojquery, datepicker -->
         * <input id="datepicker" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { width: 312 });
         * </script>
         * @example HTML.Config <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker();
         * </script>
         */
        width: undefined,

        /** The minimum selectable date. When not set, there is no minimum.
         * @additionalinfo If the minDate is set by string, then the date in the string needs to follow the format specified by the 'format' configuration option.
         * @type Date|String|Function
         * @default undefined
         * @example JS.Today <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        minDate: today
         *    });
         * </script>
         * @example jQuery.Yesterday <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     $('#datepicker').datepicker({
         *        minDate: function() {
         *            var date = new Date();
         *            date.setDate(date.getDate()-1);
         *            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
         *        }
         *     });
         * </script>
         * @example Bootstrap <!-- nojquery, bootstrap, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), {
         *        format: 'yyyy-mm-dd',
         *        value: '2019-01-15',
         *        minDate: '2019-01-12',
         *        uiLibrary: 'bootstrap'
         *     });
         * </script>
         * @example Bootstrap.4 <!-- nojquery, bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), {
         *        value: '02/15/2019',
         *        minDate: '02/12/2019',
         *        uiLibrary: 'bootstrap4'
         *     });
         * </script>
         */
        minDate: undefined,

        /** The maximum selectable date. When not set, there is no maximum
         * @type Date|String|Function
         * @default undefined
         * @example JS.Today <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        maxDate: today
         *    });
         * </script>
         * @example jQuery.Tomorrow <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *     $('#datepicker').datepicker({ 
         *        maxDate: function() {
         *            var date = new Date();
         *            date.setDate(date.getDate()+1);
         *            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
         *        }
         *     });
         * </script>
         */
        maxDate: undefined,

        /** Specifies the format, which is used to format the value of the DatePicker displayed in the input.
         * @additionalinfo <b>d</b> - Day of the month as digits; no leading zero for single-digit days.<br/>
         * <b>dd</b> - Day of the month as digits; leading zero for single-digit days.<br/>
         * <b>ddd</b> - Day of the week as a three-letter abbreviation.<br/>
         * <b>dddd</b> - Day of the week as its full name.<br/>
         * <b>m</b> - Month as digits; no leading zero for single-digit months.<br/>
         * <b>mm</b> - Month as digits; leading zero for single-digit months.<br/>
         * <b>mmm</b> - Month as a three-letter abbreviation.<br/>
         * <b>mmmm</b> - Month as its full name.<br/>
         * <b>yy</b> - Year as last two digits; leading zero for years less than 10.<br/>
         * <b>yyyy</b> - Year represented by four digits.<br/>
         * @type String
         * @default 'mm/dd/yyyy'
         * @example Sample <!-- nojquery, datepicker -->
         * <input id="datepicker" value="2017-25-07" width="312" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), { format: 'yyyy-dd-mm' });
         * </script>
         * @example Short.Month.Format <!-- nojquery, datepicker -->
         * <input id="datepicker" value="10 Oct 2017" width="312" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), { format: 'dd mmm yyyy' });
         * </script>
         * @example Long.Month.Format <!-- nojquery, datepicker -->
         * <input id="datepicker" value="10 October 2017" width="312" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), { format: 'dd mmmm yyyy' });
         * </script>
         */
        format: 'mm/dd/yyyy',

        /** The name of the UI library that is going to be in use.
         * @additionalinfo The css file for bootstrap should be manually included if you use bootstrap.
         * @type (materialdesign|bootstrap|bootstrap4)
         * @default materialdesign
         * @example MaterialDesign <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { uiLibrary: 'materialdesign' });
         * </script>
         * @example Bootstrap.3 <!-- nojquery, bootstrap, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), { uiLibrary: 'bootstrap' });
         * </script>
         * @example Bootstrap.4.Material.Icons <!-- nojquery, bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), { uiLibrary: 'bootstrap4', iconsLibrary: 'materialicons' });
         * </script>
         * @example Bootstrap.4.FontAwesome <!-- nojquery, fontawesome, bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), { uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome' });
         * </script>
         */
        uiLibrary: 'materialdesign',

        /** The name of the icons library that is going to be in use. Currently we support Material Icons, Font Awesome and Glyphicons.
         * @additionalinfo If you use Bootstrap 3 as uiLibrary, then the iconsLibrary is set to Glyphicons by default.<br/>
         * If you use Material Design as uiLibrary, then the iconsLibrary is set to Material Icons by default.<br/>
         * The css files for Material Icons, Font Awesome or Glyphicons should be manually included to the page where the grid is in use.
         * @type (materialicons|fontawesome|glyphicons)
         * @default 'materialicons'
         * @example Bootstrap.Font.Awesome <!-- nojquery, bootstrap, fontawesome, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), {
         *         uiLibrary: 'bootstrap',
         *         iconsLibrary: 'fontawesome'
         *     });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- nojquery, bootstrap4, fontawesome, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'), {
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome'
         *     });
         * </script>
         */
        iconsLibrary: 'materialicons',

        /** The initial datepicker value.
         * @type String
         * @default undefined
         * @example Javascript <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        value: '01/01/2019'
         *    });
         * </script>
         * @example HTML <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" value="01/01/2019" />
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker'));
         * </script>
         */
        value: undefined,

        /** Day of the week start. 0 (Sunday) to 6 (Saturday)
         * @type Number
         * @default 0
         * @example Monday <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        weekStartDay: 1
         *    });
         * </script>
         * @example Saturday <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        weekStartDay: 6
         *    });
         * </script>
         */
        weekStartDay: 0,

        /** An array or function that will be used to determine which dates to be disabled for selection by the widget.
         * @type Array|Function
         * @default undefined
         * @example Array <!-- datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({
         *        value: '11/10/2019',
         *        disableDates: [new Date(2019,10,11), '11/12/2019']
         *    });
         * </script>
         * @example Function <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        value: '11/11/2019',
         *        disableDates:  function (date) {
         *            var disabled = [10,15,20,25];
         *            if (disabled.indexOf(date.getDate()) == -1 ) {
         *                return true;
         *            } else {
         *                return false;
         *            }
         *        }
         *    });
         * </script>
         */
        disableDates: undefined,

        /** An array that will be used to determine which days of week to be disabled for selection by the widget.
         * The array needs to contains only numbers where 0 is Sunday, 1 is Monday and etc.
         * @type Array
         * @default undefined
         * @example Saturday.Sunday <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        disableDaysOfWeek: [0, 6]
         *    });
         * </script>
         */
        disableDaysOfWeek: undefined,

        /** Whether to display week number in year on the left side of the calendar.
         * @type Boolean
         * @default false
         * @example Material.Design <!-- nojquery, datepicker -->
         * <input id="datepicker" width="356" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        calendarWeeks: true,
         *        modal: true,
         *        footer: true
         *    });
         * </script>
         * @example Bootstrap <!-- nojquery, datepicker, bootstrap -->
         * <input id="datepicker" width="234" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { calendarWeeks: true, uiLibrary: 'bootstrap' });
         * </script>
         * @example Bootstrap.4 <!-- nojquery, bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { calendarWeeks: true, uiLibrary: 'bootstrap4' });
         * </script>
         */
        calendarWeeks: false,

        /** Whether to enable keyboard navigation.
         * @type Boolean
         * @default true
         * @example Material.Design <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        keyboardNavigation: true
         *    });
         * </script>
         * @example Material.Design.Modal <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { keyboardNavigation: true, modal: true, header: true, footer: true });
         * </script>
         * @example Bootstrap.4 <!-- nojquery, bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        uiLibrary: 'bootstrap4',
         *        keyboardNavigation: true,
         *        showOtherMonths: true
         *    });
         * </script>
         */
        keyboardNavigation: true,

        /** The language that needs to be in use.
         * @type string
         * @default 'en-us'
         * @example German <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'de-de',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Bulgarian <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'bg-bg',
         *        format: 'dd mmm yyyy',
         *        weekStartDay: 1
         *    });
         * </script>
         * @example French <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'fr-fr',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Brazil <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'pt-br',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Russian <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'ru-ru',
         *        format: 'dd mmm yyyy'
         *    });
         * </script>
         * @example Spanish <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'es-es',
         *        format: 'dd/mm/yyyy'
         *    });
         * </script>
         * @example Italian <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'it-it',
         *        format: 'dd/mm/yyyy'
         *    });
         * </script>
         * @example Japanise <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'ja-jp',
         *        format: 'dd mmmm yyyy'
         *    });
         * </script>
         * @example Chinise_Simplified <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'zh-cn',
         *        format: 'dd mmmm yyyy'
         *    });
         * </script>
         * @example Chinise_Traditional <!-- nojquery, datepicker -->
         * <input id="datepicker" width="276" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        locale: 'zh-tw',
         *        format: 'dd mmmm yyyy'
         *    });
         * </script>
         */
        locale: 'en-us',

        icons: {
            /** datepicker icon definition.
             * @alias icons.rightIcon
             * @type String
             * @default '<i class="gj-icon event" />'
             * @example Custom.Material.Icon <!-- materialicons, datepicker -->
             * <input id="datepicker" width="312" />
             * <script>
             *     new GijgoDatePicker(document.getElementById('datepicker'), {
             *         icons: { 
             *             rightIcon: '<i class="material-icons">date_range</i>'
             *         }
             *     });
             * </script>
             * @example Custom.Glyphicon.Icon <!-- bootstrap, datepicker -->
             * <input id="datepicker" width="220" />
             * <script>
             *     new GijgoDatePicker(document.getElementById('datepicker'), {
             *         uiLibrary: 'bootstrap',
             *         icons: {
             *             rightIcon: '<span class="glyphicon glyphicon-chevron-down"></span>'
             *         }
             *     });
             * </script>
             * @example Bootstrap.4 <!-- bootstrap4, materialicons, datepicker -->
             * <input id="datepicker" width="234" />
             * <script>
             *     new GijgoDatePicker(document.getElementById('datepicker'), {
             *         uiLibrary: 'bootstrap4',
             *         icons: {
             *             rightIcon: '<i class="material-icons">date_range</i>'
             *         }
             *     });
             * </script>
             */
            rightIcon: '<i class="gj-icon">event</i>',

            previousMonth: '<i class="gj-icon chevron-left"></i>',
            nextMonth: '<i class="gj-icon chevron-right"></i>'
        },

        fontSize: undefined,

        /** The size of the datepicker input.
         * @type 'small'|'default'|'large'
         * @default 'default'
         * @example Bootstrap.4 <!-- nojquery, bootstrap4, datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="234" value="03/20/2019" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="234" value="03/20/2019" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="234" value="03/20/2019" /></p>
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker-small'), { uiLibrary: 'bootstrap4', size: 'small' });
         *     new GijgoDatePicker(document.getElementById('datepicker-default'), { uiLibrary: 'bootstrap4', size: 'default' });
         *     new GijgoDatePicker(document.getElementById('datepicker-large'), { uiLibrary: 'bootstrap4', size: 'large' });
         * </script>
         * @example Bootstrap.4.Font.Awesome <!-- nojquery, bootstrap4, fontawesome, datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="234" value="03/20/2019" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="234" value="03/20/2019" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="234" value="03/20/2019" /></p>
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker-small'), { uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'small' });
         *     new GijgoDatePicker(document.getElementById('datepicker-default'), { uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'default' });
         *     new GijgoDatePicker(document.getElementById('datepicker-large'), { uiLibrary: 'bootstrap4', iconsLibrary: 'fontawesome', size: 'large' });
         * </script>
         * @example Bootstrap.3 <!-- nojquery, bootstrap, datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="220" value="03/20/2019" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="220" value="03/20/2019" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="220" value="03/20/2019" /></p>
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker-small'), { uiLibrary: 'bootstrap', size: 'small' });
         *     new GijgoDatePicker(document.getElementById('datepicker-default'), { uiLibrary: 'bootstrap', size: 'default' });
         *     new GijgoDatePicker(document.getElementById('datepicker-large'), { uiLibrary: 'bootstrap', size: 'large' });
         * </script>
         * @example Material.Design <!-- nojquery, datepicker -->
         * <p><label for="datepicker-small">Small Size:</label> <input id="datepicker-small" width="276" value="03/20/2019" /></p>
         * <p><label for="datepicker-default">Default Size:</label> <input id="datepicker-default" width="276" value="03/20/2019" /></p>
         * <p><label for="datepicker-large">Large Size:</label> <input id="datepicker-large" width="276" value="03/20/2019" /></p>
         * <script>
         *     new GijgoDatePicker(document.getElementById('datepicker-small'), { size: 'small' });
         *     new GijgoDatePicker(document.getElementById('datepicker-default'), { size: 'default' });
         *     new GijgoDatePicker(document.getElementById('datepicker-large'), { size: 'large' });
         * </script>
         */
        size: 'default',

        /** If set to true, the datepicker will have modal behavior.
         * @type Boolean
         * @default false
         * @example Material.Design <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { modal: true });
         * </script>
         * @example Bootstrap <!-- nojquery, bootstrap, datepicker -->
         * <input id="datepicker" width="220" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        uiLibrary: 'bootstrap',
         *        modal: true,
         *        header: true,
         *        footer: true
         *    });
         * </script>
         * @example Bootstrap.4 <!-- nojquery, bootstrap4, datepicker -->
         * <input id="datepicker" width="234" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), {
         *        uiLibrary: 'bootstrap4',
         *        modal: true,
         *        header: true,
         *        footer: true
         *    });
         * </script>
         */
        modal: false,

        /** If set to true, add header to the datepicker.
         * @type Boolean
         * @default false
         * @example True <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { header: true, modal: true, footer: true });
         * </script>
         * @example False <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ header: false });
         * </script>
         */
        header: false,

        /** If set to true, add footer with ok and cancel buttons to the datepicker.
         * @type Boolean
         * @default false
         * @example True <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { footer: true, modal: true, header: true });
         * </script>
         * @example False <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    $('#datepicker').datepicker({ footer: false });
         * </script>
         */
        footer: false,

        /** If set to true, show datepicker on input focus.
         * @type Boolean
         * @default true
         * @example True <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { showOnFocus: true, showRightIcon: false });
         * </script>
         * @example False <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { showOnFocus: false });
         * </script>
         */
        showOnFocus: true,

        /** If set to true, show datepicker icon on the right side of the input.
         * @type Boolean
         * @default true
         * @example False <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { showOnFocus: true, showRightIcon: false });
         * </script>
         * @example True <!-- nojquery, datepicker -->
         * <input id="datepicker" width="312" />
         * <script>
         *    new GijgoDatePicker(document.getElementById('datepicker'), { showRightIcon: true });
         * </script>
         */
        showRightIcon: true,

        style: {
            modal: 'gj-modal',
            wrapper: 'gj-datepicker gj-datepicker-md gj-unselectable',
            input: 'gj-textbox-md',
            calendar: 'gj-picker gj-picker-md datepicker gj-unselectable',
            footer: '',
            button: 'gj-button-md'
        }
    },

    bootstrap: {
        style: {
            wrapper: 'gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group',
            input: 'form-control',
            calendar: 'gj-picker gj-picker-bootstrap datepicker gj-unselectable',
            footer: 'modal-footer',
            button: 'btn btn-default'
        },
        iconsLibrary: 'glyphicons',
        showOtherMonths: true
    },

    bootstrap4: {
        style: {
            wrapper: 'gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group',
            input: 'form-control',
            calendar: 'gj-picker gj-picker-bootstrap datepicker gj-unselectable',
            footer: 'modal-footer',
            button: 'btn btn-default'
        },
        showOtherMonths: true
    },

    fontawesome: {
        icons: {
            rightIcon: '<i class="fa fa-calendar" aria-hidden="true"></i>',
            previousMonth: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            nextMonth: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        }
    },

    glyphicons: {
        icons: {
            rightIcon: '<span class="glyphicon glyphicon-calendar"></span>',
            previousMonth: '<span class="glyphicon glyphicon-chevron-left"></span>',
            nextMonth: '<span class="glyphicon glyphicon-chevron-right"></span>'
        }
    }
};

gj.datepicker.methods = {
    init: function (jsConfig) {
        gj.widget.prototype.initJS.call(this, jsConfig, 'datepicker');
        this.element.setAttribute('data-datepicker', 'true');
        gj.datepicker.methods.initialize(this, gijgoStorage.get(this.element, 'gijgo'));
        return this;
    },

    initialize: function (picker, data) {
        var wrapper, rightIcon, calendar;

        if (picker.element.parentElement.attributes.role !== 'wrapper') {
            wrapper = document.createElement('div');
            wrapper.setAttribute('role', 'wrapper');
            picker.element.parentNode.insertBefore(wrapper, picker.element);
            wrapper.appendChild(picker.element);
        } else {
            wrapper = picker.element.parentElement;
        }

        gj.core.addClasses(wrapper, data.style.wrapper);

        if (data.width) {
            wrapper.style.width = data.width + 'px';
        }

        picker.element.value = data.value || '';
        gj.core.addClasses(picker.element, data.style.input);
        wrapper.setAttribute('role', 'input');

        if (data.fontSize) {
            picker.element.style.fontSize = data.fontSize;
        }
        
        if (data.uiLibrary === 'bootstrap' || data.uiLibrary === 'bootstrap4') {
            if (data.size === 'small') {
                wrapper.classList.add('input-group-sm');
                picker.element.classList.add('form-control-sm');
            } else if (data.size === 'large') {
                wrapper.classList.add('input-group-lg');
                picker.element.classList.add('form-control-lg');
            }
        } else {
            if (data.size === 'small') {
                wrapper.classList.add('small');
            } else if (data.size === 'large') {
                wrapper.classList.add('large');
            }
        }

        if (data.showRightIcon) {
            if (data.uiLibrary === 'bootstrap') {
                rightIcon = document.createElement('span');
                rightIcon.classList.add('input-group-addon');
                rightIcon.innerHTML = data.icons.rightIcon;
            } else if (data.uiLibrary === 'bootstrap4') {
                rightIcon = document.createElement('span');
                rightIcon.classList.add('input-group-append');
                rightIcon.innerHTML = '<button class="btn btn-outline-secondary border-left-0" type="button">' + data.icons.rightIcon + '</button>';                
            } else {
                rightIcon = gj.core.createElement(data.icons.rightIcon);
            }
            rightIcon.setAttribute('role', 'right-icon');
            rightIcon.addEventListener('click', function (e) {
                var calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');
                if (window.getComputedStyle(calendar).display === 'none') {
                    gj.datepicker.methods.open(picker, data);
                } else {
                    gj.datepicker.methods.close(picker);
                }
            });
            wrapper.appendChild(rightIcon);
        }

        if (data.showOnFocus) {
            picker.element.addEventListener('focus', function () {
                gj.datepicker.methods.open(picker, data);
            });
        }

        calendar = gj.datepicker.methods.createCalendar(picker, data);

        if (data.footer !== true) {
            picker.element.addEventListener('blur', function () {
                picker.timeout = setTimeout(function () {
                    gj.datepicker.methods.close(picker);
                }, 500);
            });
            calendar.addEventListener('mousedown', function () {
                clearTimeout(picker.timeout);
                document.activeElement !== picker.element && picker.element.focus();
                return false;
            });
            calendar.addEventListener('click', function () {
                clearTimeout(picker.timeout);
                //document.activeElement !== picker.element && picker.element.focus(); //breaks datetimepicker
            });
        }

        if (data.keyboardNavigation) {
            document.addEventListener('keydown', gj.datepicker.methods.createKeyDownHandler(picker, calendar, data));
        }
    },

    createCalendar: function (picker, data) {
        var date, body, footer, btnCancel, btnOk, calendar, wrapper;

        calendar = document.createElement('div');
        calendar.setAttribute('role', 'picker');
        calendar.setAttribute('type', 'month');
        gj.core.addClasses(calendar, data.style.calendar);
        calendar.setAttribute('guid', picker.element.getAttribute('data-guid'));
        
        if (data.fontSize) {
            calendar.style.fontSize = data.fontSize;
        }

        date = gj.core.parseDate(data.value, data.format, data.locale);
        if (!date || isNaN(date.getTime())) {
            date = new Date();
        } else {
            picker.element.setAttribute('day', date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
        }

        calendar.setAttribute('month', date.getMonth());
        calendar.setAttribute('year', date.getFullYear());

        gj.datepicker.methods.renderHeader(picker, calendar, data, date);

        body = document.createElement('div');
        body.setAttribute('role', 'body');
        calendar.appendChild(body);

        if (data.footer) {
            footer = document.createElement('div');
            footer.setAttribute('role', 'footer');
            gj.core.addClasses(footer, data.style.footer);

            btnCancel = gj.core.createElement('<button class="' + data.style.button + '">' + gj.core.messages[data.locale].cancel + '</button>');
            btnCancel.addEventListener('click', function () { picker.close(); });
            footer.appendChild(btnCancel);

            btnOk = gj.core.createElement('<button class="' + data.style.button + '">' + gj.core.messages[data.locale].ok + '</button>');
            btnOk.addEventListener('click', function () {
                var date, dayArr, dayStr = calendar.getAttribute('selectedDay');
                if (dayStr) {
                    dayArr = dayStr.split('-');
                    date = new Date(dayArr[0], dayArr[1], dayArr[2], calendar.getAttribute('hour') || 0, calendar.getAttribute('minute') || 0);
                    gj.datepicker.methods.change(picker, calendar, data, date);
                } else {
                    picker.close();
                }
            });
            footer.appendChild(btnOk);

            calendar.appendChild(footer);
        }

        calendar.style.display = 'none';
        document.body.appendChild(calendar);

        if (data.modal) {
            wrapper = document.createElement('div');
            wrapper.setAttribute('role', 'modal');
            gj.core.addClasses(wrapper, data.style.modal);
            calendar.parentNode.insertBefore(wrapper, calendar);
            wrapper.appendChild(calendar);
            gj.core.center(calendar);
        }

        return calendar;
    },

    renderHeader: function (picker, calendar, data, date) {
        var header, dateEl, yearEl;

        if (data.header) {
            header = document.createElement('div');
            header.setAttribute('role', 'header');

            yearEl = document.createElement('div');
            yearEl.setAttribute('role', 'year');

            yearEl.addEventListener('click', function () {
                gj.datepicker.methods.renderDecade(picker, calendar, data);
                yearEl.classList.add('selected');
                dateEl.classList.remove('selected');
            });
            yearEl.innerHTML = gj.core.formatDate(date, 'yyyy', data.locale);
            header.appendChild(yearEl);

            dateEl = document.createElement('div');
            dateEl.setAttribute('role', 'date');
            dateEl.classList.add('selected');
            dateEl.addEventListener('click', function () {
                gj.datepicker.methods.renderMonth(picker, calendar, data);
                dateEl.classList.add('selected');
                yearEl.classList.remove('selected');
            });
            dateEl.innerHTML = gj.core.formatDate(date, 'ddd, mmm dd', data.locale);
            header.appendChild(dateEl);
            calendar.appendChild(header);
        }
    },

    updateHeader: function (calendar, data, date) {
        var yearEl, dateEl, hour, minute,
            header = calendar.querySelector('[role="header"]');

        if (header) {
            yearEl = header.querySelector('[role="year"]');
            if (yearEl) {
                yearEl.classList.remove('selected');
                yearEl.innerHTML = gj.core.formatDate(date, 'yyyy', data.locale);
            }

            dateEl = header.querySelector('[role="date"]');
            dateEl.classList.add('selected');
            dateEl.innerHTML = gj.core.formatDate(date, 'ddd, mmm dd', data.locale);

            // update hours and minutes for datetimepickers
            hour = header.querySelector('[role="hour"]');
            if (hour) {
                hour.classList.remove('selected');
                hour.innerHTML = gj.core.formatDate(date, 'HH', data.locale);
            }

            minute = header.querySelector('[role="minute"]');
            if (minute) {
                minute.classList.remove('selected');
                minute.innerHTML = gj.core.formatDate(date, 'MM', data.locale);
            }
        }
    },

    createNavigation: function (picker, body, table, data) {
        var navigator, row, prevIcon, period, nextIcon, th, thead = document.createElement('thead');

        navigator = document.createElement('div');
        navigator.setAttribute('role', 'navigator');

        prevIcon = document.createElement('div');
        prevIcon.innerHTML = data.icons.previousMonth;
        prevIcon.addEventListener('click', gj.datepicker.methods.prev(picker, data));
        navigator.appendChild(prevIcon);

        period = document.createElement('div');
        period.setAttribute('role', 'period');
        period.addEventListener('click', gj.datepicker.methods.changePeriod(picker, data));
        navigator.appendChild(period);

        nextIcon = document.createElement('div');
        nextIcon.innerHTML = data.icons.nextMonth;
        nextIcon.addEventListener('click', gj.datepicker.methods.next(picker, data));
        navigator.appendChild(nextIcon);

        body.append(navigator);

        row = document.createElement('tr');
        row.setAttribute('role', 'week-days');
        
        if (data.calendarWeeks) {
            th = document.createElement('th');
            th.innerHTML = '<div>&nbsp;</div>';
            row.appendChild(th);
        }
        for (i = data.weekStartDay; i < gj.core.messages[data.locale].weekDaysMin.length; i++) {
            th = document.createElement('th');
            th.innerHTML = '<div>' + gj.core.messages[data.locale].weekDaysMin[i] + '</div>';
            row.appendChild(th);
        }
        for (i = 0; i < data.weekStartDay; i++) {
            th = document.createElement('th');
            th.innerHTML = '<div>' + gj.core.messages[data.locale].weekDaysMin[i] + '</div>';
            row.appendChild(th);
        }
        thead.appendChild(row);

        table.appendChild(thead);
    },

    getDaysInMonth: function (year) {
        var result = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        if (year % 4 == 0 && year != 1900) {
            result[1] = 29;
        }
        return result;
    },

    renderMonth: function (picker, calendar, data) {
        var weekDay, selectedDay, day, month, year, total, daysInMonth, firstDayPosition, i, now, prevMonth, nextMonth, cell, dayEl, date,
            body = calendar.querySelector('[role="body"]'),
            table = document.createElement('table'),
            tbody = document.createElement('tbody'),
            period = gj.core.messages[data.locale].titleFormat;
        
        body.innerHTML = '';
        gj.datepicker.methods.createNavigation(picker, body, table, data);
        
        month = parseInt(calendar.getAttribute('month'), 10);
        year = parseInt(calendar.getAttribute('year'), 10);

        calendar.setAttribute('type', 'month');
        period = period.replace('mmmm', gj.core.messages[data.locale].monthNames[month]).replace('yyyy', year);
        calendar.querySelector('div[role="period"]').innerText = period;
        daysInMonth = gj.datepicker.methods.getDaysInMonth(year);
        total = daysInMonth[month];

        firstDayPosition = (new Date(year, month, 1).getDay() + 7 - data.weekStartDay) % 7;

        weekDay = 0;
        row = document.createElement('tr');
        prevMonth = gj.datepicker.methods.getPrevMonth(month, year);
        for (i = 1; i <= firstDayPosition; i++) {
            day = (daysInMonth[prevMonth.month] - firstDayPosition + i);
            date = new Date(prevMonth.year, prevMonth.month, day);
            if (data.calendarWeeks && i === 1) {
                cell = document.createElement('td');
                cell.classList.add('calendar-week');
                cell.innerHTML = '<div>' + gj.datepicker.methods.getWeekNumber(date) + '</div>';
                row.appendChild(cell);
            }
            cell = document.createElement('td');
            cell.classList.add('other-month');
            if (data.showOtherMonths) {
                dayEl = document.createElement('div');
                dayEl.innerHTML = day;
                cell.appendChild(dayEl);
                if (data.selectOtherMonths && gj.datepicker.methods.isSelectable(data, date)) {
                    cell.classList.add('gj-cursor-pointer');
                    cell.setAttribute('day', day);
                    cell.setAttribute('month', prevMonth.month);
                    cell.setAttribute('year', prevMonth.year);
                    dayEl.addEventListener('click', gj.datepicker.methods.dayClickHandler(picker, calendar, data, date));
                    dayEl.addEventListener('mousedown', function (e) { e.stopPropagation(); });
                } else {
                    cell.classList.add('disabled');
                }
            }
            row.appendChild(cell);
            weekDay++;
        }
        if (i > 1) {
            tbody.appendChild(row);
        }

        now = new Date();
        for (i = 1; i <= total; i++) {
            date = new Date(year, month, i);
            if (weekDay == 0) {
                row = document.createElement('tr');
                if (data.calendarWeeks) {
                    cell = document.createElement('td');
                    cell.classList.add('calendar-week');
                    cell.innerHTML = '<div>' + gj.datepicker.methods.getWeekNumber(date) + '</div>';
                    row.appendChild(cell);
                }
            }
            cell = document.createElement('td');
            cell.setAttribute('day', i);
            cell.setAttribute('month', month);
            cell.setAttribute('year', year);
            if (year === now.getFullYear() && month === now.getMonth() && i === now.getDate()) {
                cell.classList.add('today');
            } else {
                cell.classList.add('current-month');
            }
            dayEl = document.createElement('div');
            dayEl.innerText = i;
            if (gj.datepicker.methods.isSelectable(data, date)) {
                cell.classList.add('gj-cursor-pointer');
                dayEl.addEventListener('click', gj.datepicker.methods.dayClickHandler(picker, calendar, data, date));
                dayEl.addEventListener('mousedown', function (e) { e.stopPropagation() });
            } else {
                cell.classList.add('disabled');
            }
            cell.appendChild(dayEl);
            row.appendChild(cell);
            weekDay++;
            if (weekDay == 7) {
                tbody.appendChild(row);
                weekDay = 0;
            }
        }

        nextMonth = gj.datepicker.methods.getNextMonth(month, year);
        for (i = 1; weekDay != 0; i++) {
            date = new Date(nextMonth.year, nextMonth.month, i);
            cell = document.createElement('td');
            cell.classList.add('other-month');
            if (data.showOtherMonths) {
                dayEl = document.createElement('div');
                dayEl.innerText = i;
                if (data.selectOtherMonths && gj.datepicker.methods.isSelectable(data, date)) {
                    cell.classList.add('gj-cursor-pointer');
                    cell.setAttribute('day', i);
                    cell.setAttribute('month', nextMonth.month);
                    cell.setAttribute('year', nextMonth.year);                    
                    dayEl.addEventListener('click', gj.datepicker.methods.dayClickHandler(picker, calendar, data, date));
                    dayEl.addEventListener('mousedown', function (e) { e.stopPropagation() });
                } else {
                    cell.classList.add('disabled');
                }
                cell.appendChild(dayEl);
            }
            row.appendChild(cell);
            weekDay++;
            if (weekDay == 7) {
                tbody.appendChild(row);
                weekDay = 0;
            }
        }

        table.appendChild(tbody);
        body.appendChild(table);

        if (calendar.getAttribute('selectedDay')) {
            selectedDay = calendar.getAttribute('selectedDay').split('-');
            date = new Date(selectedDay[0], selectedDay[1], selectedDay[2], calendar.getAttribute('hour') || 0, calendar.getAttribute('minute') || 0);
            cell = calendar.querySelector('tbody td[day="' + selectedDay[2] + '"][month="' + selectedDay[1] + '"]');
            if (cell) {
                cell.classList.add('selected');
            }
            gj.datepicker.methods.updateHeader(calendar, data, date);
        }
    },

    renderYear: function (picker, calendar, data) {
        var year, i, m, row, month,
            table = calendar.querySelector('[role="body"] table'),
            tbody = table.querySelector('tbody');
        
        table.querySelector('thead').style.display = 'none';

        year = parseInt(calendar.getAttribute('year'), 10);

        calendar.setAttribute('type', 'year');
        calendar.querySelector('div[role="period"]').innerText = year;

        tbody.innerHTML = '';

        for (i = 0; i < 3; i++) {
            row = document.createElement('tr');
            for (m = (i * 4); m <= (i * 4) + 3; m++) {
                month = document.createElement('div');
                month.innerHTML = gj.core.messages[data.locale].monthShortNames[m];
                month.addEventListener('click', gj.datepicker.methods.selectMonth(picker, calendar, data, m));
                cell = document.createElement('td');
                cell.appendChild(month);
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
    },

    renderDecade: function (picker, calendar, data) {
        var year, decade, i, y, year,
            table = calendar.querySelector('[role="body"] table'),
            tbody = table.querySelector('tbody');
        
        table.querySelector('thead').style.display = 'none';

        year = parseInt(calendar.getAttribute('year'), 10);
        decade = year - (year % 10);

        calendar.setAttribute('type', 'decade');
        calendar.querySelector('div[role="period"]').innerText = decade + ' - ' + (decade + 9);

        tbody.innerHTML = '';

        for (i = decade - 1; i <= decade + 10 ; i += 4) {
            row = document.createElement('tr');
            for (y = i; y <= i + 3; y++) {
                year = document.createElement('div');
                year.innerText = y;
                year.addEventListener('click', gj.datepicker.methods.selectYear(picker, calendar, data, y));
                cell = document.createElement('td')
                cell.appendChild(year);
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
    },

    renderCentury: function (picker, calendar, data) {
        var year, century, i, d, decade,
            table = calendar.querySelector('[role="body"] table'),
            tbody = table.querySelector('tbody');
        
        table.querySelector('thead').style.display = 'none';

        year = parseInt(calendar.getAttribute('year'), 10);
        century = year - (year % 100);

        calendar.setAttribute('type', 'century');
        calendar.querySelector('div[role="period"]').innerText = century + ' - ' + (century + 99);

        tbody.innerHTML = '';

        for (i = (century - 10); i < century + 100; i += 40) {
            row = document.createElement('tr');
            for (d = i; d <= i + 30; d += 10) {
                decade = document.createElement('div');
                decade.innerText = d;
                decade.addEventListener('click', gj.datepicker.methods.selectDecade(picker, calendar, data, d));
                cell = document.createElement('td')
                cell.appendChild(decade);
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
    },

    getWeekNumber: function (date) {
        var d = new Date(date.valueOf());
        d.setDate(d.getDate() + 6);
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return weekNo;
    },

    getMinDate: function (data) {
        var minDate;
        if (data.minDate) {
            if (typeof (data.minDate) === 'string') {
                minDate = gj.core.parseDate(data.minDate, data.format, data.locale);
            } else if (typeof (data.minDate) === 'function') {
                minDate = data.minDate();
                if (typeof minDate === 'string') {
                    minDate = gj.core.parseDate(minDate, data.format, data.locale);
                }
            } else if (typeof data.minDate.getMonth === 'function') {
                minDate = data.minDate;
            }
        }
        return minDate;
    },

    getMaxDate: function (data) {
        var maxDate;
        if (data.maxDate) {
            if (typeof data.maxDate === 'string') {
                maxDate = gj.core.parseDate(data.maxDate, data.format, data.locale);
            } else if (typeof data.maxDate === 'function') {
                maxDate = data.maxDate();
                if (typeof maxDate === 'string') {
                    maxDate = gj.core.parseDate(maxDate, data.format, data.locale);
                }
            } else if (typeof data.maxDate.getMonth === 'function') {
                maxDate = data.maxDate;
            }
        }
        return maxDate;
    },

    isSelectable: function (data, date) {
        var result = true,
            minDate = gj.datepicker.methods.getMinDate(data),
            maxDate = gj.datepicker.methods.getMaxDate(data),
            i;

        if (minDate && date < minDate) {
            result = false;
        } else if (maxDate && date > maxDate) {
            result = false;
        }

        if (result) {
            if (data.disableDates) {
                if (Array.isArray(data.disableDates)) {
                    for (i = 0; i < data.disableDates.length; i++) {
                        if (data.disableDates[i] instanceof Date && data.disableDates[i].getTime() === date.getTime()) {
                            result = false;
                        } else if (typeof data.disableDates[i] === 'string' && gj.core.parseDate(data.disableDates[i], data.format, data.locale).getTime() === date.getTime()) {
                            result = false;
                        }
                    }
                } else if (data.disableDates instanceof Function) {
                    result = data.disableDates(date);
                }
            }
            if (Array.isArray(data.disableDaysOfWeek) && data.disableDaysOfWeek.indexOf(date.getDay()) > -1) {
                result = false;
            }
        }
        return result;
    },

    getPrevMonth: function (month, year) {
        date = new Date(year, month, 1);
        date.setMonth(date.getMonth() - 1);
        return { month: date.getMonth(), year: date.getFullYear() };
    },

    getNextMonth: function (month, year) {
        date = new Date(year, month, 1);
        date.setMonth(date.getMonth() + 1);
        return { month: date.getMonth(), year: date.getFullYear() };
    },

    prev: function (picker, data) {
        return function () {
            var date, month, year, decade, century,
                calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');

            year = parseInt(calendar.getAttribute('year'), 10);
            switch (calendar.getAttribute('type')) {
                case 'month':
                    month = parseInt(calendar.getAttribute('month'), 10);
                    date = gj.datepicker.methods.getPrevMonth(month, year);
                    calendar.setAttribute('month', date.month);
                    calendar.setAttribute('year', date.year);
                    gj.datepicker.methods.renderMonth(picker, calendar, data);
                    break;
                case 'year':
                    calendar.setAttribute('year', year - 1);
                    gj.datepicker.methods.renderYear(picker, calendar, data);
                    break;
                case 'decade':
                    decade = year - (year % 10);
                    calendar.setAttribute('year', decade - 10);
                    gj.datepicker.methods.renderDecade(picker, calendar, data);
                    break;
                case 'century':
                    century = year - (year % 100);
                    calendar.setAttribute('year', century - 100);
                    gj.datepicker.methods.renderCentury(picker, calendar, data);
                    break;
            }
            
            return false;
        }
    },

    next: function (picker, data) {
        return function (e) {
            var date, month, year, decade, century,
                calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');

            year = parseInt(calendar.getAttribute('year'), 10);
            switch (calendar.getAttribute('type')) {
                case 'month':
                    month = parseInt(calendar.getAttribute('month'), 10);
                    date = gj.datepicker.methods.getNextMonth(month, year);
                    calendar.setAttribute('month', date.month);
                    calendar.setAttribute('year', date.year);
                    gj.datepicker.methods.renderMonth(picker, calendar, data);
                    break;
                case 'year':
                    calendar.setAttribute('year', year + 1);
                    gj.datepicker.methods.renderYear(picker, calendar, data);
                    break;
                case 'decade':
                    decade = year - (year % 10);
                    calendar.setAttribute('year', decade + 10);
                    gj.datepicker.methods.renderDecade(picker, calendar, data);
                    break;
                case 'century':
                    century = year - (year % 100);
                    calendar.setAttribute('year', century + 100);
                    gj.datepicker.methods.renderCentury(picker, calendar, data);
                    break;
            }

            return false;
        };
    },

    changePeriod: function (picker, data) {
        return function (e) {
            var calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');

            switch (calendar.getAttribute('type')) {
                case 'month':
                    gj.datepicker.methods.renderYear(picker, calendar, data);
                    break;
                case 'year':
                    gj.datepicker.methods.renderDecade(picker, calendar, data);
                    break;
                case 'decade':
                    gj.datepicker.methods.renderCentury(picker, calendar, data);
                    break;
            }
        };
    },

    dayClickHandler: function (picker, calendar, data, date) {
        return function (e) {
            e && e.stopPropagation();
            gj.datepicker.methods.selectDay(picker, calendar, data, date);
            gj.datepicker.events.select(picker.element, 'day');
            if (data.footer !== true && data.autoClose !== false) {
                gj.datepicker.methods.change(picker, calendar, data, date);
            }
            return picker;
        };
    },

    change: function (picker, calendar, data, date) {
        var day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear(),
            value = gj.core.formatDate(date, data.format, data.locale);
        calendar.setAttribute('month', month);
        calendar.setAttribute('year', year);
        picker.element.value = value;
        gj.datepicker.events.change(picker.element);
        if (window.getComputedStyle(calendar).display !== 'none') {
            gj.datepicker.methods.close(picker);
        }
    },

    selectDay: function (picker, calendar, data, date) {
        var cell, day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
        calendar.setAttribute('selectedDay', year + '-' + month + '-' + day);
        [].forEach.call(calendar.querySelectorAll('tbody td'), function (el) {
            el.classList.remove('selected');
        });
        cell = calendar.querySelector('tbody td[day="' + day + '"][month="' + month + '"]');
        if (cell) {
            cell.classList.add('selected');
        }
        gj.datepicker.methods.updateHeader(calendar, data, date);
    },

    selectMonth: function (picker, calendar, data, month) {
        return function (e) {
            calendar.setAttribute('month', month);
            gj.datepicker.methods.renderMonth(picker, calendar, data);
            gj.datepicker.events.select(picker.element, 'month');
        };
    },

    selectYear: function (picker, calendar, data, year) {
        return function (e) {
            calendar.setAttribute('year', year);
            gj.datepicker.methods.renderYear(picker, calendar, data);
            gj.datepicker.events.select(picker.element, 'year');
        };
    },

    selectDecade: function (picker, calendar, data, year) {
        return function (e) {
            calendar.setAttribute('year', year);
            gj.datepicker.methods.renderDecade(picker, calendar, data);
            gj.datepicker.events.select(picker.element, 'decade');
        };
    },

    open: function (picker, data) {
        var date,
            calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');

        if (window.getComputedStyle(calendar).display === 'none') {
            if (picker.element.value) {
                picker.value(picker.element.value);
            } else {
                date = new Date();
                calendar.setAttribute('month', date.getMonth());
                calendar.setAttribute('year', date.getFullYear());
            }

            switch (calendar.getAttribute('type')) {
                case 'year':
                    gj.datepicker.methods.renderYear(picker, calendar, data);
                    break;
                case 'decade':
                    gj.datepicker.methods.renderDecade(picker, calendar, data);
                    break;
                case 'century':
                    gj.datepicker.methods.renderCentury(picker, calendar, data);
                    break;
                default:
                    gj.datepicker.methods.renderMonth(picker, calendar, data);
                    break;
            }

            calendar.style.display = 'block';
            if (data.modal) {
                calendar.parentElement.style.display = 'block';
                gj.core.center(calendar);
            } else {
                gj.core.setChildPosition(picker.element, calendar);
                document.activeElement !== picker.element && picker.element.focus();
            }
            clearTimeout(picker.timeout);
            gj.datepicker.events.open(picker.element);
        }
    },

    close: function (picker) {
        var calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');
        if (window.getComputedStyle(calendar).display !== 'none') {
            calendar.style.display = 'none';
            if (calendar.parentElement.getAttribute('role') === 'modal') {
                calendar.parentElement.style.display = 'none';
            }
            gj.datepicker.events.close(picker.element);
        }
    },

    createKeyDownHandler: function (picker, calendar, data) {
        return function (e) {
            var activeCell;
            e = e || window.event;
            if (window.getComputedStyle(calendar).display !== 'none') {
                activeCell = gj.datepicker.methods.getActiveCell(calendar);
                gj.datepicker.methods.activateNextElement(picker, calendar, data, e.keyCode, activeCell);
            }
        };
    },

    activateNextElement: function (picker, calendar, data, keyCode, cell) {
        var day, month, year, index, newEl;

        if (keyCode == '38') { // up
            index = Array.prototype.slice.call(cell.parentElement.children).indexOf(cell);
            if (cell.parentElement.previousSibling) {
                newEl = cell.parentElement.previousSibling.children[index];
            }
            if (!newEl || !newEl.hasAttribute('day')) {
                gj.datepicker.methods.prev(picker, data)();
                nodes = calendar.querySelectorAll('tbody tr');
                newEl = nodes[nodes.length - 1].querySelectorAll('td')[index];
            }
            gj.datepicker.methods.selectElement(picker, calendar, data, keyCode, cell, newEl);
        } else if (keyCode == '40') { // down
            index = Array.prototype.slice.call(cell.parentElement.children).indexOf(cell);
            if (cell.parentElement.nextSibling) {
                newEl = cell.parentElement.nextSibling.children[index];
            }
            if (!newEl || !newEl.hasAttribute('day')) {
                gj.datepicker.methods.next(picker, data)();
                newEl = calendar.querySelector('tbody tr').querySelectorAll('td')[index];
            }
            gj.datepicker.methods.selectElement(picker, calendar, data, keyCode, cell, newEl);
        } else if (keyCode == '37') { // left
            newEl = cell.previousSibling;
            if (!newEl && cell.parentElement.previousSibling && cell.parentElement.previousSibling.children[6].hasAttribute('day')) { // Go To the previous row/week
                newEl = cell.parentElement.previousSibling.children[6];
            }
            if (!newEl) {
                gj.datepicker.methods.prev(picker, data)();
                month = parseInt(calendar.getAttribute('month'), 10);
                year = parseInt(calendar.getAttribute('year'), 10);
                day = data.showOtherMonths ? parseInt(cell.getAttribute('day'), 10) - 1 : gj.datepicker.methods.getDaysInMonth(year)[month];
                newEl = calendar.querySelector('tbody tr td[day="' + day + '"]');
            }
            gj.datepicker.methods.selectElement(picker, calendar, data, keyCode, cell, newEl);
        } else if (keyCode == '39') { // right
            newEl = cell.nextSibling;
            if (!newEl && cell.parentElement.nextSibling && cell.parentElement.nextSibling.children[0].hasAttribute('day')) { // Go To the next row/week
                newEl = cell.parentElement.nextSibling.children[0];
            }
            if (!newEl) { // Go To the next month
                gj.datepicker.methods.next(picker, data)();
                day = data.showOtherMonths ? parseInt(cell.getAttribute('day'), 10) + 1 : 1;
                newEl = calendar.querySelector('tbody tr td[day="' + day + '"]');
            }
            gj.datepicker.methods.selectElement(picker, calendar, data, keyCode, cell, newEl);
        } else if (keyCode == '13') { // enter
            day = parseInt(cell.getAttribute('day'), 10);
            month = parseInt(cell.getAttribute('month'), 10);
            year = parseInt(cell.getAttribute('year'), 10);
            gj.datepicker.methods.dayClickHandler(picker, calendar, data, new Date(year, month, day))();
        } else if (keyCode == '27') { // esc
            picker.close();
        }
    },

    selectElement: function (picker, calendar, data, keyCode, cell, newEl) {
        if (newEl) {
            if (newEl.classList.contains('disabled') || !newEl.hasAttribute('day')) {
                cell.classList.remove('focused');
                gj.datepicker.methods.activateNextElement(picker, calendar, data, keyCode, newEl);
            } else {
                newEl.classList.add('focused');
                cell.classList.remove('focused');
            }
        }
    },

    getActiveCell: function (calendar) {
        var cell = calendar.querySelector('td[day].focused');
        if (!cell) {
            cell = calendar.querySelector('td[day].selected');
            if (!cell) {
                cell = calendar.querySelector('td[day].today');
                if (!cell) {
                    cell = calendar.querySelector('td[day]:not(.disabled)');
                }
            }
        }
        return cell;
    },

    value: function (picker, value) {
        var calendar, date, data = gijgoStorage.get(picker.element, 'gijgo');
        if (typeof (value) === "undefined") {
            return picker.element.value;
        } else {
            date = gj.core.parseDate(value, data.format, data.locale);
            if (date && date.getTime()) {
                calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');
                gj.datepicker.methods.dayClickHandler(picker, calendar, data, date)();
            } else {
                picker.element.value = '';
            }
            return picker;
        }
    },

    destroy: function (picker) {
        var data = gijgoStorage.get(picker.element, 'gijgo'),
            parent = picker.element.parentElement,
            calendar = document.body.querySelector('[role="picker"][guid="' + picker.element.getAttribute('data-guid') + '"]');
        if (data) {
            //$datepicker.off();
            if (picker.element.parentElement.getAttribute('role') === 'modal') {
                picker.element.outerHTML = picker.element.innerHTML;
            }
            //$picker.remove();
            gijgoStorage.remove(picker.element, 'gijgo');
            picker.element.removeAttribute('data-type');
            picker.element.removeAttribute('data-guid');
            picker.element.removeAttribute('data-datepicker');
            picker.element.removeAttribute('class');
            picker.element.removeChild(picker.element.querySelector('[role="right-icon"]'));
        }
        return picker;
    }
};

gj.datepicker.events = {
    /**
     * Triggered when the datepicker value is changed.
     *
     * @event change
     * @param {object} e - event data
     * @example sample <!-- nojquery, datepicker -->
     * <input id="datepicker" width="312" />
     * <script>
     *     new GijgoDatePicker(document.getElementById('datepicker'), {
     *         change: function (e) {
     *             alert('Change is fired');
     *         }
     *     });
     * </script>
     */
    change: function (el) {
        return el.dispatchEvent(new Event('change'));
    },

    /**
     * Triggered when new value is selected inside the picker.
     *
     * @event select
     * @param {object} e - event data
     * @param {string} type - The type of the selection. The options are day, month, year or decade.
     * @example sample <!-- nojquery, datepicker -->
     * <input id="datepicker" width="312" />
     * <p>Click on the month name in order to select another month.</p>
     * <script>
     *     new GijgoDatePicker(document.getElementById('datepicker'), {
     *         modal: true,
     *         header: true,
     *         footer: true,
     *         change: function (e) {
     *             alert('Change is fired');
     *         },
     *         select: function (e) {
     *             alert('Select from type of "' + e.detail.type + '" is fired');
     *         }
     *     });
     * </script>
     */
    select: function (el, type) {
        return el.dispatchEvent(new CustomEvent('select', { detail: { 'type': type } }));
    },

    /**
     * Event fires when the calendar is opened.
     * @event open
     * @param {object} e - event data
     * @example sample <!-- nojquery, datepicker -->
     * <input id="datepicker" width="312" />
     * <script>
     *     new GijgoDatePicker(document.getElementById('datepicker'), ({
     *         modal: true,
     *         open: function (e) {
     *             alert('open is fired.');
     *         }
     *     });
     * </script>
     */
    open: function (el) {
        return el.dispatchEvent(new Event('open'));
    },

    /**
     * Event fires when the calendar is closed.
     * @event close
     * @param {object} e - event data
     * @example sample <!-- datepicker -->
     * <input id="datepicker" width="312" />
     * <script>
     *     new GijgoDatePicker(document.getElementById('datepicker'), ({
     *         modal: true,
     *         close: function (e) {
     *             alert('Close is fired.');
     *         }
     *     });
     * </script>
     */
    close: function (el) {
        return el.dispatchEvent(new Event('close'));
    }
};

GijgoDatePicker = function (element, jsConfig) {
    var self = this,
        methods = gj.datepicker.methods;

    self.element = element;

    /** Gets or sets the value of the datepicker.
     * @method
     * @param {string} value - The value that needs to be selected.
     * @return string | datepicker object
     * @example Get <!-- datepicker -->
     * <button class="gj-button-md" onclick="alert(datepicker.value())">Get Value</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var datepicker = new GijgoDatePicker(document.getElementById('datepicker'));
     * </script>
     * @example Set <!-- datepicker -->
     * <button class="gj-button-md" onclick="datepicker.value('03/01/2019')">Set Value</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var datepicker = new GijgoDatePicker(document.getElementById('datepicker'));
     * </script>
     */
    self.value = function (value) {
        return methods.value(this, value);
    };

    /** Remove datepicker functionality from the element.
     * @method
     * @return jquery element
     * @example sample <!-- datepicker -->
     * <button class="gj-button-md" onclick="datepicker.destroy()">Destroy</button>
     * <input id="datepicker" width="312" />
     * <script>
     *     var datepicker = new GijgoDatePicker(document.getElementById('datepicker'));
     * </script>
     */
    self.destroy = function () {
        return methods.destroy(this);
    };

    /** Open the calendar.
     * @method
     * @return datepicker
     * @example Open.Close <!-- datepicker -->
     * <button class="gj-button-md" onclick="datepicker.open()">Open</button>
     * <button class="gj-button-md" onclick="datepicker.close()">Close</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var datepicker = new GijgoDatePicker(document.getElementById('datepicker'));
     * </script>
     */
    self.open = function () {
        return methods.open(this, this.data());
    };

    /** Close the calendar.
     * @method
     * @return datepicker
     * @example Open.Close <!-- datepicker -->
     * <button class="gj-button-md" onclick="datepicker.open()">Open</button>
     * <button class="gj-button-md" onclick="datepicker.close()">Close</button>
     * <hr/>
     * <input id="datepicker" width="312" />
     * <script>
     *     var datepicker = new GijgoDatePicker(document.getElementById('datepicker'));
     * </script>
     */
    self.close = function () {
        return methods.close(this);
    };
    
    if ('true' !== element.getAttribute('data-datepicker')) {
        methods.init.call(self, jsConfig);
    }

    return self;
};

GijgoDatePicker.prototype = new gj.widget();
GijgoDatePicker.constructor = GijgoDatePicker;

if (typeof (jQuery) !== "undefined") {
    (function ($) {
        $.fn.datepicker = function (method) {
            var $widget;
            if (this && this.length) {
                if (typeof method === 'object' || !method) {
                    return new GijgoDatePicker(this[0], method);
                } else {
                    $widget = new GijgoDatePicker(this[0], null);
                    if ($widget[method]) {
                        return $widget[method].apply(this[0], Array.prototype.slice.call(arguments, 1));
                    } else {
                        throw 'Method ' + method + ' does not exist.';
                    }
                }
            }
        };
    })(jQuery);
}
