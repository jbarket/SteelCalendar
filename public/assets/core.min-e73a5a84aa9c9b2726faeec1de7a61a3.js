function browser(){function t(t){return t in document.documentElement.style}var e=!(!window.opera||!window.opera.version);t("MozBoxSizing");var i=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,n=!i&&t("WebkitTransform");return e?!1:i||n?!0:!1}function retina(){return retinaMode=window.devicePixelRatio>1}jQuery(document).ready(function(t){t("input, textarea").placeholder()}),jQuery(document).ready(function(t){t("textarea").autosize()}),jQuery(document).ready(function(t){t(".discussions").find(".delete").click(function(){t(this).parent().fadeTo("slow",0,function(){t(this).slideUp("slow",function(){t(this).remove()})})})}),jQuery(document).ready(function(t){t(".messagesList").width()&&"8."==jQuery.browser.version.substring(0,2)&&t("ul.messagesList li:nth-child(2n+1)").addClass("odd")}),jQuery(document).ready(function(t){t("ul.main-menu li a").each(function(){t(t(this))[0].href==String(window.location)&&t(this).parent().addClass("active")}),t("ul.main-menu li ul li a").each(function(){t(t(this))[0].href==String(window.location)&&(t(this).parent().addClass("active"),t(this).parent().parent().show())}),t(".dropmenu").click(function(e){e.preventDefault(),t(this).parent().find("ul").slideToggle()})}),jQuery(document).ready(function(t){t(".boxchart")&&(retina()?(t(".boxchart").sparkline("html",{type:"bar",height:"60",barWidth:"8",barSpacing:"2",barColor:"#ffffff",negBarColor:"#eeeeee"}),t(".boxchart").css("zoom",.5)):t(".boxchart").sparkline("html",{type:"bar",height:"30",barWidth:"4",barSpacing:"1",barColor:"#ffffff",negBarColor:"#eeeeee"}))}),jQuery(document).ready(function(t){t(".todo-actions > a").click(function(){return"icon-check-empty"==t(this).find("i").attr("class")?(t(this).find("i").removeClass("icon-check-empty").addClass("icon-check"),t(this).parent().parent().find("span").css({opacity:.25}),t(this).parent().parent().find(".desc").css("text-decoration","line-through")):(t(this).find("i").removeClass("icon-check").addClass("icon-check-empty"),t(this).parent().parent().find("span").css({opacity:1}),t(this).parent().parent().find(".desc").css("text-decoration","none")),!1}),t(function(){t(".todo-list").sortable(),t(".todo-list").disableSelection()})});