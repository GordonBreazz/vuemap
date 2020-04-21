<?php
	
function cmp($a, $b)
{   
	if (count($a) < count($b)) return  1; 
	if (count($a) > count($b)) return  -1; 
		
    if (count($a) == count($b))     	
      { return 0;
           
      }
    
}

function view_rasp($fo)//main
{ 
	
//error_reporting(E_ALL);
$apath ='/home/n/newvsgaki/vsgaki/public_html/userscripts/rasp'; //dirname($_SERVER[SCRIPT_FILENAME]);
$ppath = 'http://www.vsgaki.ru/userscripts/rasp';
//echo "-----------------$apath";
$maxx = 0;
$minn = 0;
$rqvst=$_GET["rqvst"];
$gi=$_GET["gi"];
$gj=$_GET["gj"];
//$gscr=$_GET["xh"]-$_GET["fh"];
//echo $gscr;

//echo __FILE__;
//print_r($_SERVER);
$datarow = Array();

$inif = parse_ini_file("$apath/$fo/config.ini");

//$fo = 'oo';


$no_sort = '';
$no_sort = $inif["no_sort"];

$count_folders = count($inif)-1;

for ($i=1; $i<=$count_folders; $i++){
  $a=glob("$apath/$fo/$i/*.pdf");
  if ($i == 1) $minn = count($a);
  if (count($a) < $minn) $minn = count($a);
  if (count($a) > $maxx) $maxx=count($a);
  array_unshift($a,$inif[$i]);
  $datarow[]=$a;
}

if ($maxx == 0) print_r('<p> Уважаемые студенты, расписание занятий будет опубликовано позже.</p><div style="visibility: hidden;">');
	else print_r('<div>');

// Сортируем столбцы таблицы если количество строк не равно

if ($no_sort != 'true')
  if ($maxx > $minn) usort($datarow, "cmp");


//Создание таблицы


$tbl='<table style=" background-color: rgb(239, 241, 246); width: 100%; text-align: left; margin-left: auto; margin-right: auto;" ><tbody>';
$st='<tr><th style="font-weight: bold;padding:5px;">&nbsp;&nbsp;№</th>';
for ($i=0;$i<$count_folders;$i++)
{  $st.="<th style=\"font-weight: bold; padding:5px;\">".$datarow[$i][0]."</th>";
}

$st.='</tr>';
$tbl.=$st;
for ($j=1;$j<=$maxx;$j++)
{ $tbl.="<tr>\n";
  $tbl.="<td style=\"font-weight: bold; color: rgb(21, 84, 200);padding:5px;\">&nbsp;&nbsp;$j</td>\n";
  for ($i=0;$i<$count_folders;$i++)
    {$tbl.="<td style=\"padding:5px;\">\n";
     if (array_key_exists($j,$datarow[$i])){
       if (($i==$gi) and ($j==$gj))
         $tbl.="<a  href=\"?rqvst=".str_replace('.pdf','',str_replace($apath,'',$datarow[$i][$j])).'&gi='.$i.'&gj='.$j.'" class="ssyl" style="display: block;  height: 100%;"><b>'.strtoupper(str_replace('_',', ',basename($datarow[$i][$j],'.pdf'))).'</b></a>';
       else $tbl.='<a href="?rqvst='.str_replace('.pdf','',str_replace($apath,'',$datarow[$i][$j])).'&gi='.$i.'&gj='.$j.'" class="ssyl" style=" display: block;  height: 100%;">'.strtoupper(str_replace('_',', ',basename($datarow[$i][$j],'.pdf'))).'</a>'; 
     }
     else  $tbl.='<div class="no-data">---</div>';       
     $tbl.="</td>\n";
}
$tbl.="</tr>\n";
}
$tbl.="</tbody>\n</table>";

//echo $rqvst;
$vpath=$ppath.$rqvst.'.pdf';
$vvpath=$apath.$rqvst.'.pdf';
if (file_exists($vvpath)){
	//$datafl = date("Расписание опубликовано d.m.Y г.", filemtime($vvpath));
	echo '<a name="a1" id="scroll_to_id"></a>';
	echo "<div>";
	echo "<div style=\"float: left; text-align: left;position:relative;\">";
	echo "<a  href=\"#a10\">Выбрать другую группу</a></div><div style=\"margin: 0pt auto; width: 100%; text-align: center;\"><a name=\"a1\"></a>";
	echo"<div style=\"float: right; text-align: right;position:relative; font-style: italic;\">$datafl</div>";
	echo "<h3 id=\"hdr\" style=\"color: rgb(204, 0, 0); text-align: center; position:inherit;  \">Расписание&nbsp;".strtoupper(str_replace('_',', ',basename($vvpath,'.pdf')))."</h3>";	
	echo "</div>\n";
	echo '<iframe id=\"pdf_frame\" src="https://docs.google.com/gview?url='.$vpath.'&embedded=true" width="100%" height="500"></iframe></div>';
}	
//echo "<div style=\"text-align: center;\"><a name=\"a1\"></a><h3 style=\"color: rgb(204, 0, 0);\">Расписания групп №п: ".$vvpath.'</h3><iframe src="'.$vpath.'"width="100%", height="800"></iframe></div>';
echo "<h3 style=\"margin-top: 0px;\"><a name=\"a10\"></a>Выберите группу в таблице для начала просмотра:</h3>";

echo $tbl;//Печать таблицы
print_r('</div>');
echo <<<EOT
<script type="text/javascript">
var ttl = document.getElementById("hdr").innerHTML;
document.getElementById("hdr").innerHTML = "Загрузка, подождите..";
  var scrollTop = $('#scroll_to_id').offset().top;    
  $(document).scrollTop(scrollTop-60);
  ppp=$(window).height()-120;
  if (ppp>0 && ppp>500 && ppp<$(window).height()) $('iframe').height(ppp);  
 function q5(){ 
//console.log('start');

try {
var aa=document.getElementById('pdf_frame').contentWindow.document.body;
console.log('не загрузился')

//document.getElementById('pdf_frame').src= document.getElementById('pdf_frame').src+'&1'

document.location.reload(true);

}
catch (e){
console.log('загрузился'+e)
document.getElementById("hdr").innerHTML = ttl;
}
//  if (aa) alert(aa)
  // else 
}

setTimeout(q5, 500);
</script>
EOT;
}
?>
