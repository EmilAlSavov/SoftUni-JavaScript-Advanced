function AssemblyLine(){
    return {
        hasClima: function(obj) {

            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = () => {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp--;
                }
            }

            return obj;
        },
        hasAudio: function(obj) {

            obj.currentTrack = {name: null, artist: null};
            obj.nowPlaying = () => {
                if (obj.currentTrack.name === null || obj.currentTrack.artist === null) {

                } else {

                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`)
                }
            }

            return obj;
        },
        hasParktronic: function(obj) {

            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance < 0.5) {
                    console.log("Beep!");
                }
            }

            return obj;
        }
    }

}
