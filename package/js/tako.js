/* TaKo v0.1.0 - 1/19/2014
   http://
   Copyright (c) 2014  - Licensed  */
(function(){var a;window.Tako=a=function(){var a,b,c,d,e,f,g,h;d=0;a=[];b=function(a){var b,c,e,i,j,k;if(a==null){a={}}try{if(a.sections!=null){d=a.sections.length;j=a.sections;k=[];for(e=0,i=j.length;e<i;e++){c=j[e];k.push($.ajax({url:c,crossDomain:true,success:g,error:f}))}return k}else{return h()}}catch(l){b=l;return console.error(b)}};c=function(b){return a.push(b)};h=function(){if($("section.active").length===0){$("section").first().addClass("active")}$("body").hammer();$("section").each(function(){if($(this).children("article.active").length===0){return $(this).children("article").first().addClass("active")}});return e()};g=function(a){d--;$("body").append(a);if(d===0){return h()}};f=function(a){d--;console.error("Section not downloaded");if(d===0){return h()}};e=function(){var b,c,d,e;e=[];for(c=0,d=a.length;c<d;c++){b=a[c];e.push(b.call(b))}return e};return{init:b,onReady:c}}()}).call(this);(function(){Tako.Article=function(a){var b,c,d;c=function(a){var c,d,e,f,g;f=b();g=f.parent();c=$("article#"+a);d=c.parent();if(f[0].id!==c[0].id){d.children().removeClass("active");e=c.addClass("active")}if(g[0].id!==d[0].id){Tako.Section.goTo(d[0].id)}else{f.trigger("unload");e=c.trigger("load")}$(".current[data-article]").removeClass("current");return $("[data-article="+a+"]").addClass("current")};b=function(){var a;if(typeof a!=="undefined"&&a!==null){return a}else{return a=$("section.active article.active")}};$("[data-article]").each(function(a){var b=this;return $(this).bind("tap",function(a){a.preventDefault();a.stopPropagation();return c($(b).attr("data-article"))})});d=null;return{goTo:c,current:b}}(Tako)}).call(this);(function(){Tako.Aside=function(a){var b,c,d,e,f;b=$("aside");if(b.length>0){$("body").append('<div data-element="aside_background"></div>')}c=$("[data-element=aside_background]");c.append(b);e=function(){c.removeClass("hide").addClass("show");return b.addClass("show")};d=function(){b.removeClass("show");c.addClass("hide");return setTimeout(function(){return c.removeClass("show")},150)};f=function(){if(b.hasClass("show")){return d()}else{return e()}};$("[data-action=aside]").each(function(a){return $(this).on("tap",function(a){a.preventDefault();a.stopPropagation();return f()})});$("aside *").each(function(a){return $(this).on("tap",function(a){a.preventDefault();a.stopPropagation();return d()})});c.on("tap",function(a){a.preventDefault();a.stopPropagation();return d()});return{show:e,hide:d,toggle:f}}(Tako)}).call(this);(function(){Tako.Section=function(a){var b,c,d,e;d=function(a,c){var d;if(c==null){d=b().children("header").children("h1")}else{d=$("section#"+c).children("header").children("h1")}if(d.length===1){if(a!=null){return d.html(a)}else{return d.html()}}};c=function(a){var c,d;c=b();if(c[0].id!==a){c.removeClass("active");c.children("article.active").trigger("unload");d=$("section#"+a).addClass("active");d.children("article.active").trigger("load");$(".current[data-section]").removeClass("current");return $("[data-section="+a+"]").addClass("current")}};b=function(){var a;if(typeof a!=="undefined"&&a!==null){return a}else{return a=$("section.active")}};$("[data-section]").each(function(a){var b=this;return $(this).bind("tap",function(a){a.preventDefault();a.stopPropagation();return c($(b).attr("data-section"))})});e=null;return{goTo:c,title:d,current:b}}(Tako)}).call(this);(function(){Tako.Connection=function(){var a,b,c;b=navigator.onLine;a=[];c=function(c){var d,e,f,g;if(b!==c){b=c;g=[];for(e=0,f=a.length;e<f;e++){d=a[e];g.push(d.call(d,c))}return g}};$(window).on("online",function(){return c(true)});$(window).on("offline",function(){return c(false)});return{isOnline:function(){return navigator.onLine},onChange:function(b){return a.push(b)}}}()}).call(this);(function(){Tako.DB=function(){return{manager:null,create:function(a,b,c,d,e){this.manager=new WebDB(a,b,c,d,e);return this.db=this.manager.db},select:function(){if(this.manager==null){throw"Database not initializated"}return this.manager.select.apply(this.manager,arguments)},insert:function(){if(this.manager==null){throw"Database not initializated"}return this.manager.insert.apply(this.manager,arguments)},update:function(){if(this.manager==null){throw"Database not initializated"}return this.manager.update.apply(this.manager,arguments)},"delete":function(){if(this.manager==null){throw"Database not initializated"}return this.manager["delete"].apply(this.manager,arguments)},drop:function(){if(this.manager==null){throw"Database not initializated"}return this.manager.drop.apply(this.manager,arguments)},execute:function(){if(this.manager==null){throw"Database not initializated"}return this.manager.execute.apply(this.manager,arguments)}}}()}).call(this);(function(){Tako.Notification=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=false;h=$('<div data-element="notification"></div>');i=$('<div class="window"></div>');h.append(i);$("body").append(h);l=null;c=null;k=function(a,b,c,d,e){var f;f=n(a,b,c);return p(f,"success top_position upwards margin",d,e)};e=function(a,b,c,d,e){var f;f=n(a,b,c);return p(f,"error top_position upwards margin",d,e)};g=function(a,b,c){var d;d='<div id="circular_container">\n<div id="circular3dG">\n  <div id="circular3d_1G" class="circular3dG"></div>\n  <div id="circular3d_2G" class="circular3dG"></div>\n  <div id="circular3d_3G" class="circular3dG"></div>\n  <div id="circular3d_4G" class="circular3dG"></div>\n  <div id="circular3d_5G" class="circular3dG"></div>\n  <div id="circular3d_6G" class="circular3dG"></div>\n  <div id="circular3d_7G" class="circular3dG"></div>\n  <div id="circular3d_8G" class="circular3dG"></div>\n</div>';d+="</div>";if(a!=null){d+='<span class="title">'+a+"</span>"}return p(d,"loading center not_clickable",b,c)};j=function(b,c,d,e,g){var h;h='<span class="icon '+b+'"></span>\n<span class="title">'+c+'</span>\n<div class="content padding bottom">'+d+'</div>\n<div id="notification_progress"></div>';p(h,"center progress padding top not_clickable",e,g);j=a.ProgressBar("notification_progress",0);return{percent:function(a){var b;b=j.percent(a);if(b===100){setTimeout(function(){return f()},150)}return b}}};d=function(a,b,c,d,e,g){var h,j;j='<span class="icon '+a+'"></span>\n<span class="title">'+b+'</span>\n<div class="content padding bottom clear">'+c+'</div>\n<button class="button accept">'+d+'</button>\n<button class="button cancel">'+e+"</button>";p(j,"confirm top_position downwards not_clickable",null,null);h=i.children("button");return h.bind("tap",function(a){h.unbind("tap");f();if($(this).hasClass("accept")){return g.call(g,true)}else{return g.call(g,false)}})};f=function(){b=false;clearTimeout(l);l=null;i.removeClass("show");return setTimeout(m,500)};n=function(a,b,c){var d;return d='<span class="icon '+a+'"></span>\n<div>\n  <span class="title">'+b+'</span>\n  <div class="content">'+c+"</div>\n</div>"};p=function(a,d,e,g){var j;if(!b){b=true;i.removeClass();i.addClass("window "+d);i.html(a);h.addClass("show");setTimeout(function(){return i.addClass("show")},100);if(g!=null){c=g}if(e!=null){return l=setTimeout(f,e*1e3)}}else{j=c;c=function(){if(j!=null){j()}return p(a,l,g)};return f()}};o=function(a){a.preventDefault();a.stopPropagation();if(!i.hasClass("not_clickable")){b=false;clearTimeout(l);l=null;i.removeClass("show");return setTimeout(m,500)}};m=function(){var a;h.removeClass("show");a=c;c=null;if(a!=null){return a.call(a)}};h.on("tap",o);return{success:k,error:e,confirm:d,loading:g,progress:j,hide:f}}(Tako)}).call(this);(function(){Tako.ProgressBar=function(a,b){var c;c=function(){var a,b;a=null;b=null;function c(c,d){var e;this.value=d!=null?d:0;e='<span class="progress_bar">\n  <span class="percent" style="width:'+this.value+'%"></span>\n</span>';a=$(e);$("#"+c).append(a);b=a.children(".percent")}c.prototype.percent=function(a){if(a!=null){if(a<0||a>100){throw"Invalid value"}this.value=a;b.css("width",""+this.value+"%")}return this.value};c.prototype.remove=function(){return a.remove()};return c}();return new c(a,b)}}).call(this);(function(){(function(){var a,b,c,d;b=function(a,b){return JSON.parse(window[a].getItem(b))};d=function(a,b,c){return window[a].setItem(b,JSON.stringify(c))};c=function(a,b){return window[a].removeItem(b)};a=function(a){return window[a].clear()};Tako.Session=function(){var e;e="sessionStorage";return{get:function(a){return b(e,a)},set:function(a,b){return d(e,a,b)},remove:function(a){return c(e,a)},clear:function(){return a(e)}}}();return Tako.Storage=function(){var e;e="localStorage";return{get:function(a){return b(e,a)},set:function(a,b){return d(e,a,b)},remove:function(a){return c(e,a)},clear:function(){return a(e)}}}()})()}).call(this);