function filter(){
    document.querySelectorAll(".card-movie").forEach(e => e.remove());
    
    let country = document.getElementById("iCountryFilter").value;
    let genre = document.getElementById("iGenreFilter").value;
    let year = document.getElementById("iYearFilter").value;
    
    //Получаю коллекцию фильмов из LS
    let allMoviesInLS =  JSON.parse(localStorage.getItem('movieCollecton'));
    
    //Отрисовываю из LS карточки тех фильмов, которые соответствуют параметрам
    if(allMoviesInLS!=null){

        if(country != "Любая" & genre != "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country & allMoviesInLS[i].genre == genre & allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }

        if(country != "Любая" & genre != "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country & allMoviesInLS[i].genre == genre) addMovieOnPage(allMoviesInLS[i]);
            }
        }

        if(country != "Любая" & genre == "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country & allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country != "Любая" & genre == "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].country == country) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre != "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].genre == genre & allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre != "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if( allMoviesInLS[i].genre == genre) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre == "Любой" & year != "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                if(allMoviesInLS[i].yearF == year) addMovieOnPage(allMoviesInLS[i]);
            }
        }
        if(country == "Любая" & genre == "Любой" & year == "Любой") {
            for(let i=0; i<allMoviesInLS.length; i++){
                addMovieOnPage(allMoviesInLS[i]);
            }
        }
    }
}
