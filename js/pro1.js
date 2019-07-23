var a=["img/%D0%A1%D0%BB%D0%BE%D0%B9%205.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%206.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%207.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%208.png"];
var aa=["НЕЙМИНГ","НЕЙМИНГ","АЫАЫАВА","SGFHGD"];
var aaa=[];	
var aaaa=[];
var num=0;
function next(){
	let slide=document.getElementById('pic');
	num++;
	if(num>a.length-1){
		num=0;
	}
	slide.src=a[num];
	slide1=aa[num];
}
function prev(){
	let slide=document.getElementById('pic');
	
	num--;
	if(num<0){
		num=a.length-1;
	}
	slide.src=a[num];
}
var a1=["img/%D0%A1%D0%BB%D0%BE%D0%B9%2013.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%2014.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%2015.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%2016.png"];
var num1=0;
function next1(){
	let slide=document.getElementById('pic1');
	
	num1++;
	if(num1>a1.length-1){
		num1=0;
	}
	if(num1==0){
		let slide1=document.getElementById('picc1').innerHTML="<h1>Управляющий директор</h1><br><p>наш идейный вдохновитель и стратег.Контролирует,организовывает,<br>объединяет нашу команду творцов для максимального результата.</p>";
	}
	if(num1==1){
		let slide1=document.getElementById('picc1').innerHTML="<h1>Главный по видео</h1><br><p>Живет мыслью о создании гениальных видеороликов.Называет себя режиссером своей судьбы</p>" ;
	}
	if(num1==2){
		let slide1=document.getElementById('picc1').innerHTML="<h1>Директор по дизайну</h1><br><p>Считатет, что в мире гармонично и прекрасно.Природные краски и цвета,архитектура Рима и Парижа - лучшее вдохновление для создания бренда клиента</p>" ;
	}
	if(num1==3){
		let slide1=document.getElementById('picc1').innerHTML='<h1>Фотограф</h1><br><p>Запечатлевает разные моменты.некоторые дарят эмоцию грусти,неизбежности и страха.А другие - радости,любви и тепла.В нашей работе мы должны уметь играть на разных "струнах" души.</p> ';
	}
	slide.src=a1[num1];

	
}
function prev1(){
	let slide=document.getElementById('pic1');
	
	num1--;
	if(num1<0){
		num1=a1.length-1;
	}
	if(num1==0){
		let slide1=document.getElementById('picc1').innerHTML="<h1>Управляющий директор</h1><br><p>наш идейный вдохновитель и стратег.Контролирует,организовывает,<br>объединяет нашу команду творцов для максимального результата.</p>";
	}
	if(num1==1){
		let slide1=document.getElementById('picc1').innerHTML="<h1>Главный по видео</h1><br><p>Живет мыслью о создании гениальных видеороликов.Называет себя режиссером своей судьбы</p>" ;
	}
	if(num1==2){
		let slide1=document.getElementById('picc1').innerHTML="<h1>Директор по дизайну</h1><br><p>Считатет, что в мире гармонично и прекрасно.Природные краски и цвета,архитектура Рима и Парижа - лучшее вдохновление для создания бренда клиента</p>" ;
	}
	if(num1==3){
		let slide1=document.getElementById('picc1').innerHTML='<h1>Фотограф</h1><br><p>Запечатлевает разные моменты.некоторые дарят эмоцию грусти,неизбежности и страха.А другие - радости,любви и тепла.В нашей работе мы должны уметь играть на разных "струнах" души.</p> ';
	}
	slide.src=a1[num1];
}
var a2=["img/%D0%A1%D0%BB%D0%BE%D0%B9%2010.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%2011.png","img/%D0%A1%D0%BB%D0%BE%D0%B9%2012.png"];
var num2=0;
function next2(){
	let slide=document.getElementById('pic2');
	
	num2++;
	if(num2>a2.length-1){
		num2=0;
	}
	if(num2==0){
		let slide1=document.getElementById('picc2').innerHTML="<h1>Зарплаты и дефицит кадров.</h1><br><p>Почитайте!Очень интересная информация про белорусские IT зарплаты.Какие специалисты нынче в дефиците?</p>";
	}
	if(num2==1){
		let slide1=document.getElementById('picc2').innerHTML="<h1>Конференция SETCON'2019</h1><br><p>Конференция SETCON - это крутые эксперты ,интересные доклады и много общения.В 2019 году SETCON возврещается пятой версией.</p>" ;
	}
	if(num2==2){
		let slide1=document.getElementById('picc2').innerHTML="<h1>Как выжить бизнесу в сети</h1><br><p>Мероприятие будет полезно предпринимателям,специалистам,занимающимся продвижением товаров и услуг в интернете,маркетологам,SMM...</p>" ;
	}
	slide.src=a2[num2];
	
}
function prev2(){
	var slide=document.getElementById('pic2');
	
	num2--;
	if(num2<0){
		num2=a2.length-1;
	}
	if(num2==0){
		let slide1=document.getElementById('picc2').innerHTML="<h1>Зарплаты и дефицит кадров.</h1><br><p>Почитайте!Очень интересная информация про белорусские IT зарплаты.Какие специалисты нынче в дефиците?</p>";
	}
	if(num2==1){
		let slide1=document.getElementById('picc2').innerHTML="<h1>Конференция SETCON'2019</h1><br><p>Конференция SETCON - это крутые эксперты ,интересные доклады и много общения.В 2019 году SETCON возврещается пятой версией.</p>" ;
	}
	if(num2==2){
		let slide1=document.getElementById('picc2').innerHTML="<h1>Как выжить бизнесу в сети</h1><br><p>Мероприятие будет полезно предпринимателям,специалистам,занимающимся продвижением товаров и услуг в интернете,маркетологам,SMM...</p>" ;
	}
	slide.src=a2[num2];
}