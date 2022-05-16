$(function(){
  $('#btn').on('click', function() {
    alert($('#station').val());
    $.ajax({
      url: "http://express.heartrails.com/api/json?method=getStations&name=" + $('#station').val(),
      dataType : 'jsonp',
    }).done(function(data){
      $('#line').text(data.response.station[0].line);
    }).fail(function(data){
      alert('通信に失敗しました。')
    });
  });
});