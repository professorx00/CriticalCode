$(document).ready(function () {

    let spells = $.ajax({
            url: "/api/spells",
            method: "GET",
        })
        .then(function (data) {
            console.log(data);
        });

    let classes = $.ajax({
            url: "/api/classes",
            method: "GET",
        })
        .then(function (data) {
            console.log(data);
        });
    let skills = $.ajax({
            url: "/api/skills",
            method: "GET",
        })
        .then(function (data) {
            console.log(data);
        });
    let armor = $.ajax({
            url: "/api/armor",
            method: "GET",
        })
        .then(function (data) {
            console.log(data);
        });

    $.when(spells, classes, skills, armor).done(function (resSpells, resClasses, resSkills, resArmor) {

        console.log(resSpells);
        console.log(resClasses);
        console.log(resSkills);
        console.log(resArmor);
    });

});