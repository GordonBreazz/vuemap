<?php

function view_file($file, $path, $title){

  if ($title == 'none')  $title =  $file; 
  $path_parts = pathinfo($path.$file);
  $file_type = '<i class="fa fa-file-pdf-o"></i>';

  if ($path_parts['extension'] == 'pdf') {
    $title = str_replace('_', ' ', $title);
    $title = str_replace('.pdf', ' ', $title);
  }

  if  ($path_parts['extension'] == 'pptx' || $path_parts['extension'] == 'ppt') {
		$file_type = '<i class="fa fa-file-powerpoint-o"></i>';
		$title = 'Презентация';
  } 
  $st = str_replace("/home/n/newvsgaki/vsgaki/public_html", '', $path);  
  if  ($path_parts['extension'] == 'txt') {
	$file_type = '<i class="fa fa-youtube"></i>';
	$title = 'Посмотреть видео';	  
    $txt = file_get_contents("$path/youtube.txt", true);
    $txt = iconv('windows-1251', 'utf-8', $txt);
    preg_match_all('#\bhttps?://[^,\s()<>]+(?:\([\w\d]+\)|([^,[:punct:]\s]|/))#', $txt, $matches);
	  //return '<a href="'.$st.$file.'">'.$file_type.$title.'</a>';
	  //echo implode('',$matches[0]).' ';
	return '<a href="'.implode('',$matches[0]).'">'.$file_type.$title.'</a>';
  }

  return '<a href="'.$st.$file.'">'.$file_type.$title.'</a>';
}

function attach_list($path){
  $files = scandir("$path/");
  $files = array_diff($files, array('.', '..','info.txt'));
  $result ='';
	//var_dump(implode('',$files));
  if (count($files) == 0) return '';
  if (count($files) == 1) {
     return  $result = '<ul class="files"><li>'.view_file(implode('',$files), $path, 'Ознакомиться с работой').'</li></ul>';
  }
  foreach($files  as $item){
    $result = $result."<li>".view_file($item, $path, 'none')."</li>";
  }
  $result = '<br>Ознакомиться с работой:'.'<ul class="files">'.$result.'</ul>';
  return $result;
  //print_r($files);
}

function extract_info($path){
  $txt = file_get_contents("$path/info.txt", true);
  return iconv('windows-1251', 'utf-8', $txt);
}

function print_section($path){
   $result = '';
   foreach(glob("$path/*", GLOB_ONLYDIR) as $dir) {
     $title = str_replace("$path/", '', $dir);
     $row = extract_info($dir);
     $lst = attach_list("$dir/");
     $rows = explode('---', $row);
//     $caption = trim($rows[1],"«");
//     $caption = trim($caption,"»");
//     $caption = trim($caption, '"');
     $caption = str_replace('"', '', $rows[1]);
     $caption = str_replace('«', '', $caption);
     $caption = str_replace('»', '', $caption);
     if (count($rows)>0) $result = $result.'<li><b>'.$caption.'</b></br>Автор: '.$rows[0].$lst.'</li>';
//     $row = str_replace('---', '<br>Работа:&nbsp;<b>', $row).'</b><br>Ознакомится с работой:'.$lst;
   //  if (strlen($row) > 0 ) $result = $result."<li>$row<hr></li>" ;        
  }
  if (strlen($result) > 0)  {
    $result = "<ul>$result</ul>";
    echo $result;
    echo  '<hr>';
  }
  
}

function view_data($folder) {
  $apath ='/home/n/newvsgaki/vsgaki/public_html/userscripts/conference/stud_science_55'; //dirname($_SERVER[SCRIPT_FILENAME]);
  $ppath = '/userscripts/conference/stud_science_55'; 	
  $inif = parse_ini_file("$ppath/$fo/config.ini");
  $count_folders = count($inif)-1;
  echo '<h2>'.$inif["1"].'</h2> ';
  $full_path = "$apath/$folder/";
  foreach(glob("$full_path*", GLOB_ONLYDIR) as $dir) {
    $title = str_replace($full_path, '', $dir);
    $title = str_replace('--- ', '"', $title).'"';
    echo "<h3>$title</h3>";
    print_section($dir);
  }

}
?>
<div style="display:none">
    <div id="access-policy">
        blah blah blah
    </div>
</div>
