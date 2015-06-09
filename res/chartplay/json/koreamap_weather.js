var chart = jui.include("chart.builder");

var data = [{
    id: "����",
    temperature: 25,
    weather: "cloudy"
}, {
    id: "��õ",
    temperature: 28,
    weather: "sunny",
    x: 35,
    y: 150
}, {
    id: "����",
    temperature: 25,
    weather: "rain"
}, {
    id: "���",
    temperature: 26,
    weather: "rain",
    x: 195
}, {
    id: "�泲",
    temperature: 22,
    weather: "sunny"
}, {
    id: "����",
    temperature: 26,
    weather: "murky"
}, {
    id: "����",
    temperature: 25,
    weather: "cloudy",
    x: 110
}, {
    id: "���",
    temperature: 25,
    weather: "sunny"
}, {
    id: "�泲",
    temperature: 26,
    weather: "cloudy"
}, {
    id: "����",
    temperature: 24,
    weather: "murky",
    x: 60,
    y: 575
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "../../lib/jui/img/map/korea-500x650.svg",
            width : 500,
            height : 650
        },
        data : data
    }],
    brush : [{
        type : "map.weather",
        format : function(id) {
            if(id == "����") {
                return "����/���";
            } else if(id == "��õ") {
                return "����5��";
            }
        }
    }],
    style : {
        mapPathBackgroundColor : "white",
        mapPathBorderColor : "#a9a9a9"
    }
});