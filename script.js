function zamiana(a)
{
    var b = "";
  for (var i = a.length - 1; i >= 0; i--)
      {
          b += a[i];
          //console.log(i, a[i], b);
          
      }
    return b;
}

var c = zamiana("pies");
console.log(c);

// funkcja 2

function zamiana2(a)
{
    var b = a.split(""); //split to funkcja, która dzieli string po znaku zdefiniowanym w parametrze
    
    //console.log(b);

    var e = b.reverse(); //reverse- odwraca kolejnosć elementów w tablicy;
    //console.log(e);
    
    var f = e.join(""); //scala elem. tablicy
    //console.log(f);
    
    return f;
}

var d = zamiana2("Szarlotka");
console.log(d);