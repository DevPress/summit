!function(){var a=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,b=navigator.userAgent.toLowerCase().indexOf("opera")>-1,c=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((a||b||c)&&"undefined"!=typeof document.getElementById){var d=window.addEventListener?"addEventListener":"attachEvent";window[d]("hashchange",function(){var a=document.getElementById(location.hash.substring(1));a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus())},!1)}}(),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+e+"</style>",d.appendChild(f.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(){var b=a(this);if(!(b.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){b.css("height")||b.css("width")||!isNaN(b.attr("height"))&&!isNaN(b.attr("width"))||(b.attr("height",9),b.attr("width",16));var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),e=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),f=c/e;if(!b.attr("id")){var g="fitvid"+Math.floor(999999*Math.random());b.attr("id",g)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*f+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(a){var b={cache:{$document:a(document),$window:a(window),$sitebranding:a(".site-branding"),$logo:a(".site-branding img"),$sitenavigation:a("#site-navigation"),$secondary:a("#secondary"),masonry:!1},init:function(){this.bindEvents()},bindEvents:function(){var b=this;this.cache.$document.on("ready",function(){b.cache.$logo?b.cache.$logo.on("load",b.navigationInit()):b.navigationInit(),b.brandingInit(),b.fitVidsInit(),b.masonryInit()}),this.cache.$window.on("resize",function(){b.cache.$sitebranding.hide()}),this.cache.$window.on("resize",b.debounce(function(){b.brandingInit(),b.cache.$menu.attr("style",""),b.cache.$menu.find(".children,.sub-menu").each(function(){a(this).attr("style","")}),b.cache.$menu.find(".dropdown-toggle").each(function(){a(this).removeClass("toggled")}),b.cache.masonry&&(b.cache.$window.width()<640?(b.cache.$secondary.masonry("destroy"),b.cache.masonry=!1,b.cache.$secondary.removeClass("column-masonry").addClass("column-1")):b.masonryInit())},200))},navigationInit:function(){var b=this;this.cache.$sitenavigation&&(this.cache.$menutoggle=this.cache.$sitenavigation.find(".menu-toggle").eq(0),this.cache.$menu=this.cache.$sitenavigation.find("ul").eq(0),this.cache.$menu.hasClass("nav-menu")||this.cache.$menu.addClass("nav-menu"),a(".main-navigation > div > ul > .page_item_has_children, .main-navigation > div > ul > .menu-item-has-children").append('<span class="dropdown-toggle" />'),this.cache.$menutoggle.on("click",function(){b.cache.$sitenavigation.hasClass("toggled")?b.cache.$menu.slideUp(function(){b.cache.$sitenavigation.removeClass("toggled")}):b.cache.$menu.slideDown(function(){b.cache.$sitenavigation.addClass("toggled")})}),a(".dropdown-toggle").click(function(){var b=a(this).parent().find(".children,.sub-menu"),c=a(this);a(this).hasClass("toggled")?b.slideUp(function(){c.removeClass("toggled")}):b.slideDown(function(){c.addClass("toggled")})}))},brandingInit:function(){var b=this.cache.$sitebranding.height(),c=a("#masthead").height(),d=(c-b)/2/c*100;this.cache.$sitebranding.css({top:d+"%"}).fadeIn("200")},fitVidsInit:function(){a.fn.fitVids&&a(".hentry").fitVids()},masonryInit:function(){if(a.fn.masonry&&!(this.cache.$window.width()<640)&&($secondary=this.cache.$secondary,$secondary.hasClass("column-masonry"))){a(".widget").css({"margin-right":0});{var b=$secondary.width()-2*a(".widget").first().outerWidth()-2;$secondary.masonry({itemSelector:".widget",gutter:b})}this.cache.masonry=!0}},debounce:function(a,b){var c=null;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){a.apply(d,e)},b)}}};b.init()}(jQuery);