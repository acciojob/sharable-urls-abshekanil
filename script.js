// your code here
document.addEventListener('DOMContentLoaded', function(){

	let urlLink = document.getElementById('url');
	let nameInput = document.getElementById('name');
	let yearInput = document.getElementById('year');
	let button = document.getElementById('button');

	button.addEventListener('click', function(){
		if(nameInput.value !== '' && yearInput.value !== '')
		{
			urlLink.innerHTML = 'https://localhost:8080/?name='+nameInput.value+'&year='+yearInput.value;
		}
		else if(nameInput.value !== '' && yearInput.value === '' )
		{
			urlLink.innerHTML = 'https://localhost:8080/?name='+nameInput.value;
		}
		else if(nameInput.value === '' && yearInput.value !== '' )
		{
			urlLink.innerHTML = 'https://localhost:8080/?year='+yearInput.value;
		}
	});
	
});



