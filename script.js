function add() {
    var Destinatiom = document.getElementById("destination").value;
    var Date = document.getElementById("Date").value;
    var Sdate = document.getElementById("sDate").value;
    var vis_http1 = new XMLHttpRequest();
    if (Date === Sdate) {
        alert("Same date can't be passed");
        return;

    }
    var url = "https://api.covid19api.com/country/" + Destinatiom + "?from=" + Date + "T00:00:00Z&to=" + Sdate + "T00:00:00Z";

    document.getElementById("result_area").innerHTML = url;
    vis_http1.open("GET", url, true);
    vis_http1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);

            for (var i = 0; i < list.length; i++) {
                create(list[i].Confirmed, list[i].Active, list[i].Deaths);
            }

        }
    };
    vis_http1.send();

}



function create(count_case, count_active, count_death) {
    var vis_Parent = document.getElementById("result_area");

    var vis_DivParent = document.createElement("div");

    var Vis_dest = document.createElement("p");
    var Vis_text = document.createTextNode("Total Number Of cases:");
    Vis_dest.appendChild(Vis_text);

    var vis_span = document.createElement("span");
    var vis_span_text = document.createTextNode(count_case);

    vis_span.appendChild(vis_span_text);
    Vis_dest.appendChild(vis_span);

    vis_DivParent.appendChild(Vis_dest);

    var vis_active = document.createElement("p");
    var vis_ativeText = document.createTextNode("Current Active cases:");
    vis_active.appendChild(vis_ativeText);

    var vis_SpanActive = document.createElement("span");
    var vis_SpanActiveText = document.createTextNode(count_active);

    vis_SpanActive.appendChild(vis_SpanActiveText);
    vis_active.appendChild(vis_SpanActive);

    vis_DivParent.appendChild(vis_active);



    var vis_death = document.createElement("p");
    var vis_DeathText = document.createTextNode("Total Death Count:");
    vis_death.appendChild(vis_DeathText);

    var vis_SpanDeath = document.createElement("span");
    var vis_SpanDeathText = document.createTextNode(count_death);

    vis_SpanDeath.appendChild(vis_SpanDeathText);
    vis_death.appendChild(vis_SpanDeath);

    vis_DivParent.appendChild(vis_death);


    vis_DivParent.setAttribute("class", "div_blue");

    vis_Parent.appendChild(vis_DivParent);

}