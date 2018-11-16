var BASE_URL = "https://talklogic-testing.herokuapp.com";
var authorization = "";
var questionList = "";
var count = 0;

$(window).load(function() {
    if (typeof(Storage) !== "undefined" && typeof(window.sessionStorage.getItem('token')) !== "undefined") {
        authorization = window.sessionStorage.getItem("token");
        if (authorization == null || authorization == "") {
            window.sessionStorage.setItem("page", "question.html");
            window.location = "login.php";
        }
    } else {
        console.log("STORAGE SESSION UNSUPPORTED");
    }
    getQuestionList();
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(setListQuestions(count)), 3000);
    });
});

function getQuestionList() {
    var output;
    var request = new XMLHttpRequest();
    request.open("GET", BASE_URL + "/api/v1/formType?type=talkabot");
    request.setRequestHeader("Authorization", authorization);
    request.onload = request.onerror = function() {
        try {
            data = JSON.parse(request.responseText);
        } catch(e) {
            output = "Error: " + e;
        }
        if (request.status !== 200) {
            output = "Error: got non-200 status code (" + request.status + ")";
        }else{
            output = data.data;
            questionList = output;
        }
    }
    request.send();
}

function setListQuestion() {
    if (questionList.length > 0) {
        for (i=0; i < questionList.length; i++) {
            setTimeout(1000);
            var name = questionList[i].hidename == "ya"?"Anonym User":questionList[i].name;
            var question = questionList[i].pertanyaan != ""?questionList[i].pertanyaan:"Pertanyaan tidak diisi";
            var date = questionList[i].createdat != ""?new Date(questionList[i].createdat).toUTCString():new Date($.now()).toUTCString();
            var to = questionList[i].tujuan != ""?questionList[i].tujuan:"Anonym To";
            
            if (i==0) {
                $("#content ul").append('<li><div class="timeline-badge"><a><i class="fa fa-circle" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>'+name + " &#8594; " + to +'</h4></div><div class="timeline-body"><p>'+question+'</p></div><div class="timeline-footer"><p class="text-right">'+date+'</p></div></div></li>');
            } else {
                if (i%2==1){
                    $("#content ul li:last").after('<li class="timeline-inverted"><div class="timeline-badge"><a><i class="fa fa-circle invert" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>'+name+ " &#8594; " + to +'</h4></div><div class="timeline-body"><p>'+question+'</p></div><div class="timeline-footer"><p class="text-right">'+date+'</p></div></div></li>');
                } else {
                    $("#content ul li:last").after('<li><div class="timeline-badge"><a><i class="fa fa-circle" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>'+name+ " &#8594; " + to +'</h4></div><div class="timeline-body"><p>'+question+'</p></div><div class="timeline-footer"><p class="text-right">'+date+'</p></div></div></li>');
                }
            }
        }
    } else {
        $("#content ul").append('<li><div class="timeline-badge"><a><i class="fa fa-circle" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>Timeline Event</h4></div><div class="timeline-body"><p>Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p></div><div class="timeline-footer"><p class="text-right">Feb-21-2014</p></div></div></li>');
        $("#content ul li:last").after('<li class="timeline-inverted"><div class="timeline-badge"><a><i class="fa fa-circle invert" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>Timeline Event</h4></div><div class="timeline-body"><p>Stranguillione in deinde cepit roseo commendavit patris super color est se sed. Virginis plus plorantes abscederem assignato ipsum ait regem Ardalio nos filiae Hellenicus mihi cum. Theophilo litore in lucem in modo invenit quasi nomen magni ergo est se est Apollonius, habet clementiae venit ad nomine sed dominum depressit filia navem.</p></div><div class="timeline-footer"><p class="text-right">Feb-23-2014</p></div></div></li>');
        $("#content ul li:last").after('<li><div class="timeline-badge"><a><i class="fa fa-circle" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>Timeline Event</h4></div><div class="timeline-body"><p>Advenientibus aliorum eam ad per te sed. Facere debetur aut veneris accedens.</p></div><div class="timeline-footer"><p class="text-right">Feb-23-2014</p></div></div></li>');
        $("#content ul li:last").after('<li class="timeline-inverted"><div class="timeline-badge"><a><i class="fa fa-circle invert" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>Timeline Event</h4></div><div class="timeline-body"><p>Volvitur ingreditur id ait mea vero cum autem quod ait Cumque ego illum vero cum unde beata. Commendavi si non dum est in. Dionysiadem tuos ratio puella ut casus, tunc lacrimas effunditis magister cives Tharsis. Puellae addita verbaque capellam sanctissima quid, apollinem existimas filiam rex cum autem quod tamen adnuente rediens eam est se in. Peracta licet ad nomine Maria non ait in modo compungi mulierem volutpat.</p></div><div class="timeline-footer"><p class="text-right">Feb-27-2014</p></div></div></li>');
        $("#content ul li:last").after('<li><div class="timeline-badge"><a><i class="fa fa-circle" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>Timeline Event</h4></div><div class="timeline-body"><p>Adfertur guttae sapientiae ducitur est Apollonius ut a a his domino Lycoridem in lucem. Theophile atque bona dei cenam veniebant est cum. Iusto opes mihi Tyrum in modo compungi mulierem ubi augue eiusdem ordo quos vero diam omni catervis famulorum. Bene dictis ut diem finito servis unde.</p></div><div class="timeline-footer"><p class="text-right">Mar-01-2014</p></div></div></li>');
        $("#content ul li:last").after('<li  class="timeline-inverted"><div class="timeline-badge"><a><i class="fa fa-circle invert" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>Timeline Event</h4></div><div class="timeline-body"><p>Crede respiciens loco dedit beneficio ad suis alteri si puella eius in. Acceptis codicello lenonem in deinde plectrum anni ipsa quod eam est Apollonius.</p></div><div class="timeline-footer primary"><p class="text-right">Mar-02-2014</p></div></div></li>');
    }
    $("#content ul li:last").after('<li class="clearfix no-float"></li>');
}

function setListQuestions(count) {
    if (count >= 0 && count < questionList.length) {
        var name = questionList[count].hidename == "ya"?"Anonym User":questionList[count].name;
        var question = questionList[count].pertanyaan != ""?questionList[count].pertanyaan:"Pertanyaan tidak diisi";
        var date = questionList[count].createdat != ""?new Date(questionList[count].createdat).toUTCString():new Date($.now()).toUTCString();
        var to = questionList[count].tujuan != ""?questionList[count].tujuan:"Anonym To";
        
        if (count==0) {
            $("#content ul").append('<li><div class="timeline-badge"><a><i class="fa fa-circle" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>'+name + " &#8594; " + to +'</h4></div><div class="timeline-body"><p>'+question+'</p></div><div class="timeline-footer"><p class="text-right">'+date+'</p></div></div></li>');
        } else {
            if (count%2==1){
                $("#content ul li:last").after('<li class="timeline-inverted"><div class="timeline-badge"><a><i class="fa fa-circle invert" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>'+name+ " &#8594; " + to +'</h4></div><div class="timeline-body"><p>'+question+'</p></div><div class="timeline-footer"><p class="text-right">'+date+'</p></div></div></li>');
            } else {
                $("#content ul li:last").after('<li><div class="timeline-badge"><a><i class="fa fa-circle" id=""></i></a></div><div class="timeline-panel"><div class="timeline-heading"><h4>'+name+ " &#8594; " + to +'</h4></div><div class="timeline-body"><p>'+question+'</p></div><div class="timeline-footer"><p class="text-right">'+date+'</p></div></div></li>');
            }
        } 
        count++;
        setTimeout(setListQuestions(count), 1000);
    } else {
        $("#content ul li:last").after('<li class="clearfix no-float"></li>');
    }
}