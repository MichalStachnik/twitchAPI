$(document).ready(function(){
    
    var streamers = ['trumpsc', 'thijshs', 'lirik', 'cincinbear', 'drdisrespectlive', 'firebat', 'freecodecamp', 'comster404']
    
    //Asynchronous JavaScript   
    // $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/cincinbear/?callback=?', function(res){
    //     console.log(res)
    // })

    streamers.forEach(function(streamer){
        $.getJSON(`http://wind-bow.gomix.me/twitch-api/streams/${streamer}/?callback=?`, function(res){
            console.log(res)
            if(res.stream == null){
                $('#streamers').append(`<li>${streamer} is offline`)
            }
            else{
                $('#streamers').append(
                    `<li>
                        <img src="${res.stream.preview.medium}">
                        <a href="http://www.twitch.com/${streamer}" target="_blank"
                            <h4>${res.stream.channel.display_name}</h4>
                            <p>Viewers: ${res.stream.viewers}</p>
                            <p>Game: ${res.stream.game}</p>
                        </a>
                    </li>`)
            }
        })
    })
})