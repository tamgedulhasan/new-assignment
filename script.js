let currentTab="all";


let jobs=[

{id:1,company:"Mobile First Corp",position:"React Native Developer",location:"Remote",type:"Full-time",salary:"$130k-$175k",desc:"Build mobile apps",status:""},

{id:2,company:"WebFlow Agency",position:"Web Designer",location:"LA",type:"Part-time",salary:"$80k-$120k",desc:"Create web",status:""},

{id:3,company:"DataViz",position:"Data Specialist",location:"Boston",type:"Full-time",salary:"$125k-$165k",desc:"Visualize data",status:""},

{id:4,company:"CloudFirst",position:"Backend Dev",location:"Seattle",type:"Full-time",salary:"$140k-$190k",desc:"Backend systems",status:""},

{id:5,company:"TechCorp",position:"Frontend Dev",location:"NY",type:"Full-time",salary:"$130k-$170k",desc:"Frontend",status:""},

{id:6,company:"StartupXYZ",position:"Fullstack",location:"Remote",type:"Full-time",salary:"$120k-$160k",desc:"Fullstack",status:""},

{id:7,company:"MegaCorp",position:"JS Dev",location:"NY",type:"Full-time",salary:"$130k-$170k",desc:"JS apps",status:""},

{id:8,company:"Innovation Labs",position:"UI Engineer",location:"Austin",type:"Full-time",salary:"$110k-$150k",desc:"UI systems",status:""}

];




function render(){


let list=document.getElementById("jobs");


list.innerHTML="";



let filtered=jobs.filter(job=>{

if(currentTab=="all") return true;

return job.status==currentTab;

});



document.getElementById("tabCount").innerText=

filtered.length+" jobs";



document.getElementById("empty").classList.toggle(

"hidden",

filtered.length!=0

);



filtered.forEach(job=>{


let card=document.createElement("div");


card.className=

"border-t pt-4 pb-4 relative";



card.innerHTML=`

<button onclick="deleteJob(${job.id})"

class="absolute right-0 text-red-500">

🗑

</button>


<h3 class="font-bold">

${job.company}

</h3>


<p class="text-blue-600">

${job.position}

</p>


<p class="text-sm text-gray-500">

${job.location} • ${job.type} • ${job.salary}

</p>


<p class="text-sm mt-1">

${job.desc}

</p>



<span class="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 mt-2 rounded">

${job.status||"NOT APPLIED"}

</span>



<div class="mt-3">


<button

onclick="setStatus(${job.id},'interview')"

class="border border-green-500 px-3 py-1 rounded mr-2

${job.status=="interview"

?"bg-green-500 text-white"

:"text-green-500"}">

Interview

</button>



<button

onclick="setStatus(${job.id},'rejected')"

class="border border-red-500 px-3 py-1 rounded

${job.status=="rejected"

?"bg-red-500 text-white"

:"text-red-500"}">

Rejected

</button>



</div>

`;



list.appendChild(card);


});


updateDashboard();


}




function setStatus(id,status){

let job=jobs.find(j=>j.id==id);

job.status=status;

render();

}



function deleteJob(id){

jobs=jobs.filter(j=>j.id!=id);

render();

}



function updateDashboard(){


total.innerText=jobs.length;


interviewCount.innerText=

jobs.filter(j=>j.status=="interview").length;



rejectedCount.innerText=

jobs.filter(j=>j.status=="rejected").length;


}



function switchTab(tab,btn){


currentTab=tab;



document.querySelectorAll(".tab")

.forEach(t=>{

t.classList.remove("bg-blue-600","text-white");

t.classList.add("bg-gray-200");

});



btn.classList.remove("bg-gray-200");

btn.classList.add("bg-blue-600","text-white");



render();


}



render();
