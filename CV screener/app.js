
let cvs = [
  {
"login": "mojombo",
"id": 1,
"node_id": "MDQ6VXNlcjE=",
"avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
"email": "mojombo@gmail.com",
    "skills": [
        "Computer science",
        "Html5",
        "Photoshop",
        "Php"
    ],
    "education": [
        {
            "name": "River Brook university",
            "dates": "2011"
        }
    ],
    "experience": [
        {
            "title": "Front End Developer",
        }
    ]
},
{
"login": "defunkt",
"id": 2,
"node_id": "MDQ6VXNlcjI=",
"avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
"email": "defunkt@gmail.com",
    "skills": [
        "Cms",
        "Design",
        "Wordpress",
        "Sql"
    ],
    "education": [
        {
            "name": "Harvard university",
            "dates": "2013"
        }
    ],
    "experience": [
        {
            "title": "Back End Developer",
        }
    ]
},
{
"login": "pjhyett",
"id": 3,
"node_id": "MDQ6VXNlcjM=",
"avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
"email": "pjhyett@gmail.com",
    "skills": [
        "Api",
        "Adobe",
        "Benchmark",
        "Javascript"
    ],
    "education": [
        {
            "name": "Oxford university",
            "dates": "2009"
        }
    ],
    "experience": [
        {
            "title": "Full Stack Developer",
        }
    ]
},
{
"login": "wycats",
"id": 4,
"node_id": "MDQ6VXNlcjQ=",
"avatar_url": "https://avatars.githubusercontent.com/u/4?v=4",
"email": "wycats@gmail.com",
    "skills": [
        "Adobe",
        "Benchmark",
        "Javascript",
        "Programming",
        "C",
        "Html"
    ],
    "education": [
        {
            "name": "Arizona university",
            "dates": "2011"
        }
    ],
    "experience": [
        {
            "title": "Front End Developer",
        }
    ]
},
{
"login": "ezmobius",
"id": 5,
"node_id": "MDQ6VXNlcjU=",
"avatar_url": "https://avatars.githubusercontent.com/u/5?v=4",
"email": "ezmobius@gmail.com",
    "skills": [
        "Javascript",
        "Json",
        "Css",
        "C",
        "Html"
    ],
    "education": [
        {
            "name": "Oxford university",
            "dates": "2015"
        }
    ],
    "experience": [
        {
            "title": "Full Stack Developer",
        },
    ]
},
];

let index = 0;
show(index);
function show(index){
  document.querySelector("#input").innerHTML = `<h1 class="my-4 text-capitalize" style="font-size: 50px; color: #5a3226;"><i>CV SCREENER</i></h1>
                                                <div class="card my-4" style="width: 18rem; margin: auto;  background-color: inherit; border: 0;">
                                                  <img src="${cvs[index].avatar_url}" style="border-radius: 50%;" class="card-img-top" alt="...">
                                                  <div class="card-body">
                                                    <h5 class="card-title text-capitalize" style="font-size: 40px;color: #be9f8b;">${cvs[index].login}</h5>
                                                    <p class="card-text"><h4 class="card-title text-capitalize" style="color: #573526;">${cvs[index].experience[0].title}</h4>
                                                    <table>
                                                    <td><h5 class="card-title text-capitalize mx-3" style="color:#876548;">Education: </h5></td>
                                                    <td><h6 style="font-weight: normal;color: rgba(177,100,66,255);">${cvs[index].education[0].name}, ${cvs[index].education[0].dates}</h6></td>
                                                    </table>
                                                    <table>
                                                      <td><h5 class="card-title text-capitalize mx-3" style="color:#876548;">Skills: </h5></td>
                                                      <td><h6 style="font-weight: normal;color: rgba(177,100,66,255);">${cvs[index].skills}</h6></td>
                                                    </table>
                                                    </p>
                                                    <a href="#" class="btn btn-primary btn" onclick="changeFn()">NEXT</a>
                                                  </div>
                                                </div>`;
}

function changeFn(){
  index++;
  if(index>4){
    window.location.reload();
  }
  console.log(index);
  show(index);
};
