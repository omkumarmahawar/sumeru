// api url
let api_url =
	"https://api.spacexdata.com/v3/launches?limit=100";

async function getapi(url) {
	
	const response = await fetch(url);

	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
	FilterByYear(data);
}

getapi(api_url);


function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function show(data) {

	let showData =
     ""
     for (let detail of data) {
	   showData += '<div class="item"><span><img src="'+ detail.links.mission_patch_small +'" /></span><div class="item-det"><ul><li><h2>'+ detail.mission_name +'</h2></li><li><span>Mission ids:</span><span>'+ detail.mission_id +'</span></li><li><span>Launch Year:</span><span>'+ detail.launch_year +'</span></li><li><span>Successfull Launch:</span><span>'+ detail.launch_success +'</span></li><li><span>Successfull Landing:</span><span>false</span></li></ul></div></div>';
     }

	document.getElementById("display_spacex").innerHTML = showData;
}

function FilterByYear(data) {

}


 // add remove class on year btn
var element = document.getElementsByClassName("filter-btn")[0];
element.addEventListener("click", myYear);
function myYear(e) {
		var elems = document.querySelector(".active");
    if(elems !=null) {
      elems.classList.remove("active");
    }
	e.target.className = "btn active";
	}
 // add remove class on year btn

  // add remove class on launch btn
  var element1 = document.getElementsByClassName("launch-btn")[0];
  element1.addEventListener("click", myLaunch);
  function myLaunch(e) {
		  var elems = document.querySelector(".active");
	  if(elems !=null) {
		elems.classList.remove("active");
	  }
	  e.target.className = "btn active";
	  }
   // add remove class on launch btn 


    // add remove class on Land btn
	var element2 = document.getElementsByClassName("land-btn")[0];
	element2.addEventListener("click", myLand);
	function myLand(e) {
			var elems = document.querySelector(".active");
		if(elems !=null) {
		  elems.classList.remove("active");
		}
		e.target.className = "btn active";
		}
	 // add remove class on Land btn







