let a = document.getElementById('info');
let b = document.getElementById('forward')
let upload = document.getElementById("readit");
let lastone = document.getElementById('lastone')
let datatype = document.getElementById('datatype');
let file = document.getElementById("box");
let movies = [];
let vc;


const addMovie = function () {
    let movie = {
        date: Date.now(),
        hash: vc,
        info: a.value,
    }
    movies.push(movie);
}



upload.addEventListener('change',()=>{
    let fr = new FileReader();
    fr.readAsText(upload.files[0])
    fr.onload = function(){
        vc = fr.result;
    };
    console.log(vc)
})

lastone.onclick =function() {   
    addMovie();
    if(localStorage.getItem("mylist")==null){
        localStorage.setItem("mylist", JSON.stringify(movies))
    }else{
        var stored = JSON.parse(localStorage.getItem("mylist"));
        stored.forEach(element => {
            movies.push(element)
        });
        // movies.push(stored);
        localStorage.setItem("mylist", JSON.stringify(movies));
    }
    // localStorage.setItem("mylist", JSON.stringify(movies))

    

    window.location = "EvidenceList.html";
}