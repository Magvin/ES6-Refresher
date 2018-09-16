var result = []
var newResult = []

function newLooping() {

    for (var i = 0; i < result.length; i++) {
        newResult.push(...result[i].matches)
        console.log(newResult)
    }
    return newResult
}
function run(teamKey) {
    fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json').then(res => res.json()).then(json => result.push(...json.rounds))
    newLooping()
    newResult.forEach(team => {
        if (team.team1.key === teamKey) {
            goals += team.score1
            console.log(total1)



        } else if (team.team2.key === teamKey)
            goals += team.score2
    })
    goals = null;
    return goals;

}
run('arsenal')


/// OR


var goals = 0;
function run(teamKey) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var round = myObj.rounds;
            var newResult = []
            round.forEach(match => {

                newResult.push(...match.matches)
            })

            for (var key in newResult) {

                if (newResult[key].team1.key === teamKey) {
                    goals += newResult[key].score1

                } else if (newResult[key].team2.key === teamKey) {

                    goals += newResult[key].score2
                }
            }
        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json", true);
    xmlhttp.send();
    return goals
}
