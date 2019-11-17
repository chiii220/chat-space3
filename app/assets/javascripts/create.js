$(function(){
  $('.form__message').on('submit', function(e){
    e.preventDefault()
    // console.logを用いてイベント発火しているか確認]
    var formData = new FormData(this);
    var url = $(this).attr('.form__message')
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: FomeData ,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(messages) {
      console.log(messages);
    })
  })
})