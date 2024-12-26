const checkweather = async (name) => {
    const apiid = "a4b90b6bd7fbf36be38502a9eaa7b5a7"
    const apiurl = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${name},{country code}&appid=${apiid}`

    const res = await fetch(apiurl)
    const data = await res.json()
    console.log(data)

    document.querySelector("#country").innerHTML = data.name
}
checkweather("hyderabad")