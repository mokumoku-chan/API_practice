$(function(){
  $('#btn').on('click', function() {
    $.ajax({
      url: "http://express.heartrails.com/api/json?method=getStations&name=" + $('#station').val(),
      dataType : 'jsonp',
    }).done(function(data){

      let lines = []
      for(var i = 0; i < data.response.station.length; i++){
          console.log(data.response.station[i].line);
          lines.push(data.response.station[i].line)
        }

        console.log(lines)

        $('#line').text(lines);
    }).fail(function(data){
      alert('通信に失敗しました。')
    });
  });
});