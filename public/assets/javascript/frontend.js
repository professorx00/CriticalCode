$(document).ready(function () {
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

    // $("#logout").on("click", function () {
    //     $.ajax({
    //             url: "/logout",
    //             method: "GET",
    //         })
    //         .then(function (data) {
    //             console.log(data);
    //         });

    // })

    let classes = $.ajax({
        url: "/api/classes",
        method: "GET"
    }).then(function (data) {
        console.log(data);
    });
    let armor = $.ajax({
        url: "/api/armor",
        method: "GET"
    }).then(function (data) {
        console.log(data);
    });

    $.when(classes, skills, armor).done(function (
        resClasses,
        resSkills,
        resArmor
    ) {
        console.log(resClasses);
        console.log(resSkills);
        console.log(resArmor);
    });
});
