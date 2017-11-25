
$("#category-button").on("click", function(){
    let categories = ["COUNTRY", "ROCK", "RAP", "HIP HOP", "R&B", "ALTERNATIVE", "GRUNGE", "BOY BANDS"]
    let category = categories[Math.floor(Math.random() * categories.length)];
    console.log (category);
    let categoryDiv = $("<p>");

    categoryDiv.text("Category is: " + category + ".  Good Luck Shitass!");
    $(".category-button p").remove();
    $(".category-button").append(categoryDiv);
});



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

      //   Create <img> element and add album cover             
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

      // Add audio player, album cover and song and artist name to the result box

       $("#audio-player").append(audioPlayer);
       $("#album-cover").append(artwork);
       $("#song-info").append(artistNameHolder);
       $("#song-info").append(songNameHolder);
      });
  });