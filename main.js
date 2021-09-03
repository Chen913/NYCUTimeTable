var container = document.createElement('div');
container.classList.add('filter-container');
container.innerHTML = `
<p class="filter-title">篩選器</p>
<div style="margin: 0 auto">
<input type='checkbox' value='filter_switch' id='filter_switch' name='filter_switch' checked onchange='filter_switch(this)'>
<label for='filter_switch'>啟用</label>
</div>
<form id='filter-form'>
  <div style='display:flex'>
  <input type='button' value='全選' id='select_all' name='select_all' onclick='selectAll()' class='filter-btn'>
  <input type='button' value='全不選' id='select_none' name='select_none' onclick='selectNone()' class='filter-btn'></div>
  <fieldset>
  <legend>模式</legend>
  <input type='radio' value='或' id='mode_or' name='mode'>
  <label for='mode_or'>或</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type='radio' value='且' id='mode_and' name='mode' checked>
  <label for='mode_and'>且</label>
  </fieldset>
  <br/>
  <fieldset>
    <legend>校區&nbsp;&nbsp;<input type='checkbox' value='not_place' id='not_place' name='not_place' checked>
	<label for='not_place'>非</label></legend>
	<input type='checkbox' value='KF' id='place_KF' name='place_KF' checked>
	<label for='place_KF'>光復</label>&nbsp;&nbsp;&nbsp;&nbsp;
	<input type='checkbox' value='YM' id='place_YM' name='place_YM' checked>
	<label for='place_YM'>陽明</label><br/>
	<input type='checkbox' value='PA' id='place_PA' name='place_PA' checked>
	<label for='place_PA'>博愛</label>&nbsp;&nbsp;&nbsp;&nbsp;
	<input type='checkbox' value='TP' id='place_TP' name='place_TP' checked>
	<label for='place_TP'>台北</label><br/>
	<input type='checkbox' value='TN' id='place_TN' name='place_TN' checked>
	<label for='place_TN'>台南</label>&nbsp;&nbsp;&nbsp;&nbsp;
	<input type='checkbox' value='LJ' id='place_LJ' name='place_LJ' checked>
	<label for='place_LJ'>六家</label><br/>
  </fieldset>
  <fieldset>
  <input type='checkbox' value='英文授課' id='EN_class' name='EN_class'>
  <label for='EN_class'>英授</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type='checkbox' value='網路課程' id='Online_class' name='Online_class' checked>
  <label for='Online_class'>網路</label>
  </fieldset>
  <fieldset>
    <legend>通識</legend>
	<input type='checkbox' value='校基本素養' id='school_basic' name='school_basic' checked>
	<label for='school_basic'>校基本</label><br/>
	<input type='checkbox' value='核心-人文' id='core_humanities' name='core_humanities' checked>
	<label for='core_humanities'>核心-人文</label><br/>
	<input type='checkbox' value='核心-社會' id='core_social' name='core_social' checked>
	<label for='core_social' checked>核心-社會</label><br/>
	<input type='checkbox' value='core_science' id='core_science' name='core_science' checked>
	<label for='core_science'>核心-自然</label><br/>
	<input type='checkbox' value='通識跨院基本素養' id='cross_field' name='cross_field' onchange='changeDisplay(this)'>
	<label for='cross_field'>跨院</label><br/>
	<fieldset id="cross_field_box" style="display:none">
	  <input type='checkbox' value='資' id='cross_field_CS' name='cross_field_CS'>
	  <label for='cross_field_CS'>資</label>&nbsp;&nbsp;&nbsp;&nbsp;
	  <input type='checkbox' value='電' id='cross_field_EE' name='cross_field_EE'>
	  <label for='cross_field_EE'>電</label><br/>
	  <input type='checkbox' value='理' id='cross_field_S' name='cross_field_S'>
	  <label for='cross_field_S'>理</label>&nbsp;&nbsp;&nbsp;&nbsp;
	  <input type='checkbox' value='工' id='cross_field_E' name='cross_field_E'>
	  <label for='cross_field_E'>工</label><br/>
	  <input type='checkbox' value='管' id='cross_field_M' name='cross_field_M'>
	  <label for='cross_field_M'>管</label>&nbsp;&nbsp;&nbsp;&nbsp;
	  <input type='checkbox' value='人' id='cross_field_HS' name='cross_field_HS'>
	  <label for='cross_field_HS'>人</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  <input type='checkbox' value='客' id='cross_field_Hk' name='cross_field_Hk'>
	  <label for='cross_field_Hk'>客</label>
	</fieldset>
	<hr/>
	<input type='checkbox' value='基本素養-批判思考' id='basic_literacy' name='basic_literacy' checked>
	<label for='basic_literacy'>素養-批判思考</label><br/>
	<input type='checkbox' value='基本素養-量性推理' id='basic_reasoning' name='basic_reasoning' checked>
	<label for='basic_reasoning'>素養-量性推理</label><br/>
	<input type='checkbox' value='基本素養-組織管理' id='basic_OrgManagement' name='basic_OrgManagement' checked>
	<label for='basic_OrgManagement'>素養-組織管理</label><br/>
	<input type='checkbox' value='基本素養-生命及品格教育' id='basic_education' name='basic_education' checked>
	<label for='basic_education'>素養-生命及品格教育</label><br/>
	<input type='checkbox' value='field_humanities' id='field_humanities' name='field_humanities' checked>
	<label for='field_humanities'>領域-人文與美學</label><br/>
	<input type='checkbox' value='領域課程-個人、社會與文化' id='field_social' name='field_social' checked>
	<label for='field_social'>領域-個人、社會與文化</label><br/>
	<input type='checkbox' value='領域課程-公民與道德思考' id='field_moralThinking' name='field_moralThinking' checked>
	<label for='field_moralThinking'>領域-公民與道德思考</label><br/>
	<input type='checkbox' value='領域課程-社會中的科技與自然' id='field_techInLife' name='field_techInLife' checked>
	<label for='field_techInLife'>領域-社會中的科技與自然</label><br/>
  </fieldset>
  <input type='button' value='確認' onclick='filter()' class='filter-btn'>
</form>`
document.body.appendChild(container);

var customScript = document.createElement('script');
customScript.innerHTML = `
function changeDisplay(e){
	document.getElementById('cross_field_box').style.display = (e.checked) ? 'block' : 'none';
}

function filter(){
  var $$ = document.querySelectorAll.bind(document)
  var $id = document.getElementById.bind(document)
  $$('[name="tr_three_char"]')?.forEach(e => e.style.display = 'none');
  document.querySelectorAll('table.table_list')?.forEach(e => {
    e.style.display = '';
    e.nextSibling.style.display = '';
    e.nextSibling.nextSibling.style.display = '';
    e.nextSibling.nextSibling.nextSibling.style.display = '';
  });
  var displayList = [];

  if($id('not_place').checked)
    displayList = Array.from($$('[name="tr_three_char"]'));
  checkPlace($id('place_KF'));
  checkPlace($id('place_YM'));
  checkPlace($id('place_PA'));
  checkPlace($id('place_TP'));
  checkPlace($id('place_TN'));
  checkPlace($id('place_LJ'));
  
  checkSpecialClass($id('EN_class'));
  checkSpecialClass($id('Online_class'));
  
  var tmp = displayList;
  if($id('mode_and').checked)
    displayList = [];

  CheckGeneralEducation($id('school_basic'));
  CheckGeneralEducation($id('core_humanities'));
  CheckGeneralEducation($id('core_social'));
  CheckGeneralEducation($id('core_science'));
  
  CheckCrossField($id('cross_field_CS'))
  CheckCrossField($id('cross_field_EE'))
  CheckCrossField($id('cross_field_S'))
  CheckCrossField($id('cross_field_E'))
  CheckCrossField($id('cross_field_M'))
  CheckCrossField($id('cross_field_HS'))
  CheckCrossField($id('cross_field_Hk'))
  
  CheckGeneralEducation($id('basic_literacy'));
  CheckGeneralEducation($id('basic_reasoning'));
  CheckGeneralEducation($id('basic_OrgManagement'));
  CheckGeneralEducation($id('basic_education'));
  CheckGeneralEducation($id('field_humanities'));
  CheckGeneralEducation($id('field_social'));
  CheckGeneralEducation($id('field_moralThinking'));
  CheckGeneralEducation($id('field_techInLife'));
	

	
  function checkPlace(ctrl){
	if(ctrl.checked)
	    if($id('not_place').checked)
	        displayList = Array.from(displayList).filter(e => (e.querySelector('[name="cos_time"]') && e.innerHTML.search(ctrl.value) == -1));
		else
  			$$('[name="cos_time"]')?.forEach(e => {
  				if(e.innerHTML.search(ctrl.value) != -1)
					if($id('mode_or'))
						displayList.push(e.parentNode);
  			});
  }
  
  function checkSpecialClass(ctrl){
  	if(ctrl.checked)
  		$$(\`[title=\${ctrl.value}]\`)?.forEach(e => {
  			displayList.push(e.parentNode.parentNode);
  		});
  }

  function CheckGeneralEducation(ctrl){
    if(ctrl.checked)
		if($id('mode_or').checked)
			$$('[name=brief]')?.forEach(e => {
				if(e.innerHTML.search(ctrl.value) != -1)
					displayList.push(e.parentNode);
			});
		else{
			tmp?.forEach(e => {
				if(e.querySelector('[name=brief]')?.innerHTML.search(ctrl.value) >= 0){
					displayList.push(e);
				}
			});
		}
  }
  
  function CheckCrossField(ctrl){
	if($id('cross_field').checked && ctrl.checked)
		if($id('mode_or').checked){
			$$("[title='通識跨院基本素養']")?.forEach(e => {
				if(e.innerHTML.search(ctrl.value) != -1)
					displayList.push(e.parentNode.parentNode);
			});
		}
		else{
			tmp?.forEach(e => {
				if(e.querySelector("[title='通識跨院基本素養']")?.innerHTML.search(ctrl.value) >= 0){
					displayList.push(e);
				}
			});
		}
  }
  
  displayList?.forEach(e => {
	e.style.display = '';
	if(e.firstChild.rowSpan == 2)
		e.nextSibling.style.display = '';
  });

  $$('table.table_list')?.forEach(e => {
    if(Array.from(e.querySelectorAll('[name=tr_three_char]')).every(e => e.style.display == 'none')){
	  e.style.display = 'none';
	  e.nextSibling.style.display = 'none';
	  e.nextSibling.nextSibling.style.display = 'none';
	  e.nextSibling.nextSibling.nextSibling.style.display = 'none';
	}
  });
}
  
function selectAll(){
  document.querySelectorAll('#filter-form input[type=checkbox]').forEach(e => e.checked = true);
  document.getElementById('cross_field_box').style.display = '';
}  
function selectNone(){
  document.querySelectorAll('#filter-form input[type=checkbox]').forEach(e => e.checked = false);
  document.getElementById('cross_field_box').style.display = 'none';
}  

function filter_switch(e){
  document.getElementById('filter-form').style.display = (e.checked) ? '' : 'none';
  if(!e.checked){
	document.querySelectorAll('[name="tr_three_char"]')?.forEach(e => e.style.display = '');
    document.querySelectorAll('table.table_list')?.forEach(e => {
	  e.style.display = '';
	  e.nextSibling.style.display = '';
	  e.nextSibling.nextSibling.style.display = '';
	  e.nextSibling.nextSibling.nextSibling.style.display = '';
	});
  }
  else
	filter();
}
document.querySelector('.filter-container').addEventListener('mouseleave',e => e.target.scrollTop = 0);
`;
document.head.appendChild(customScript);

var customStyle = document.createElement('style');
customStyle.innerHTML = `
.filter-container{
  position: fixed;
  right: 0px;
  top: 10px;
  width: 4em;
  height: 30px;
  opacity: .3;
  background-color: white;
  overflow :hidden;
  display: flex;
  flex-direction: column;
  z-index: 99999;
}
.filter-container:hover{
  opacity: 1;
  height: 90%;
  width: 210px;
  overflow-y :scroll;
}
.filter-title{
  margin-block: 0;
  text-align: center;
}
.filter-container:hover .filter-title{
  margin-block: 5px;
}
.filter-btn{
  margin: 10px auto;
}
#filter-form{
  display: flex;
  flex-direction: column;
}`;
document.head.appendChild(customStyle);
