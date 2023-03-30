function convertSecondToMinute(current){
    
      
      var current_minutes = Math.floor(current / 60);
      var current_seconds = Math.round(current - current_minutes * 60);
      let current_time =
        current_minutes +
        ":" +
        (current_seconds < 10 ? "0" + current_seconds : current_seconds);
return current_time
}
export default convertSecondToMinute