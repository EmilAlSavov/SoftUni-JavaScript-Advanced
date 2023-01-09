function AreaAndVolumeCalc(area, vol, input){
    let inputArr = JSON.parse(input);
    let res = []
    for (const obj of inputArr) {
        let calcedArea = area.call(obj);
        let calcedVol = vol.call(obj);

        res.push({area: calcedArea, volume: calcedVol})
    }

    return res;
}