/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{function e(){var e,s;$(".mainslider__slider").each((function(){$(this).slick({infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,arrows:!0,dots:!0,fade:!0,nextArrow:$(this).closest(".mainslider").find(".slider__arrow_right"),prevArrow:$(this).closest(".mainslider").find(".slider__arrow_left")})})),function(){function e(){$(".productslider__slider-menu.slick-slider").css("opacity","1")}$("button.mainmenubtn").on("click",(function(t){$(this).toggleClass("active"),$(".mainmenu").toggleClass("active"),$(".jsbackdrop").toggleClass("active"),$(".mainmenu__slider").find(".productslider__slider-menu").slick("refresh"),setTimeout(e,"300")})),$(".productslider__slider-menu").each((function(){$(this).slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0})}))}(),$(".productslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:6,slidesToScroll:1,nextArrow:$(this).closest(".productslider").find(".slider__arrow_right"),prevArrow:$(this).closest(".productslider").find(".slider__arrow_left"),responsive:[{breakpoint:1530,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1023,settings:{variableWidth:!0}}]})})),$(".productslider__modalslider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})})),$('[data-reviews="slider"]').each((function(){$(this).slick({infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,nextArrow:$(this).closest('[data-sliderblock="reviewsblock"]').find(".slider__arrow_right"),prevArrow:$(this).closest('[data-sliderblock="reviewsblock"]').find(".slider__arrow_left"),responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})})),i(!1,300,"headermain","fixed"),i(!1,!1,"headercontainer","fixed"),e=".mainmenu",s=".mainmenubtn",$(document).click((function(t){$(t.target).closest(`${e},${s}`).length||($(s).removeClass("active"),$(e).removeClass("active"))})),$(document).keyup((function(t){"Escape"===t.key&&($(s).removeClass("active"),$(e).removeClass("active"))})),t(".reviewcontent__text","Читать полностью"),t(".text","Подробнее"),function(){window.innerWidth;const e=new Swiper(".detailswiperpreview",{spaceBetween:9,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,direction:"vertical",freeMode:!0,watchSlidesProgress:!0});new Swiper(".detailswiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e},pagination:{el:".detailslider-pagination",clickable:!0}})}(),i(!1,750,"mobpriceFixed","fixed"),$(".morenews__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,swipe:!1,nextArrow:$(this).closest(".morenewsslider").find(".slider__arrow_right"),prevArrow:$(this).closest(".morenewsslider").find(".slider__arrow_left"),responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}function t(e,t){$(e).each((function(){const e=$(this).find("[data-limit]");if(e){const i=e.data("limit");e.height()>=i&&(e.css("height",i),e.addClass("texthidden"),$(this).append(`<span data-toggle="fulltext" class="link">${t}</span>`))}})),$(e).on("click",'[data-toggle="fulltext"]',(function(e){e.preventDefault();let i=$(this).text(),s=$(this).siblings("[data-limit]");$(this).siblings("[data-limit]").toggleClass("texthidden"),s.height()==s.data("limit")?$(this).siblings("[data-limit]").css("height","initial"):$(this).siblings("[data-limit]").css("height",s.data("limit")),$(this).text(i==t?"Скрыть":t)}))}function i(e,t,i,s){document.getElementById(i)&&(window.innerWidth>=1023?0===e?document.getElementById(i).classList.add(s):e&&window.addEventListener("scroll",(t=>{scroll=window.scrollY,scroll>=e?document.getElementById(i).classList.add(s):document.getElementById(i).classList.remove(s)})):0===t?document.getElementById(i).classList.add(s):t&&window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=t?document.getElementById(i).classList.add(s):document.getElementById(i).classList.remove(s)})))}$(document).ready((function(){$(window).width()<1024?$('[href="#detailtabs"]').on("click",(function(e){e.preventDefault(),$("#detailtabs h2").trigger("click"),$("html,body").animate({scrollTop:$("#detailtabs").offset().top-200},"slow")})):$('[href="#detailtabs"]').on("click",(function(e){e.preventDefault(),$(".sitetab--reviews").trigger("click"),$("html,body").animate({scrollTop:$("#detailtabs").offset().top-150},"slow")})),$(".youtubepopup").click((function(){var e=$(this),t=$('<iframe frameborder="0" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src",e.data("link")).css({width:600,height:400});$("#video-view").html("").append(t),$("#video-popup").show();const i=".youtubepopup";$(document).click((function(e){$(e.target).closest(`#video-view iframe,${i}`).length||($(i).removeClass("active"),$("#video-popup").hide(),$("#video-view").html(""))})),$(document).keyup((function(e){"Escape"===e.key&&($(i).removeClass("active"),$("#video-popup").hide(),$("#video-view").html(""))}))})),$("#video-close").click((function(){$("#video-view").html(""),$("#video-popup").hide()})),$(window).width()<1024&&($(".sliderarrows.onlyMobile .slider__arrow_left").click((function(e){$(this).closest('[data-block="productslider"]').find(".slick-slider").slick("slickPrev")})),$(".sliderarrows.onlyMobile .slider__arrow_right").click((function(e){$(this).closest('[data-block="productslider"]').find(".slick-slider").slick("slickNext")}))),flatpickr("#js-flatpickr",{minDate:"today"}),document.querySelectorAll('[data-toggle="password"]').forEach((e=>{e.addEventListener("click",(t=>{let i=e.previousElementSibling;"password"===i.type?i.type="text":i.type="password"}))})),$((function(){$("iframe[data-src]").each((function(){$(this).Lazy()}))})),$(".js-mobilefilter").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".catalogpage__aside").toggleClass("active")})),$(".jscatalog .js-toggler").on("click",(function(e){$(this).closest(".jscatalog").toggleClass("active"),$(this).closest(".jscatalog").siblings(".mobilemenu__level2").toggleClass("active")})),$(".mobilemenu__level2 .js-toggler").on("click",(function(e){$(this).closest(".mobilemenu__content").toggleClass("active"),$(this).closest(".mobilemenu__item").find(".mobilemenu__level3").slideToggle()})),$(".menubutton").on("click",(function(e){$(this).toggleClass("active"),$(".mobilemenu").toggleClass("active"),$(".jsbackdrop").toggleClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".jsbackdrop").on("click",(function(e){$(this).removeClass("active"),$(".mobilemenu").removeClass("active"),$(".menubutton").removeClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".haederbanner__close").on("click",(function(e){e.preventDefault(),$(this).closest(".haederbanner").hide()})),$(".productcard .cardrating").each((function(){$(this).find("span.stars-active").css("width",11.2*$(this).find(".cardrating__value").text())})),$(".detailinfo__reviews .cardrating").each((function(){$(this).find("span.stars-active").css("width",$(this).find(".cardrating__value").text()*($(this).find(".fa-star").width()+2.1))})),$(".reviewcontent").each((function(){$(this).find("span.stars-active").css("width",18*$(this).find(".cardrating__value").text())})),$("input[type=tel]").mask("7 (999) 999-99-99"),lightbox.option({resizeDuration:0}),$(".quantity").on("click",".quantity-plus",(function(e){!function(e){e.preventDefault();var t=$(e.target).data("field"),i=$(e.target).closest("div"),s=parseInt(i.find("input[name="+t+"]").val(),10);isNaN(s)?i.find("input[name="+t+"]").val(1):i.find("input[name="+t+"]").val(s+1)}(e)})),$(".quantity").on("click",".quantity-minus",(function(e){!function(e){e.preventDefault();var t=$(e.target).data("field"),i=$(e.target).closest("div"),s=parseInt(i.find("input[name="+t+"]").val(),10);!isNaN(s)&&s>1?i.find("input[name="+t+"]").val(s-1):i.find("input[name="+t+"]").val(1)}(e)})),function(e){e((function(){e(".js-tabsheader").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tabscontent").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e("[data-headertabs]").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(e(this).index()).addClass("active");let t=e(this).closest("[data-tabs]").find(".slick-slider");t.length&&t.slick("refresh")}))}))}(jQuery),function(e){e((function(){e(window).width()>719?function(e){e((function(){e(".sitetabs__header ul").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.sitetabs").find("div.sitetabs__content").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery):e(".sitetabs__content h2").click((function(t){e(this).closest(".sitetabs__content").find(".sitetabs__main h2").not(e(this)).removeClass("active"),e(this).toggleClass("active"),e(this).next(".sitetabs__main").slideToggle().toggleClass("active")}))}))}(jQuery)})),window.addEventListener("load",(function(){e()}))})(),(()=>{"use strict";e.r(t)})()})();
//# sourceMappingURL=bundle.js.map