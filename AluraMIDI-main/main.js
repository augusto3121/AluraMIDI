function tocaSom(idElementoAudio){
    document.querySelector('idElementoAudio').play('');
    }
    const ListaDeTeclas = document.querySelectorAll('.tecla');
    
    ListaDeTeclas[0].onclick = TocaSomPom;
   while(contador < 9) {
    ListaDeTeclas[contador].onclick = TocaSomPom;
    contador = contador + 1;
   }
    ListaDeTeclas[1].onclick = TocaSomCLap;
    ListaDeTeclas[2].onclick = TocaSomTim;
    ListaDeTeclas[3].onclick = TocaSomPuff;
   

    