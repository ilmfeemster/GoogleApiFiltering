const filterableMarkers = [];
const result1 = document.getElementById("result1");
const multi1 = document.getElementById("multi1");
const result2 = document.getElementById("result2");
const multi2 = document.getElementById("multi2");
const result3 = document.getElementById("result3");
const multi3 = document.getElementById("multi3");
//Gets display number for slider and variables for filter function
multi1.addEventListener('input',function change1(){
  result1.innerText = multi1.value;
  filter();
});
multi2.addEventListener('input',function change2(){
  result2.innerText = multi2.value;
  filter();
});
multi3.addEventListener('input',function change3(){
  result3.innerText = multi3.value;
  filter();
});
//filter function to remove markers from map
function filter(){
  for(i=0; i<filterableMarkers.length; i++){
    if (filterableMarkers[i].rent < multi1.value || filterableMarkers[i].bedrooms < multi2.value || filterableMarkers[i].baths < multi3.value ){
      filterableMarkers[i].setMap(null);
    }
    else{
      filterableMarkers[i].setMap(map);
    }

  }
}
//loads google map
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.79369145926131, lng: -122.41796482544777},
        zoom: 18.5,
        mapId: '4ed8a8cc983cf9ca'
        
      });

      google.maps.event.addListener(map, "click", function(event) {
        infowindow.close();
    });
      
  const infowindow = new google.maps.InfoWindow({});
    //mock data
    const markers = [
        ["Apartment1", 37.79364010337256, -122.41738108682264, 1800, 0 , 1],
        ["Apartment2", 37.794014286523335, -122.42009299551883, 2100, 1 , 1],
        ["Apartment3", 37.79387426122424, -122.41988192154433, 2200, 1 , 1],
        ["Apartment4", 37.79372393965186, -122.4199001625051, 2500, 1 , 1],
        ["Apartment5", 37.7935797953911, -122.41985586302897, 1850, 0 , 1],
        ["Apartment6", 37.79324002566374, -122.41976726407671, 2200, 1 , 1],
        ["Apartment7", 37.79305476373159, -122.41811047361564, 2000, 1 , 1],
        ["Apartment8", 37.79272933852831, -122.41965781831216, 3200, 2 , 2],
        ["Apartment9", 37.79447554445522, -122.41964478905446, 2350, 1 , 1],
        ["Apartment10", 37.794267566904935, -122.41961351883602, 1750, 0 , 1],
        ["Apartment11", 37.79414401560776, -122.41961351883602, 2450, 1 , 1],
        ["Apartment12", 37.793306993770784, -122.41818794604536, 2250, 1 , 1],
        ["Apartment13", 37.79396692505481, -122.4195431608445, 2200, 1 , 1],
        ["Apartment14", 37.79374865006831, -122.41946759114992, 2100, 1 , 1],
        ["Apartment15", 37.793602446650695, -122.41943892678303, 2000, 0 , 1],
        ["Apartment16", 37.79341299953839, -122.41941026241612, 2600, 2 , 1],
        ["Apartment17", 37.79417490345143, -122.4191783416293, 2200, 1 , 1],
        ["Apartment18", 37.793194722915395, -122.4194076565646, 2000, 1 , 1],
        ["Apartment19", 37.79311441342955, -122.41933729857308, 2200, 1 , 1],
        ["Apartment20", 37.7927478715909, -122.4173438221472, 1900, 0 , 1],
        ["Apartment21", 37.79286730677178, -122.41916531237165, 2450, 1 , 1],
        ["Apartment22", 37.792811707659865, -122.41876661708646, 2100, 1 , 1],
        ["Apartment23", 37.79311029499202, -122.41862850695497, 2400, 1 , 1],
        ["Apartment24", 37.79302174852973, -122.41874055857107, 2600, 1 , 1],
        ["Apartment25", 37.79312059108541, -122.41880570485951, 1700, 0 , 1],
        ["Apartment26", 37.793231788802466, -122.41890733306947, 2000, 1 , 1],
        ["Apartment27", 37.7933903482207, -122.41892036232713, 2150, 1 , 1],
        ["Apartment28", 37.79420990965863, -122.41840179787125, 3000, 2 , 1],
        ["Apartment29", 37.79431286899547, -122.4178780217123, 2050, 1 , 1],
        ["Apartment30", 37.79437258534509, -122.41756792537939, 1800, 0 , 1],
        ["Apartment31", 37.794415828188825, -122.41716401839115, 2275, 1 , 1],
        ["Apartment32", 37.794166666694366, -122.41655685498299, 2200, 1 , 1],
        ["Apartment33", 37.792811707659865, -122.41703893751736, 2150, 1 , 1],
        ["Apartment34", 37.79424697503642, -122.41660636616217, 2400, 2 , 1],
        ["Apartment35", 37.794047233613966, -122.41707802529042, 1800, 0 , 1],
        ["Apartment36", 37.79391544516328, -122.41828974625517, 2050, 1 , 1],
        ["Apartment37", 37.793734235659706, -122.41653340231915, 2300, 1 , 1],
        ["Apartment38", 37.79355508491817, -122.41775294083851, 2550, 2 , 1],
        ["Apartment39", 37.79370746603629, -122.41668193585677, 2000, 1 , 1],
        ["Apartment40", 37.79350566394749, -122.41669757096598, 1600, 0 , 1],
        ["Apartment41", 37.79315147935692, -122.41763046581626, 2200, 1 , 1],
        ["Apartment42", 37.79312059108541, -122.4167262353329, 2700, 2 , 1],
        ["Apartment43", 37.792966149534045, -122.41767737114392, 3200, 3 , 1],
        ["Apartment44", 37.79285701064309, -122.41660897201373, 3800, 4 , 2],
        ["Apartment45", 37.79451878723867, -122.41949104381376, 2000, 0 , 1],
        ["Apartment46", 37.79459261893068, -122.4187178574696, 3500, 3 , 2],
        ["Apartment47", 37.79485708762877, -122.41700106842212, 4000, 4 , 3],
        ["Apartment48", 37.79412734765226, -122.41785636404617, 3200, 3 , 1],
        ["Apartment49", 37.793838388219754, -122.41774480374737, 3600, 3 , 2],
        ["Apartment50", 37.79346371879828, -122.41823442950319, 2200, 0 , 1],
      
        
    ];  
//creates markers    
for(let i = 0; i<markers.length; i++){
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
        position: {lat: currMarker[1], lng: currMarker[2] },
        map,
        title: currMarker[0],
        animation: google.maps.Animation.DROP,
        rent: currMarker[3],
        bedrooms : currMarker[4],
        baths : currMarker[5]
        
    })
    //pushes created markers to another array, google doesnt allow manipulation of its intialized markers
    filterableMarkers.push(marker);

      //listener for only one info box to be open at once
      google.maps.event.addListener(marker, 'click', function(){
        infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
        });
        infowindow.setContent('<div>Rent: $'+ currMarker[3] + '</div><br><div>Bedrooms: ' + currMarker[4] + '</div><br><div>Bathrooms: ' + currMarker[5]); 
        infowindow.open(map,this);  //close info boxes on map click
      });
    }  
}
