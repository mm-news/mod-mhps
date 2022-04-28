$(document).ready(function(){
    $(".lang").click(function (e) { 

      const wait = setTimeout(redirect, 100)

      function redirect() {

        var lang = window.location.hash.split('#')[1]
        window.location.hash = ""
        window.location.pathname = `/${lang}/home`

      }
    });
  });