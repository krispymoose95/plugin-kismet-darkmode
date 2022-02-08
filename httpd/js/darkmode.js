"use strict";

var local_uri_prefix = "";
if (typeof(KISMET_URI_PREFIX) !== 'undefined')
    local_uri_prefix = KISMET_URI_PREFIX;

$(document).ready(function () {
    $('link[href^=' + local_uri_prefix + '"css/"').attr('href', function(i, href) {
        return 'plugin/darkmode/' + href;
    });
    
    $('link[href$="jquery.dataTables.min.css"]').attr('href', function(i, href) {
        return href.replace('jquery.dataTables.min.css', 'darkmode.dataTables.css');
    });
    
    $(document.head).append('<link rel="stylesheet" type="text/css" href="plugin/darkmode/css/jquery-ui.theme.min.css">');
    $(document.head).append('<link rel="stylesheet" type="text/css" href="plugin/darkmode/css/darkmode.dataTables.css">');
    $(document.head).append('<link rel="stylesheet" type="text/css" href="plugin/darkmode/css/darkmode.css">');
});