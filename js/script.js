var users = [
    {
        name: "Georgina",
        gender: 'F',
        hobby: 'Tejo',
        avatar: 'avatar1.png'
    },
    {
        name: "Carmela",
        gender: 'F',
        hobby: 'Tejo',
        avatar: 'avatar2.png'
    },
    {
        name: "José Repelín Cuchara",
        gender: 'M',
        hobby: 'Futbol',
        avatar: 'avatar3.png'
    },
    {
        name: "Enrique",
        gender: 'M',
        hobby: 'Caída libre',
        avatar: 'avatar4.png'
    },
    {
        name: "Sofía",
        gender: 'F',
        hobby: 'Singing',
        avatar: 'avatar1.png'
    },
    {
        name: "Leo",
        gender: 'M',
        hobby: 'Guitar',
        avatar: 'avatar6.png'
    },
    {
        name: "Rosamel",
        gender: 'F',
        hobby: 'Fighting',
        avatar: 'avatar5.png'
    },
    {
        name: "Florentino",
        gender: 'M',
        hobby: 'Sleep',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function () {
    // console.log('web page charged!!');
    function search() {
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby + " from var");
        console.log(hobbyField.value + ' only from console.log');

        //get gender
        var genderField = document.getElementById("gender");
        console.log(genderField.options[genderField.selectedIndex].value);
        console.log(genderField.value);

        var resultsHTML = '';
        var numUsers = users.length;

        for (var i = 0; i < numUsers; i++) {

            if (genderField.value == 'A' || genderField.value == users[i].gender) {
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHTML += '<div class="person-row">\
                                        <img src="images/' + users[i].avatar + '" />\
                                        <div class="person-info">\
                                            <div>' + users[i].name + '</div>\
                                            <div>' + users[i].hobby + '</div>\
                                        </div>\
                                        <button>Add as friend</button>\
                                    </div>'
                }
            }
        }

        resultsJs.innerHTML = resultsHTML;

    };

    var resultsJs = document.getElementById('results');
    var searchBtnJs = document.getElementById('searchBtn');
    // console.log(searchBtn);
    searchBtnJs.addEventListener('click', search);
});