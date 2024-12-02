// ==UserScript==
// @name         Modify Idle Timeout for Marmara BYS
// @namespace    https://github.com/slyvioborin/Marmara-BYS-timeout-editor
// @version      1.0
// @description  Modify idle timeout settings for Marmara BYS
// @author       slyvioborin
// @match        https://bys.marmara.edu.tr/v2/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.$ && $(function () {
        if ($.fn.idleTimeout) {
            var idleOpt = {
                idleTimeLimit: 500,
                idleCheckHeartbeat: 2,
                useTopBar: true,
                dialogDisplayLimit: 500,
                redirectUrl: '/',
                sessionKeepAliveTimer: 120,
                sessionKeepAliveUrl: '/ping.aspx',
                dialogTitle: 'Oturum Zaman Aşımı Uyarısı!',
                topBarText: 'Bir süredir işlem yapmadığınızdan <span id="idletimeout-seconds">{seconds}</span>&nbsp;saniye içinde oturumunuz kapanacaktır. ' +
                '<a id="idletimeout-resume" href="javascript:;" style="color:#fff; font-weight:bold; font-size: 14px; text-decoration: underline;">Oturumunuzu açık tutmak için buraya tıklayınız</a>.',
            };

            // Reinitialize the idleTimeout plugin with the new options
            $(document).idleTimeout(idleOpt);
        }
    });
})();