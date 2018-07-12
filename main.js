if(window.addEventListener) window.addEventListener("load", init,false);
  else if(window.attachEvent) window.attachEvent("onload",init);

 function init(){
    var mainPage=getId("header-container-logo");
    mainPage.addEventListener("click",mainPageLogick);
    var galery = getId("galery-li")
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
    hotelAbout[0].addEventListener("click", hotelAboutLogick);
    hotelAbout[1].addEventListener("click", hotelAboutLogick);
    var hotelHistory = document.getElementsByClassName("hotel-history-li");
    hotelHistory[0].addEventListener("click", hotelHistoryLogick);
    hotelHistory[1].addEventListener("click", hotelHistoryLogick);
    var hotelEvents = document.getElementsByClassName("hotel-events-li");
    hotelEvents[0].addEventListener("click", hotelEventsLogick);
    hotelEvents[1].addEventListener("click", hotelEventsLogick);
    var rooms = getId("rooms-li").firstChild;
    rooms.addEventListener("click", roomsLogick);
    var roomSingle = document.getElementsByClassName("room-single-li");
    roomSingle[0].addEventListener("click", roomSingleLogick);
    roomSingle[1].addEventListener("click",roomSingleLogick);
    roomSingle[2].addEventListener("click",roomSingleLogick);
    roomSingle[3].addEventListener("click",roomSingleLogick);
    roomSingle[4].addEventListener("click",roomSingleLogick);
    roomSingle[5].addEventListener("click",roomSingleLogick);
    var roomDouble = document.getElementsByClassName("room-double-li");
    roomDouble[0].addEventListener("click", roomDoubleLogick);
    roomDouble[1].addEventListener("click",roomDoubleLogick);
    roomDouble[2].addEventListener("click",roomDoubleLogick);
    roomDouble[3].addEventListener("click",roomDoubleLogick);
    roomDouble[4].addEventListener("click",roomDoubleLogick);
    roomDouble[5].addEventListener("click",roomDoubleLogick);
    var roomTwin = document.getElementsByClassName("room-twin-li");
    roomTwin[0].addEventListener("click", roomTwinLogick);
    roomTwin[1].addEventListener("click", roomTwinLogick);
    roomTwin[2].addEventListener("click", roomTwinLogick);
    roomTwin[3].addEventListener("click", roomTwinLogick);
    roomTwin[4].addEventListener("click", roomTwinLogick);
    roomTwin[5].addEventListener("click", roomTwinLogick);
    var roomSemiluxury = document.getElementsByClassName("room-semiluxury-li");
    roomSemiluxury[0].addEventListener("click", roomSemiluxuryLogick);
    roomSemiluxury[1].addEventListener("click", roomSemiluxuryLogick);
    roomSemiluxury[2].addEventListener("click", roomSemiluxuryLogick);
    roomSemiluxury[3].addEventListener("click", roomSemiluxuryLogick);
    roomSemiluxury[4].addEventListener("click", roomSemiluxuryLogick);
    roomSemiluxury[5].addEventListener("click", roomSemiluxuryLogick);
    var roomLuxury = document.getElementsByClassName("room-luxury-li");
    roomLuxury[0].addEventListener("click", roomLuxuryLogick);
    roomLuxury[1].addEventListener("click", roomLuxuryLogick);
    roomLuxury[2].addEventListener("click", roomLuxuryLogick);
    roomLuxury[3].addEventListener("click", roomLuxuryLogick);
    roomLuxury[4].addEventListener("click", roomLuxuryLogick);
    roomLuxury[5].addEventListener("click", roomLuxuryLogick);
    var services = getId("services-li").firstChild;
    services.addEventListener("click",servicesLogick);   
    var gymServices = document.getElementsByClassName("gym-services-li");
    gymServices[0].addEventListener("click",gymServicesLogick);
    gymServices[1].addEventListener("click",gymServicesLogick);
    var beautySalonServices = document.getElementsByClassName("beauty-salon-services-li");
    beautySalonServices[0].addEventListener("click",beautySalonServicesLogick);
    beautySalonServices[1].addEventListener("click",beautySalonServicesLogick);
    var massageServices = document.getElementsByClassName("massage-services-li");
    massageServices[0].addEventListener("click",massageServicesLogick);
    massageServices[1].addEventListener("click",massageServicesLogick);
    var petsServices = document.getElementsByClassName("pets-services-li");
    petsServices[0].addEventListener("click",petsServicesLogick);
    petsServices[1].addEventListener("click",petsServicesLogick);
    var kidsServices = document.getElementsByClassName("kids-services-li");
    kidsServices[0].addEventListener("click",kidsServicesLogick);
    kidsServices[1].addEventListener("click",kidsServicesLogick);
    var excursionsServices = document.getElementsByClassName("excursions-services-li");
    excursionsServices[0].addEventListener("click",excursionsServicesLogick);
    excursionsServices[1].addEventListener("click",excursionsServicesLogick);
    var contacts=getId("contacts-li");
    contacts.addEventListener("click",contactsLogick);
    initMap();
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

function mainPageLogick(){
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

function galeryLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="block";
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

function hotelMainLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("hotel-information").style.display="block";
    getId("galery").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-restaurant").style.display="none";
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
function hotelAboutLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="none";
    getId("hotel-about").style.display="block";
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
function hotelHistoryLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="none";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="block";
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
function hotelEventsLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="none";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="block";
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
function galeryHotelLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="block";
    getId("galery-rooms").style.display="none";
    getId("galery-restaurant").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-hotel").style.display="block";
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
function galeryRoomsLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("galery-restaurant").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-rooms").style.display="block";
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

function galeryRestaurantLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="block";
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
function roomsLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="block";
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
function roomSingleLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="none";
    getId("room-single").style.display="block";
    getId("room-double").style.display="none";
    getId("room-twin").style.display="none";
    getId("room-semiluxury").style.display="none";
    getId("room-luxury").style.display="none";
    getId("services").style.display="none";
    getId("beauty-salon-services").style.display="none";
    getId("massage-services").style.display="none";
    getId("pets-services").style.display="none";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function roomDoubleLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="none";
    getId("room-single").style.display="none";
    getId("room-double").style.display="block";
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
function roomTwinLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="none";
    getId("room-single").style.display="none";
    getId("room-double").style.display="none";
    getId("room-twin").style.display="block";
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
function roomSemiluxuryLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="none";
    getId("room-single").style.display="none";
    getId("room-double").style.display="none";
    getId("room-twin").style.display="none";
    getId("room-semiluxury").style.display="block";
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
function roomLuxuryLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="none";
    getId("room-single").style.display="none";
    getId("room-double").style.display="none";
    getId("room-twin").style.display="none";
    getId("room-semiluxury").style.display="none";
    getId("room-luxury").style.display="block";
    getId("services").style.display="none";
    getId("gym-services").style.display="none";
    getId("beauty-salon-services").style.display="none";
    getId("massage-services").style.display="none";
    getId("pets-services").style.display="none";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function servicesLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
    getId("hotel-about").style.display="none";
    getId("hotel-history").style.display="none";
    getId("hotel-events").style.display="none";
    getId("rooms").style.display="none";
    getId("room-single").style.display="none";
    getId("room-double").style.display="none";
    getId("room-twin").style.display="none";
    getId("room-semiluxury").style.display="none";
    getId("room-luxury").style.display="none";
    getId("services").style.display="block";
    getId("gym-services").style.display="none";
    getId("beauty-salon-services").style.display="none";
    getId("massage-services").style.display="none";
    getId("pets-services").style.display="none";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function gymServicesLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
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
    getId("gym-services").style.display="block";
    getId("beauty-salon-services").style.display="none";
    getId("massage-services").style.display="none";
    getId("pets-services").style.display="none";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function beautySalonServicesLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
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
    getId("beauty-salon-services").style.display="block";
    getId("massage-services").style.display="none";
    getId("pets-services").style.display="none";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function massageServicesLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
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
    getId("massage-services").style.display="block";
    getId("pets-services").style.display="none";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function petsServicesLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
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
    getId("pets-services").style.display="block";
    getId("kids-services").style.display="none";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function kidsServicesLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
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
    getId("kids-services").style.display="block";
    getId("excursions-services").style.display="none";
    getId("contacts").style.display="none";
}
function excursionsServicesLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
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
    getId("excursions-services").style.display="block";
    getId("contacts").style.display="none";
}
function contactsLogick(){
    getId("accordeon-container").style.display="none";
    getId("news").style.display="none";
    getId("galery").style.display="none";
    getId("galery-rooms").style.display="none";
    getId("galery-hotel").style.display="none";
    getId("hotel-information").style.display="none";
    getId("galery-restaurant").style.display="rooms";
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
    getId("contacts").style.display="block";   
}
function getId(id){
      return document.getElementById(id);
}