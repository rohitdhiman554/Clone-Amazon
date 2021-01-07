

var x;
document.getElementById('text').onchange=function()
{
	text();

}





var text=function ()
{
	var x =document.getElementById('text').value;
	if(x.includes('@gmail.com'))
	{
			document.querySelector('.accepted').innerHTML=`Success;)`;

				document.querySelector('.accepted').style.color='green';
						document.querySelector('#text').style.border='1px solid green';
				return true;

	}
	else
	{
		document.querySelector('.accepted').innerHTML=`Failed enter correct email:(`;

		document.querySelector('.accepted').style.color='red';
						document.querySelector('#text').style.border='1px solid red';

		return false;
	}	





}

function validation()
{
	var x=text();




	if(x==true)
	{

		return true;

	}
	
	else
	{
		return false;
	}
}