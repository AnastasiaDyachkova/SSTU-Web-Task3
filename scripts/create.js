let movieCollection = [];

console.log(movieCollection);

class Movie{
	constructor(){
		this.id = Math.random().toString(36).substr(2,8);
		this.title = document.getElementById("title").value.trim(),
		this.country = document.getElementById("country").value.trim(),
		this.genres = document.getElementById("genres").value.trim(),
		this.filmDirector1 = document.getElementById("filmDirector1").value.trim(),
		this.filmDirector2 = document.getElementById("filmDirector2").value.trim(),
		this.filmDirector3 = document.getElementById("filmDirector3").value.trim(),
		this.scenario = document.getElementById("scenario").value.trim(),
		this.producer = document.getElementById("producer").value.trim(),
		this.operator = document.getElementById("operator").value.trim(),
		this.composer = document.getElementById("composer").value.trim(),
		this.budget = document.getElementById("budget").value.trim(),
		this.budgetCurrency = document.getElementById("budgetCurrency").value.trim(),
		this.worldFees = document.getElementById("worldFees").value.trim(),
		this.worldFeesCurrency = document.getElementById("worldFeesCurrency").value.trim(),
		this.age = document.getElementById("age").value.trim(),
		this.hours = document.getElementById("hours").value.trim(),
		this.minutes = document.getElementById("minutes").value.trim(),
		this.seconds = document.getElementById("seconds").value.trim(),
		this.date = new Date(document.getElementById("year").value.trim(),
		document.getElementById("month").value.trim(),
		document.getElementById("day").value.trim()),
		this.photo = document.getElementById("photo").value.trim(),
		this.year = document.getElementById("year").value.trim()
	}
}


// formMovie.addEventListener("submit", createMovie);

// function createMovie(){
// 	let movie = new Movie();

// 	if(JSON.parse(localStorage.getItem('movieCollection'))!=null){
// 		movieCollection = JSON.parse(localStorage.getItem('movieCollection'));
// 	}

// 	movieCollection.push(movie);

// 	localStorage.setItem('movieCollection',JSON.stringify(movieCollection));

// 	let div = document.getElementById('message');
// 	div.innerHTML = 'Фильм добавлен'
// }

formMovie.addEventListener("submit", sumbitForm);


function sumbitForm(){
    clearDivMessageError();
    if(checkEmptyInput() == false){
        createMovie();
        addMessageSuccess("Фильм успешно добавлен в коллекцию!");
    }
    event.preventDefault();
}

function createMovie(){
    let movie = new Movie();

    if(JSON.parse(localStorage.getItem('movieCollection')) != null){
        movieCollection = JSON.parse(localStorage.getItem('movieCollection'));
    }

    movieCollection.push(movie);

    localStorage.setItem('movieCollection', JSON.stringify(movieCollection));
}


function checkEmptyInput(){
    let res = false;

    // if(document.getElementById("iTitleMovie").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Название");
    //     res = true;
    // }
    // if(document.getElementById("iCountry").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Страна");
    //     res = true;
    // }
    // if(document.getElementById("iGenre").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Жанр");
    //     res = true;
    // }
    // if(document.getElementById("iDirector1").value.trim() == ""){
    //     addMessageError("Вы не заполнили первое поле Режиссер");
    //     res = true;
    // }
    // if(document.getElementById("iMovieScript").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Сценарий");
    //     res = true;
    // }
    // if(document.getElementById("iProducer").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Продюсер");
    //     res = true;
    // }
    // if(document.getElementById("iOperator").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Оператор");
    //     res = true;
    // }
    // if(document.getElementById("iComposer").value.trim() == ""){
    //     addMessageError("Вы не заполнили поле Композитор");
    //     res = true;
    // }
    return res;
}

function addMessageError(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "p-mes-error");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function addMessageSuccess(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "p-mes-success");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function clearDivMessageError(){
    let div = document.getElementById('message');

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}