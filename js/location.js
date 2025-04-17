// fetch('https://api.miip.my')
// fetch('https://members.ip-api.com/')
fetch('https://freeipapi.com/api/json/')
        .then(res => {
                if (!res.ok){
                        throw new Error ("Network response was not ok");
                }else{
                        return res.json()
                }
        })
        .then(data => {
                // alert(JSON.stringify(data))
                document.getElementById("location").innerHTML = `Charities near <strong>${data.cityName}, ${data.regionName}</strong>`
        })
        .catch(error => {
                console.error('Fetch error:', error);
                document.getElementById("location").innerHTML =
                        `We weren't able to retrieve your location.`;
        });
