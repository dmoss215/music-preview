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
          let artist = newResponse.results[0].artistName;
          let track = newResponse.results[0].trackName;
          let albumCover = newResponse.results[0].artworkUrl100;

          console.log(response);
          console.log(newResponse); 
          console.log(preview); 

      // Create a source element with the preview url
      //  <source id="song-result" src="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview19/v4/41/cb/e3/41cbe381-2991-071b-7985-76afbbabab6a/mzaf_5021382539648526963.plus.aac.p.m4a" type="audio/mp4" />
          // let songDiv = $("<source>");
          // songDiv.attr("src", preview);
          // songDiv.attr("type", "audo/mp4");

      //   Create <img> element and add album cover              <img src="http://is3.mzstatic.com/image/thumb/Music6/v4/45/33/1a/45331a92-1134-8838-8780-339919d354a1/source/100x100bb.jpg" alt="">
      let artwork = $("<img>");
      artwork.attr("src", albumCover);

      // Create div for artist and song title
      let artistNameHolder = $("<p>");
      artistNameHolder.text(artist);

      let songNameHolder = $("<p>");
      songNameHolder.text(track);
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

      // Add audio player to the result box

       $("#audio-player").append(audioPlayer);
       $("#album-cover").append(artwork);
       $("#song-info").append(artistNameHolder);
       $("#song-info").append(songNameHolder);
      });
  });