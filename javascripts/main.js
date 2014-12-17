// Variable for the amount of test images
var imageName = new Array("10081","118035","120003","12074","124084","126007","138078",
"140088","14037","143090","157032","157036","161045","161062","166081",
"176035","176051","178054","20008","201080","208001","2092","22090","223004",
"227040","227046","227092","238011","24063","241004","249061","257098",
"260058","27059","28083","28096","29030","295087","299091","3063","3096",
"334025","35008","35058","35070","353013","36046","374020","393035","46076",
"48025","5096","54082","55067","60079","61034","68077","76053","78004","81095","92059","97017");
var numTest = imageName.length;
var numEachTest = 50;
// alert(numTest);
// Global Variables
var count = 0;
var pathL = "./Data/Lulu/";
var pathO = "./Data/Original/";
var pathS = "./Data/Saber/";
var showOrder = new Array(numTest);
var algrOrder = new Array(numTest);

id = GetArgsFromHref(window.location.href);
Parse.initialize("IrJMbpAHoG7ZoATROUEMLXSle3WsQZZpchqazCjn", "3wu1uC2BvUDAleqxRE90CYtGbn946hBvtYHtx6nU");
var Data = Parse.Object.extend("Data");
var Person = Parse.Object.extend("Person");
// var data = new Data();
// data.set("123", 1);
// data.save();

// var imageName = new Array("100007","100039","100075","100080","100098","100099","10081","101027","101084","101085","101087",
//   "102061","102062","103006","103029","103041","103070","103078","104010","104022","104055","105019","105025","105027","105053",
//   "106005","106020","106024","106025","106047","107014","107045","107072","108004","108005","108036","108041","108069","108070",
//   "108073","108082","109034","109053","109055","112056","112082","112090","113009","113016","113044","117025","117054","118015",
//   "118020","118031","118035","118072","119082","120003","12003","120093","12074","12084","123057","123074","124084","126007",
//   "126039","128035","130014","130026","130034","130066","134008","134035","134049","134052","134067","135037","135069","138032",
//   "138078","140006","140055","140075","140088","14037","141012","141048","143090","144067","145079","145086","147021","147062",
//   "147080","147091","148026","148089","15088","151087","153077","153093","155060","156054","156065","156079","157032","157036",
//   "159002","159008","159022","159029","159045","159091","160006","160067","160068","16052","16068","16077","161045","161062",
//   "163004","163014","163062","163085","163096","164046","164074","166081","167062","167083","168084","169012","170054","170057",
//   "17067","172032","173036","175032","175043","175083","176019","176035","176039","176051","178054","179084","182053","183055",
//   "183066","183087","185092","187003","187039","187071","188005","188025","188063","188091","19021","196015","196027","196040",
//   "196062","196073","196088","197017","20008","201080","2018","202000","202012","206062","206097","207038","207049","207056",
//   "208001","208078","209021","209070","2092","210088","21077","216041","216053","216066","217090","219090","220003","220075",
//   "22013","22090","22093","223004","223060","223061","225017","225022","226022","226033","227040","227046","227092","228076",
//   "231015","232038","232076","235098","236017","236037","238011","238025","24004","24063","24077","241004","241048","242078",
//   "245051","247003","247012","247085","249021","249061","249087","250047","250087","25098","253016","253027","253036","253055",
//   "253092","254033","254054","257098","260058","26031","267036","268002","268048","268074","27059","271031","274007","277053",
//   "277095","28075","28083","28096","285022","285079","286092","288024","289011","29030","291000","292066","295087","296007",
//   "296028","296058","296059","299086","299091","300091","301007","304034","304074","306005","306051","306052","3063","309004",
//   "3096","310007","311068","311081","314016","317043","317080","326025","326038","326085","33039","33044","33066","334025",
//   "335088","335094","344010","346016","347031","35008","35010","35028","35049","35058","35070","35091","351093","353013","36046",
//   "361010","361084","368016","37073","372019","374020","374067","38082","38092","384022","384089","385022","385028","385039",
//   "393035","41004","41006","41025","41029","41033","41069","41085","41096","42012","42044","42049","42078","43033","43051","43070",
//   "43074","43083","45000","45077","45096","46076","48017","48025","48055","49024","5096","51084","54005","54082","55067","55073",
//   "56028","58060","59078","60079","6046","61034","61060","61086","62096","65010","65033","65132","66039","66053","66075","67079",
//   "68077","69000","69007","69015","69020","69022","69040","70011","70090","71046","71076","71099","76002","76053","77062","78004",
//   "78019","78098","79073","80085","80090","80099","8023","8049","8068","81066","81095","8143","86000","86016","86068","87015",
//   "87046","87065","89072","92014","92059","94079","94095","95006","97010","97017","97033");

function main() {
   
  for(var i = 0; i < numTest; i++)
  {
    showOrder[i] = i;
  }
  showOrder = showOrder.sort(randomsort)
  for(var i = 0; i < numTest; i++)
  {
    algrOrder[i] = Math.random()>0.5 ? 1 : 2;
  }
  document.getElementById("label").innerHTML = count + 1 + "/100";
  showImage(showOrder[count], algrOrder[count]);
  //alert(imageName[showOrder[count]]); 
}

function showImage(number, order) {
  var path;
  if (order == 1) {
    path = pathL + imageName[number] + ".png"
    document.getElementById("lulu").src=path;
    path = pathO + imageName[number] + ".jpg"
    document.getElementById("origi").src=path;
    path = pathS + imageName[number] + ".png"
    document.getElementById("saber").src=path; 
  } else {
    path = pathS + imageName[number] + ".png"
    document.getElementById("lulu").src=path;
    path = pathO + imageName[number] + ".jpg"
    document.getElementById("origi").src=path;
    path = pathL + imageName[number] + ".png"
    document.getElementById("saber").src=path;  
  }
}

function GetArgsFromHref(sHref) 
{ 
　　var args = sHref.split("?"); 
　　var retval = 0; 
　　if(args[0] == sHref) /*参数为空*/ 
　　{ 
　　    return retval; /*无需做任何处理*/ 
　　} 
　　var retval = parseInt(args[1]); 
　　return retval; 
}

function randomsort(a, b) {  
  return Math.random()>0.5 ? -1 : 1;
} 

function click1() {
  //alert(imageName[showOrder[count]]);
  if (algrOrder[count] == 1) {
    var data = new Data();
    data.set("imageName", imageName[showOrder[count]]);
    data.set("Choice", 1);
    data.set("testID", id);
    data.save();
  } else {
    var data = new Data();
    data.set("imageName", imageName[showOrder[count]]);
    data.set("Choice", 2);
    data.set("testID", id);
    data.save();
  }
  count = count + 1;
  if (count < numEachTest) {
    document.getElementById("label").innerHTML = count + 1 + "/100";
    showImage(showOrder[count], algrOrder[count]);
    //alert(imageName[showOrder[count]]);     
  } else {
    alert("Test finished!");
    window.location.href="index.html";  
  }
}

function click2() {
  //alert(imageName[showOrder[count]]);
  if (algrOrder[count] == 1) {
    var data = new Data();
    data.set("imageName", imageName[showOrder[count]]);
    data.set("Choice", 2);
    data.set("testID", id);
    data.save();
  } else {
    var data = new Data();
    data.set("imageName", imageName[showOrder[count]]);
    data.set("Choice", 1);
    data.set("testID", id);
    data.save();
  }
  count = count + 1;
  if (count < numEachTest) {
    document.getElementById("label").innerHTML = count + 1 + "/100";
    showImage(showOrder[count], algrOrder[count]);
    //alert(imageName[showOrder[count]]);     
  } else {
    alert("Test finished!");
    window.location.href="index.html";     
  }
}