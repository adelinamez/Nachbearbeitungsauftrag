// Aufgabe 1

    function umkehren(str) {
      return str.split("").reverse().join("");
    }

    const umgekehrterString = umkehren("javascript");
    console.log(umgekehrterString);

// Aufgabe 2

    function istSchaltjahr(jahr) {
      if (jahr % 400 === 0) {
        return true;
      }
      if (jahr % 100 === 0) {
        return false;
      }
      return jahr % 4 === 0;
    }

          // Beispiele/ Kontrolle 
          console.log(istSchaltjahr(1997));
          console.log(istSchaltjahr(2000)); 

          // Teilaufgaben 1-3
          console.log(istSchaltjahr(2024));
          console.log(istSchaltjahr(1800));
          console.log(istSchaltjahr(1900));
          console.log(istSchaltjahr(2100));
          console.log(istSchaltjahr(2200));

// Aufgabe 3
    function istPangramm(satz) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const niedrigerSatz = satz.toLowerCase();

      for (let buchstabe of alphabet) {
          if (!niedrigerSatz.includes(buchstabe)) {
              return false;
          }
      }
      return true;
    }

    const testSatz = "The quick brown fox jumps over the lazy dog.";
    console.log(istPangramm(testSatz));  



