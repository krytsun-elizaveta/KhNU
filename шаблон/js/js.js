btn.addEventListener("click",fnc);


function fnc (){
    function fnc(){
        let b = parseInt(input_b.value);
        var el=document.getElementById('act');
        console.log(el.value);
        var b = Number(document.getElementById("b").value);
		let c = 0.2;
        var result = a * c;
        input_c.value = result;
        console.log(result);
    }
    btn.addEventListener("click",fnc);
}        function fnc(){
            let a = parseInt(input_a.value);
            let b = parseInt(input_b.value);
            var el=document.getElementById('act');
        console.log(el.value);
            var d;
            if (el.value ==1){d = a*(1+b*1/100);}
            if (el.value ==2){d = a*(1+b*2/100);}
            if (el.value ==3){d = a*(1+b*3/100);}
            if (el.value ==4){d = a*(1+b*4/100);}
            input_d.value = d;
            console.log(d);
        }
        btn.addEventListener("click",fnc);