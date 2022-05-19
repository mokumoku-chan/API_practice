$(function(){
  $('#btn').on('click', function() {
    $.ajax({
      url: "http://express.heartrails.com/api/json?method=getStations&name=" + $('#station').val(),
      dataType : 'jsonp',
    }).done(function(data){
      console.log(data.response.station.length);
      for(var i = 0; i < data.response.station.length; i++){
        console.log(data.response.station[i].line);
      }
        $('#line').text(data.response.station[0].line);
    }).fail(function(data){
      alert('通信に失敗しました。')
    });
  });
});