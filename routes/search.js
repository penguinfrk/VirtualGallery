exports.displayPage = function(req, res){
	res.render('search');
}



// navigator.geolocation.getCurrentPosition(function(position){
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     var marker = new GMarker(new GLatLng(lat, lon));
    
//     var jsMap = new GMap2(document.getElementById("jsMap"));
//     jsMap.addOverlay(marker);
// },function(error){
//     //use error.code to determine what went wrong
// });