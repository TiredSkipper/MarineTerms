window.onload = function() {
    var num = -1,
        /*        termins = ["Якорь", "Спасплот", "Такелажная скоба"],
                pics = ["pics/1.jpg", "pics/2.jpg", "pics/3.jpg"],
                definitions = ["Цепляется за грунт, удерживает судно от дрейфа и сноса",
                    "Надувной плот, используется для спасения экипажа при бедствии",
                    "Используется для соединения стоячего или бегучего такелажа с чем-либо"
                ];
        */
        termins = bg4TklzTrmn,
        pics = bg4TklzPics,
        definitions = bg4TklzDfntn;

    var next = document.getElementById("next"),
        prev = document.getElementById("prev");

    next.onclick = function() {
        var termin = document.getElementById("trmn"),
            pic = document.getElementById("imgs"),
            definition = document.getElementById("dfntn");
        num++;
        if (num >= termins.length) {
            num = 0;
        }
        termin.innerHTML = termins[num];
        pic.src = pics[num];
        console.log(pic.src);
        pic.onerror = function() { pic.src = "pics/Plug.jpg" };
        definition.innerHTML = definitions[num];
    }

    prev.onclick = function() {
        var termin = document.getElementById("trmn"),
            pic = document.getElementById("imgs"),
            definition = document.getElementById("dfntn");
        num--;
        if (num < 0) {
            num = termins.length - 1;
        }
        termin.innerHTML = termins[num];
        pic.src = pics[num];
        definition.innerHTML = definitions[num];
    }

}