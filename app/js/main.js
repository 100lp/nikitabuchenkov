var FormSender = (function(){

  // Подключаем прослушку событий
  function _setUpListners(){
    $('#contact-form').on('submit', _showResult);
  }

  // Обработка сабмита формы #contact-form
  function _showResult(ev){
    ev.preventDefault();

    // var form = $(this),
    //   url = '/ajax.php',
    //   defObject = _ajaxForm(form, url);

    // defObject.done(function(ans){
    //   var ul = $('.list');
    //   for (var item in ans){
    //     var markup = '<li>' + item + ":" + ans[item] + '</li>';
    //     ul.append(markup);
    //   }
    // })

  }

  // Универсальная функция ajax
  // function _ajaxForm(form, url){

  //   var data = form.serialize(),

  //     defObj = $.ajax({
  //       type : "POST",
  //       url : url,
  //       dataType : "JSON",
  //       data: data
  //     }).fail( function(){
  //       console.log('Проблемы на стороне сервера');
  //     })

  //   return defObj;
  // }

  // Возвращаем в глобальную область видимости
  return {
    init: function () {
      _setUpListners();
    }
  }

}());

FormSender.init();
