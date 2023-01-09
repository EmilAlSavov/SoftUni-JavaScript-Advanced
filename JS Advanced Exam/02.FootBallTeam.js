class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(playersArr){
        let names = []
        for (const player of playersArr) {
            let name = player.split('/')[0];
            let age = player.split('/')[1];
            let value = Number(player.split('/')[2]);

            if(!names.some(n => n.name === name)){
                names.push(name);
            }

            let existingPLayer = this.invitedPlayers.find(p => p.name === name);
            if(existingPLayer !== undefined){
                if(value > existingPLayer.value){
                    existingPLayer.value = value;
                }
            } else{
                this.invitedPlayers.push({name, age, value})
            }
        }

        return `You successfully invite ${names.join(', ')}.`
    }

    signContract(selectedPlayer){
        let name = selectedPlayer.split('/')[0];
        let offerPrice = Number(selectedPlayer.split('/')[1]);

        let player = this.invitedPlayers.find(p => p.name === name);

        if(player === undefined){
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(offerPrice < player.value){
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.value - offerPrice} million more are needed to sign the contract!`);
        }

        player.value = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offerPrice} million dollars.`;
    }

    ageLimit(name, age){
        let player = this.invitedPlayers.find(p => p.name === name);

        if(player === undefined){
            throw new Error(`${name} is not invited to the selection list!`)
        }

        let difference = age - player.age;

        if(difference <= 0){
            return `${name} is above age limit!`
        } else if(difference < 5){
            return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
        } else{
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
    }

    transferWindowResult(){
        this.invitedPlayers = this.invitedPlayers.sort((a,b) => {if(a.name < b.name){return - 1}else if(a.name > b.name){return 1}else{return 0;}});

        let result = 'Players list:';

        for (const player of this.invitedPlayers) {
            result += `\nPlayer ${player.name}-${player.value}`;
        }

        return result;
    }

}


