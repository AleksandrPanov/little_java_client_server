function checkData() 
{
    var a = document.getElementById("a");
    /*test of gQuery*/
    var b = $("#b");
    var c = $("#c");

	a = parseFloat(a.value);
	b = parseFloat(b.val());
	c = parseFloat(c.val());
	if (isNaN(a) || isNaN(b) || isNaN(c)) 
	{
        alert("Коэффициенты должны быть вещественными числами");
		return;
    }
	else
	{
		callServer(a, b, c);
	}
}