function bsNotification(i){var t=i.image,o=i.title,a=i.text,s=i.time,n="",e="";i.color&&(e=" bg-"+i.color),i.shadow&&(n=" shadow");var c="<div class='bootstrap-notification"+e+n+"'><div class='notification-img-wrapper'><img src='"+t+"' alt='image'></div><div class='in'><div class='notification-title'>"+o+"</div><div class='notification-text'>"+a+"</div></div><a href='#' class='notification-close' data-dismiss='notification'></a></div>";$("body").append(c),setTimeout(()=>{$(".bootstrap-notification").addClass("show")},500),void 0!==s&&setTimeout(()=>{$(".bootstrap-notification").removeClass("show")},s)}$(document).on("click","a[data-dismiss=notification]",(function(){$(this).parent(".bootstrap-notification").removeClass("show"),setTimeout(()=>{$(".bootstrap-notification").html("")},1e3)})),bsNotification({image:"img/image.jpg",title:"Success",text:"Something went wrong!",time:3e3,color:"primary",shadow:!0});