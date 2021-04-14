let commentsBlock = document.createElement('div');

function addCommentsOnPage(movie){

    //деструктуризация объекта movie
    let {id, title} = movie;

    let allCommentsInLS =  JSON.parse(localStorage.getItem('commentCollection'));
    let commentsThisMovie = [];

    if(allCommentsInLS!=null){
        for(let i=0; i<allCommentsInLS.length; i++) {
            if(allCommentsInLS[i].movieId == id) commentsThisMovie.push(allCommentsInLS[i]);
        }
    }

    commentsBlock.setAttribute("class", "comments-block");
    document.getElementById("card-movie").appendChild(commentsBlock);
    
    let commentTitleMovie = document.createElement('p');
    commentTitleMovie.setAttribute("class", "comment-title-movie");
    commentTitleMovie.textContent = "Отзывы к фильму \"" + title + "\"";
    commentsBlock.appendChild(commentTitleMovie);

    
    if(commentsThisMovie.length == 0){
        let commentEmpty = document.createElement('p');
        commentEmpty.setAttribute("class", "comment-empty");
        commentEmpty.textContent = "На этот фильм еще нет отзывов! Будьте первым!"
        commentsBlock.appendChild(commentEmpty);
    }
    else if(commentsThisMovie!=null){                                   //Оператор spread
        for(let i=0; i<commentsThisMovie.length; i++) addCommentOnPage({...commentsThisMovie[i]});
    }

    let commentsButtonReset = document.createElement('input');
    commentsButtonReset.type = "button";
    commentsButtonReset.value = "Закрыть";
    commentsButtonReset.id = "comment-button-reset";
    commentsBlock.appendChild(commentsButtonReset);

    commentsButtonReset.onclick = function commentsReset(){
        while (commentsBlock.firstChild) {
            commentsBlock.removeChild(commentsBlock.firstChild);
        }
        document.getElementById("card-movie").removeChild(commentsBlock);
    }
}

function addCommentOnPage({name, job, text, grade}){
    let commentName = document.createElement('p');
    commentName.setAttribute("class", "comment-name");
    commentName.textContent = "(" + grade + ") " + name + ", " + job;
    commentsBlock.appendChild(commentName);

    let commentText = document.createElement('p');
    commentText.setAttribute("class", "comment-text");
    commentText.textContent = text;
    commentsBlock.appendChild(commentText);
}