class Nota{
    constructor(texto,hora,dia,id){
        this.texto = texto;
        this.hora=hora;
        this.dia=dia;
        this.id=id;
        this.tag=document.createElement("div");
        this.tag.setAttribute("width", 200);
        this.tag.setAttribute("height", 200);
        this.tag.setAttribute("class",this.id);
        this.tag.innerHTML="<p>"+this.dia+"&nbsp;&nbsp;"+this.hora+"<br/>"+"<br/>"+this.texto+"</p>";
        document.getElementById("content").appendChild(this.tag);
    }
}

function añadir(){
    var d = new Date();
    var fecha=d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear()
    var hora=d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    var nota=new Nota(document.getElementById("intro").value,hora,fecha);
    document.getElementById("intro").value="";
    return nota;
}

document.getElementById("button").onclick=añadir;