// fetch('https://api.miip.my')
fetch('http://ip-api.com/json/')
        .then(res => res.json() )
        .then(data => {
                // alert(JSON.stringify(data)) 
                if (data.status === "success") {
                        document.getElementById("location").innerHTML = `Charities near <strong>${data.city}, ${data.region}</strong>`
                } else {
                        document.getElementById("location").innerHTML = `We weren't able to retrieve your location.`
                }
        });
