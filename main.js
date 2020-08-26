
var pic = 0;

function picturechange()
{
	if (pic==0)
	{
		document.getElementById("mainpic").style.display='none';
		document.getElementById("altpic").style.display='block';
	}
	else
	{
		document.getElementById("mainpic").style.display='block';
		document.getElementById("altpic").style.display='none';
	}
	pic = (pic+1)%2;
}