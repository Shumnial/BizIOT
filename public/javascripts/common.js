"use strict";$(function(){function o(){$(this).find(".popup").show()}function s(){$(".popup").hide()}function i(o){27===o.keyCode&&s()}function e(o){$(o.target).hasClass("popup")&&s()}$(".slider").slick({dots:!0,infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0,arrows:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1}}]});$(".event__info").on("click",o),$(document).on("click",".popup__close",s),$(document).on("click",".popup",e),$(document).on("keydown",i)});
//# sourceMappingURL=../javascripts/common.js.map
