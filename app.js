$("#submit-button").on("click", function() {
    let songName = $("#song-search").val();
    var queryURL = "https://itunes.apple.com/search?term=" + songName + "&limit=2";
      
      console.log(songName);
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
          // Parse results into JSON because they are returned as a string, then get the preview url
          let newResponse = JSON.parse(response);
          let preview = newResponse.results[0].previewUrl;

          console.log(response);
          console.log(newResponse); 
          console.log(preview); 

      // Create a source element with the preview url
      //  <source id="song-result" src="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview19/v4/41/cb/e3/41cbe381-2991-071b-7985-76afbbabab6a/mzaf_5021382539648526963.plus.aac.p.m4a" type="audio/mp4" />
          // let songDiv = $("<source>");
          // songDiv.attr("src", preview);
          // songDiv.attr("type", "audo/mp4");

      /**
      * Build out HTML Audio Player
      */
      let audioPlayer = $("<audio>");
      audioPlayer.addClass("myAudioPlayer");
      audioPlayer.attr("src", preview);

      // Adds the audio player controls to the HTML5 Audio Element
      audioPlayer.attr("controls", "controls");

      // This can be changed to true to autoplay the track
      audioPlayer.attr("autoplay", true);

      // Add audio player to the jumbotron
      // $jumbotron.append(audioPlayer);

       $("#result-box").append(audioPlayer);
      });
  });