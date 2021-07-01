const axios = require("axios");
const baseurl = "https://mobileapi.dsbcontrol.de";

async function getAuthtoken(username, password) {
    try {
        var response = await axios.get(`${baseurl}/authid?user=${username}&password=${password}&bundleid&appversion&osversion&pushid`);
        if (response.data == "") throw ("Wrong username or password")
        return response.data;
    } catch (error) {
        throw (error);
    }
}

async function getTimetables(authtoken) {
    try {
        var response = await axios.get(`${baseurl}/dsbtimetables?authid=${authtoken}`);
        var timetables = response.data;

        var urls = [];
        timetables.forEach(timetable => {
            urls.push({
                title: timetable.Title,
                url: timetable.Childs[0].Detail,
                time: timetable.Date
            })
        });

        return urls;
    } catch (error) {
        throw (error);
    }
}

module.exports = {
    getAuthtoken: getAuthtoken,
    getTimetables: getTimetables
}