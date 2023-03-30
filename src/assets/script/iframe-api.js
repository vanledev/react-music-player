import '../../redux/slice'
import { useSelector,useDispatch } from 'react-redux';



  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




  
  


  window.playerActive = playerActive;
  function playerActive() {
    "use strict";
    if (window.player && window.player.hasOwnProperty("getPlayerState")) {
      return true;
    }
  }
 
 window.cueVideoById = function (id) {
if (window.player){
window.player.cueVideoById({
      videoId: id
    });

}
  
 }
  
  window.playerChangeVideoId = playerChangeVideoId;
  function playerChangeVideoId(id) {
    "use strict";

    window.player.cueVideoById({
      videoId: id
    });
  }

  /**
   * Seek the video to the currentTime.
   * (And mark that the HTML slider *don't* move.)
   *
   * :param currentTime: 0 <= number <= 100
   */
  window.playerCurrentTimeChange = playerCurrentTimeChange;
  function playerCurrentTimeChange(currentTime) {
    "use strict";

    player.personalPlayer.currentTimeSliding = false;
    if (playerActive()) {
      player.seekTo(
        (currentTime * player.getDuration()) / 100,
        true
      );
    }
  }

  /**
   * Mark that the HTML slider move.
   */
  window.playerCurrentTimeSlide = playerCurrentTimeSlide;
  function playerCurrentTimeSlide() {
    "use strict";

    player.personalPlayer.currentTimeSliding = true;
  }
    /**
   * Display
   *   some video informations to #YouTube-player-infos,
   *   errors to #YouTube-player-errors
   *   and set progress bar #YouTube-player-progress.
   */
  // window.playerDisplayInfos = playerDisplayInfos;
  // function playerDisplayInfos() {
  //   "use strict";

  //   if (this.nbCalls === undefined || this.nbCalls >= 3) {
  //     this.nbCalls = 0;
  //   } else {
  //     ++this.nbCalls;
  //   }

  //   var indicatorDisplay =
  //     '<span id="indicator-display" title="timing of informations refreshing">' +
  //     ["|", "/", String.fromCharCode(8212), "\\"][this.nbCalls] +
  //     "</span>";

  //   if (playerActive()) {
  //     var state = player.getPlayerState();

  //     var current = player.getCurrentTime();
  //     var current_minutes = Math.floor(current / 60);
  //     var current_seconds = Math.round(current - current_minutes * 60);
  //     let current_time =
  //       current_minutes +
  //       ":" +
  //       (current_seconds < 10 ? "0" + current_seconds : current_seconds);

  //     var duration = player.getDuration();
  //     var duration_minutes = Math.floor(duration / 60);
  //     var duration_seconds = Math.round(duration - duration_minutes * 60);
  //     let duration_time =
  //       duration_minutes +
  //       ":" +
  //       (duration_seconds < 10 ? "0" + duration_seconds : duration_seconds);

  //     var currentPercent = current && duration ? (current * 100) / duration : 0;

  //     var fraction = player.hasOwnProperty("getVideoLoadedFraction")
  //       ? player.getVideoLoadedFraction()
  //       : 0;

  //     var url = player.getVideoUrl();

  //     if (!current) {
  //       current = 0;
  //     }
  //     if (!duration) {
  //       duration = 0;
  //     }

  //     var volume = player.getVolume();

  //     if (!window.player.personalPlayer.currentTimeSliding) {
  //       document.getElementById("YouTube-player-progress").value =
  //         currentPercent;
  //     }
  //     document.getElementById("current-time").textContent = current_time;
  //     document.getElementById("duration").textContent = duration_time;

  //     // document.getElementById('YouTube-player-infos').innerHTML = (
  //     //     indicatorDisplay
  //     //         + 'URL: <a class="url" href="' + url + '">' + url + '</a><br>'
  //     //         + 'Quality: <strong>' + player.getPlaybackQuality() + '</strong>'
  //     //         + ' &mdash; Available quality: <strong>' + player.getAvailableQualityLevels() + '</strong><br>'
  //     //         + 'State <strong>' + state + '</strong>: <strong>' + playerStateValueToDescription(state) + '</strong><br>'
  //     //         + 'Loaded: <strong>' + (fraction*100).toFixed(1) + '</strong>%<br>'
  //     //         + 'Duration: <strong>' + current.toFixed(2) + '</strong>/<strong>' + duration.toFixed(2) + '</strong>s = <strong>' + currentPercent.toFixed(2) + '</strong>%<br>'
  //     //         + 'Volume: <strong>' + volume + '</strong>%'
  //     // );

  //     // document.getElementById('YouTube-player-errors').innerHTML = '<div>Errors: <strong>' + player.personalPlayer.errors + '</strong></div>';
  //   } else {
  //     // document.getElementById('YouTube-player-infos').innerHTML = indicatorDisplay;
  //   }
  // }

  /**
   * Display embed code to #YouTube-player-fixed-infos.
   */
  // window.playerDisplayFixedInfos = playerDisplayFixedInfos;
  // function playerDisplayFixedInfos() {
  //   "use strict";

  //   if (playerActive()) {
  //     document.getElementById("YouTube-player-fixed-infos").innerHTML =
  //       "Embed code: <textarea readonly>" +
  //       player.getVideoEmbedCode() +
  //       "</textarea>";
  //   }
  // }


  /**
   * Pause.
   */
  // window.playerPause = playerPause;
  // function playerPause() {
  //   "use strict";

  //   if (playerActive()) {
  //     player.pauseVideo();
  //   }
  // }

  /**
   * Play.
   */
  // window.playerPlay = playerPlay;
  // function playerPlay() {
  //   "use strict";
  //   if (playerActive()) {
  //     player.playVideo();
  //   }

  //   return;
  // }

  /**
   * Return the state decription corresponding of the state value.
   * If this value is incorrect, then return unknow.
   *
   * See values:
   * https://developers.google.com/youtube/iframe_api_reference#Playback_status
   *
   * :param number: any
   * :param unknow: any
   *
   * :return: 'unstarted', 'ended', 'playing', 'paused', 'buffering', 'video cued' or unknow
   */
  // window.playerStateValueToDescription =
  //   playerStateValueToDescription;
  // function playerStateValueToDescription(state, unknow) {
  //   "use strict";

  //   var STATES = {
  //     "-1": "unstarted", // YT.PlayerState.
  //     0: "ended", // YT.PlayerState.ENDED
  //     1: "playing", // YT.PlayerState.PLAYING
  //     2: "paused", // YT.PlayerState.PAUSED
  //     3: "buffering", // YT.PlayerState.BUFFERING
  //     5: "video cued",
  //   }; // YT.PlayerState.CUED

  //   return state in STATES ? STATES[state] : unknow;
  // }

  /**
   * Stop.
   */
  // window.playerStop = playerStop;
  // function playerStop() {
  //   "use strict";

  //   if (playerActive()) {
  //     window.player.stopVideo();
  //     window.player.clearVideo();
  //   }
  // }

  /**
   * Change the volume.
   *
   * :param volume: 0 <= number <= 100
   */
  // window.playerVolumeChange = playerVolumeChange;
  // function playerVolumeChange(volume) {
  //   "use strict";

  //   if (playerActive()) {
  //     player.setVolume(volume);
  //   }
  // }

  /**
   * Main
   */
