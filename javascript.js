function updateRange(value) {
    document.getElementById("durationLabel").value = value + " hour(s)";
}

function Calculate() {

    var studio = document.getElementById("studio").value;
    var duration = document.getElementById("duration").value;

    var price = 0;

    switch (studio) {
        case "1": price = 20;
            break;
        case "2": price = 30;
            break;
        case "3": price = 35;
            break;
        case "-1": return;
    }

    price = price * duration;

    if (document.getElementById("vip").checked == true)
        price *= 0.9;

    document.getElementById("price").value = "£" + price + " +VAT";
}

function cellClick(session) {
    document.getElementById("session").value = session;
    //Csak az első szóra vagyunk kíváncsiak mert az tartalmazza, hogy milyen típusú a session
    //Reguláris kifejezés és a replace függvény segítségével eldobunk mindent, ami az első space után van
    session = session.replace(/ .*/, '');
    switch (session) {
        case "Hatha": instructor = "Heather Lindemann";
            break;
        case "Iyengar": instructor = 'Heather Lindemann';
            break;
        case 'Kundalini': instructor = 'Heather Lindemann';
            break;
        case 'Ashtanga': instructor = 'Dylan Churchwell';
            break;
        case 'Vinyasa': instructor = 'Dylan Churchwell';
            break;
        case 'Bikram': instructor = 'Dylan Churchwell';
            break;
        case 'Yin': instructor = 'Dylan Churchwell';
            break;
        case 'Restorative': instructor = 'Alana Ortiz';
            break;
        case 'Prenatal': instructor = 'Alana Ortiz';
            break;
        case 'Anusara': instructor = 'Alana Ortiz';
            break;
        case 'Jivamukti': instructor = 'Alana Ortiz';
    }
    document.getElementById("instructor").value = instructor;
    var src;
    switch (instructor) {
        case "Heather Lindemann": document.getElementById("instructorImage").src = "images/instructor1.jpeg";
            break;
        case "Dylan Churchwell": document.getElementById("instructorImage").src = "images/instructor2.jpeg";
            break;
        case "Alana Ortiz": document.getElementById("instructorImage").src = "images/instructor3.jpeg";
    }
}