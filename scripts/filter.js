function filter() {
    document.querySelectorAll(".card-movie").forEach(e => e.remove());

    let country = document.getElementById("iCountryFilter").value;
    let genres = document.getElementById("iGenreFilter").value;
    let year = document.getElementById("iYearFilter").value;

    //Получаю коллекцию фильмов из LS
    let allMoviesInLS = JSON.parse(localStorage.getItem('movieCollection'));
    console.log(allMoviesInLS);
    //Отрисовываю из LS карточки тех фильмов, которые соответствуют параметрам
    if (allMoviesInLS != null) {
        console.log(country, genres, year);

        if (country != "Любая" & genres != "Любой" & year != "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                if (allMoviesInLS[i].country == country & allMoviesInLS[i].genres == genres & allMoviesInLS[i].year == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }

        if (country != "Любая" & genres != "Любой" & year == "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                if (allMoviesInLS[i].country == country & allMoviesInLS[i].genres == genres) addMovieOnPage(allMoviesInLS[i]);
            }
        }

        if (country != "Любая" & genres == "Любой" & year != "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                if (allMoviesInLS[i].country == country & allMoviesInLS[i].year == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if (country != "Любая" & genres == "Любой" & year == "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                if (allMoviesInLS[i].country == country) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if (country == "Любая" & genres != "Любой" & year != "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                if (allMoviesInLS[i].genres == genres & allMoviesInLS[i].year == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if (country == "Любая" & genres != "Любой" & year == "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                if (allMoviesInLS[i].genres == genres) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if (country == "Любая" & genres == "Любой" & year != "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                if (allMoviesInLS[i].year == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if (country == "Любая" & genres == "Любой" & year == "Любой") {
            for (let i = 0; i < allMoviesInLS.length; i++) {
                addMovieOnPage(allMoviesInLS[i]);
            }
        }
    }
}