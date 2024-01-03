async function getMatchData() { 
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=a228a8fa-f207-4212-8597-8fedbdd2c2d2&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status !="success")return;
            
            const matchesList=data.data;
           
            if(!matchesList)return[];
            
            const relevantData=matchesList.filter(match=>match.id=="501b677a-742c-4e8a-aff6-9a735e45953c").map(match =>`${match.name},${match.status}`);
            
            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
           
            return relevantData;
        })
        .catch(e=>console.log(e));
        
}

getMatchData();