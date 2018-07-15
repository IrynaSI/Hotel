if(window.addEventListener) window.addEventListener("load", init,false);
  else if(window.attachEvent) window.attachEvent("onload",init);

function init(){
displayMenuNone();
var mainPage=getId("header-container-logo");
mainPage.addEventListener("click",displayMenuNone);
var galery = getId("galery-li");
galery.addEventListener("click", galeryLogick);
var galeryHotel=getId("galery-hotel-link");
galeryHotel.addEventListener("click",galeryHotelLogick);
var galeryRooms=getId("galery-rooms-link");
galeryRooms.addEventListener("click",galeryRoomsLogick);
var galeryRestaurant=getId("galery-restaurant-link");
galeryRestaurant.addEventListener("click",galeryRestaurantLogick);
var hotelMain = getId("hotel-li").firstChild;
hotelMain.addEventListener("click", hotelMainLogick);
var hotelAbout = document.getElementsByClassName("hotel-about-li");
for(var i=0;i<hotelAbout.length;i++){
   hotelAbout[i].addEventListener("click",hotelAboutLogick)
}
var hotelHistory = document.getElementsByClassName("hotel-history-li");
for(var i=0;i<hotelHistory.length;i++){
   hotelHistory[i].addEventListener("click",hotelHistoryLogick)
}
var hotelEvents = document.getElementsByClassName("hotel-events-li");
for(var i=0;i<hotelEvents.length;i++){
   hotelEvents[i].addEventListener("click", hotelEventsLogick)
}
var rooms = getId("rooms-li").firstChild;
rooms.addEventListener("click", roomsLogick);
var roomSingle = document.getElementsByClassName("room-single-li");
for(var i=0;i<roomSingle.length;i++){
   roomSingle[i].addEventListener("click", roomSingleLogick)
}
 var roomDouble = document.getElementsByClassName("room-double-li");
for(var i=0;i<roomDouble.length;i++){
   roomDouble[i].addEventListener("click", roomDoubleLogick)
}
var roomTwin = document.getElementsByClassName("room-twin-li");
for(var i=0;i<roomTwin.length;i++){
   roomTwin[i].addEventListener("click", roomTwinLogick)
}
var roomSemiluxury = document.getElementsByClassName("room-semiluxury-li");
for(var i=0;i<roomSemiluxury.length;i++){
   roomSemiluxury[i].addEventListener("click", roomSemiluxuryLogick)
}
var roomLuxury = document.getElementsByClassName("room-luxury-li");
for(var i=0;i<roomLuxury.length;i++){
   roomLuxury[i].addEventListener("click", roomLuxuryLogick)
}
var services = getId("services-li").firstChild;
services.addEventListener("click",servicesLogick);   
var gymServices = document.getElementsByClassName("gym-services-li");
for(var i=0;i<gymServices.length;i++){
   gymServices[i].addEventListener("click", gymServicesLogick)
}
var beautySalonServices = document.getElementsByClassName("beauty-salon-services-li");
for(var i=0;i<beautySalonServices.length;i++){
   beautySalonServices[i].addEventListener("click", beautySalonServicesLogick)
}
var massageServices = document.getElementsByClassName("massage-services-li");
for(var i=0;i<massageServices.length;i++){
   massageServices[i].addEventListener("click", massageServicesLogick)
}
var petsServices = document.getElementsByClassName("pets-services-li");
for(var i=0;i<petsServices.length;i++){
   petsServices[i].addEventListener("click", petsServicesLogick)
}
var kidsServices = document.getElementsByClassName("kids-services-li");
for(var i=0;i<kidsServices.length;i++){
   kidsServices[i].addEventListener("click", kidsServicesLogick)
}
var excursionsServices = document.getElementsByClassName("excursions-services-li");
for(var i=0;i<excursionsServices.length;i++){
   excursionsServices[i].addEventListener("click", excursionsServicesLogick)
}
var contacts=getId("contacts-li");
    contacts.addEventListener("click",contactsLogick);
}

function getId(id){
      return document.getElementById(id);
}
function contactsLogick(){ 
    initMap();
    displayMenuNone();
    displayMainNone();
    getId("contacts").style.display="block";   
}
function excursionsServicesLogick(){
    displayMenuNone();
    displayMainNone();
    getId("excursions-services").style.display="block";
}
function kidsServicesLogick(){
    displayMenuNone();
    displayMainNone();
    getId("kids-services").style.display="block";
}
function petsServicesLogick(){
    displayMenuNone();
    displayMainNone();
    getId("pets-services").style.display="block";
}
function massageServicesLogick(){
    displayMenuNone();
    displayMainNone();
    getId("massage-services").style.display="block";
}
function beautySalonServicesLogick(){
    displayMenuNone();
    displayMainNone();
    getId("beauty-salon-services").style.display="block";
}
function gymServicesLogick(){
    displayMenuNone();
    displayMainNone();
    getId("gym-services").style.display="block";
}
function servicesLogick(){
    displayMenuNone();
    displayMainNone();
    getId("services").style.display="block";
}
function roomLuxuryLogick(){
    displayMenuNone();
    displayMainNone();
    getId("room-luxury").style.display="block";
}
function roomSemiluxuryLogick(){
    displayMenuNone();
    displayMainNone();
    getId("room-semiluxury").style.display="block";
}
function roomTwinLogick(){
    displayMenuNone();
    displayMainNone();
    getId("room-twin").style.display="block";
}
function roomDoubleLogick(){
    displayMenuNone();
    displayMainNone();
    getId("room-double").style.display="block";
}
function roomSingleLogick(){
    displayMenuNone();
    displayMainNone();
    getId("room-single").style.display="block";
}
function roomsLogick(){
    displayMenuNone();
    displayMainNone();
    getId("rooms").style.display="block";
}
function hotelEventsLogick(){
    displayMenuNone();
    displayMainNone();
    getId("hotel-events").style.display="block";
}
function hotelHistoryLogick(){
    displayMenuNone();
    displayMainNone();
    getId("hotel-history").style.display="block";
}
function hotelAboutLogick(){
    displayMenuNone();
    displayMainNone();
    getId("hotel-about").style.display="block";
}
function hotelMainLogick(){
    displayMenuNone();
    displayMainNone();
    getId("hotel-information").style.display="block";
}
function galeryRestaurantLogick(){
    displayMenuNone();
    displayMainNone();
    getId("galery-restaurant").style.display="block";
}
function galeryRoomsLogick(){
    displayMenuNone();
    displayMainNone();
    getId("galery-rooms").style.display="block";
}
function galeryHotelLogick(){
    displayMenuNone();
    displayMainNone();
    getId("galery-hotel").style.display="block";
}
function galeryLogick(){
    displayMenuNone();
    displayMainNone();
    getId("galery").style.display="block";
}
function displayMainNone(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
}
function displayMenuNone(){
    getId("accordeon-container").style.display="block";
    getId("news").style.display="block";
    getId("galery").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-restaurant").style.display="none";
    getId("hotel-information").style.display="none";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="none";
    getId("room-single").style.display="none";
    getId("room-double").style.display="none";
    getId("room-twin").style.display="none";
    getId("room-semiluxury").style.display="none";
    getId("room-luxury").style.display="none";
    getId("services").style.display="none";
    getId("gym-services").style.display="none";
    getId("beauty-salon-services").style.display="none";
    getId("massage-services").style.display="none";
    getId("pets-services").style.display="none";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}

// фукція для відображення карти на сторінці
function initMap() {
// Определяем переменную map
var map;
// задання координат.
var position = new google.maps.LatLng(49.8437814, 24.025879199999963);
// pos.coords.latitude=49.8437814;
// pos.coords.longitude=24.025879199999963;
// параметри для карти.
var options = {
    zoom: 15,
    center: position, // позиция на карте
    mapTypeId: google.maps.MapTypeId.ROADMAP // тип карты - ROADMAP, SATELLITE, HYBRID and TERRAIN
};
// об'єкт карти.
var map = new google.maps.Map(document.getElementById("map"), options);
// маркер на карті
var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "GRAND PALACE Lviv Hotel"
});
// об'єкт вспливаючої подсказки.
var infowindow = new google.maps.InfoWindow({
            content: "пр. Свободи 50, м. Львів."
});
// присвоєння обработчика на натиснення по маркеру.
google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
});
}
