const Campo1 = document.querySelector('#campo1')
const Campo2 = document.querySelector('#campo2')
const Campo3 = document.querySelector('#campo3')
const Campo4 = document.querySelector('#campo4')
const Campo5 = document.querySelector('#campo5')
const Campo6 = document.querySelector('#campo6')
const Campo7 = document.querySelector('#campo7')
const Campo8 = document.querySelector('#campo8')
const Campo9 = document.querySelector('#campo9')

const ElementoMain = document.querySelector('.conteiner')

const rodape = document.querySelector('.rodape');

let vez = 0;

const x = 'Ⅹ'
const o = '◯'

let ExpessuraLinha = 5;

/* const LinhaVencedorHorizontal = (x,y,z) => {
    const LinhaVenceu = document.createElement('canvas');
    LinhaVenceu.classList.add('canvas');
    document.querySelector('.rodape');
    document.body.insertBefore(LinhaVenceu,rodape)
     let ctx = LinhaVenceu.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(x,y);
     ctx.lineTo(z,y);
     if(vez === 1) {
         ctx.strokeStyle = 'red'
     } else if(vez  === 0) {
        ctx.strokeStyle = 'blue'
     }
     ctx.stroke()

} */

const LinhaVencedorHorizontal = (x,y,z) => {
    const LinhaVenceu = document.createElement('canvas');
    LinhaVenceu.classList.add('canvas');
    ElementoMain.appendChild(LinhaVenceu);
    
    LinhaVenceu.width = ElementoMain.offsetWidth;
    LinhaVenceu.height = ElementoMain.offsetHeight;

     let ctx = LinhaVenceu.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(x,y);
     ctx.lineTo(z,y);
     if(vez === 1) {
         ctx.strokeStyle = 'red'
     } else if(vez  === 0) {
        ctx.strokeStyle = 'blue'
     }
     ctx.lineWidth = ExpessuraLinha;
     ctx.stroke()

}

/* const LinhaVencedorVertical = (x,y,z) => {
    const LinhaVenceu = document.createElement('canvas');
    LinhaVenceu.classList.add('canvas');
    document.querySelector('.rodape');
    document.body.insertBefore(LinhaVenceu,rodape)
     let ctx = LinhaVenceu.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(x,y);
     ctx.lineTo(x,z);
     if(vez === 1) {
        ctx.strokeStyle = 'red'
    } else if(vez  === 0) {
       ctx.strokeStyle = 'blue'
    }
     ctx.stroke()

} */


const LinhaVencedorVertical = (x,y,z) => {
    const LinhaVenceu = document.createElement('canvas');
    LinhaVenceu.classList.add('canvas');
    ElementoMain.appendChild(LinhaVenceu);
    
    LinhaVenceu.width = ElementoMain.offsetWidth;
    LinhaVenceu.height = ElementoMain.offsetHeight;

     let ctx = LinhaVenceu.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(x,y);
     ctx.lineTo(x,z);
     if(vez === 1) {
        ctx.strokeStyle = 'red'
    } else if(vez  === 0) {
       ctx.strokeStyle = 'blue'
    }
     ctx.lineWidth = ExpessuraLinha;
     ctx.stroke()

}

/* const LinhaVencedorDiagonal = (x,y,z,w) => {
    const LinhaVenceu = document.createElement('canvas');
    LinhaVenceu.classList.add('canvas');
    document.querySelector('.rodape');
    document.body.insertBefore(LinhaVenceu,rodape)
     let ctx = LinhaVenceu.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(x,y);
     ctx.lineTo(z,w);
     if(vez === 1) {
        ctx.strokeStyle = 'red'
    } else if(vez  === 0) {
       ctx.strokeStyle = 'blue'
    }
     ctx.stroke()

} */


const LinhaVencedorDiagonal = (x,y,z,w) => {
    const LinhaVenceu = document.createElement('canvas');
    LinhaVenceu.classList.add('canvas');
    ElementoMain.appendChild(LinhaVenceu);
    
    LinhaVenceu.width = ElementoMain.offsetWidth;
    LinhaVenceu.height = ElementoMain.offsetHeight;
     let ctx = LinhaVenceu.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(x,y);
     ctx.lineTo(z,w);
     if(vez === 1) {
        ctx.strokeStyle = 'red'
    } else if(vez  === 0) {
       ctx.strokeStyle = 'blue'
    }
     ctx.lineWidth = ExpessuraLinha;
     ctx.stroke()

}

/* LinhaVencedorHorizontal(0,76,470)
LinhaVencedorHorizontal(0,233,470)
LinhaVencedorHorizontal(0,392,470)
LinhaVencedorVertical(75,0,470)
LinhaVencedorVertical(233,0,470)
LinhaVencedorVertical(391,0,470)
LinhaVencedorDiagonal(0,0,470,470)
LinhaVencedorDiagonal(466,0,0,466) */



const TelaVencedor = (v) => {
    const DivVencedor = document.createElement('div');
        DivVencedor.textContent = "Parabéns o " + v + " foi o vencedor";
        DivVencedor.classList.add('vencedor');
        document.querySelector('.rodape')
        document.body.insertBefore(DivVencedor, rodape);

        if(vez === 1){
            DivVencedor.style.backgroundColor = 'rgba(255,0,0,1)'
        } else if(vez === 0) {
             DivVencedor.style.backgroundColor = 'rgba(0,100,255, 1)'
        }
}





Campo1.addEventListener('click', () => {
    if(vez === 0){
        Campo1.textContent = x
        Campo1.style.color = 'red'
        vez ++
    } else if(vez === 1) {
        Campo1.textContent = o
        Campo1.style.color = 'blue'
        vez = vez - 1
    }

    if(Campo1.textContent === Campo2.textContent && Campo3.textContent === Campo1.textContent || Campo1.textContent === Campo4.textContent && Campo7.textContent === Campo1.textContent || Campo1.textContent === Campo5.textContent && Campo9.textContent === Campo1.textContent) {
       setTimeout(() => {

        TelaVencedor(Campo1.textContent);
        
        if(Campo1.textContent === Campo2.textContent && Campo3.textContent === Campo1.textContent) {

            LinhaVencedorHorizontal(0,76,470)

        } else if(Campo1.textContent === Campo4.textContent && Campo1.textContent === Campo7.textContent) {

            LinhaVencedorVertical(75,0,470)

        } else if(Campo1.textContent === Campo5.textContent && Campo9.textContent === Campo1.textContent) {

            LinhaVencedorDiagonal(0,0,470,470)

        }

       },100)
    }
    
    Campo1.style.pointerEvents = "none"
})

Campo2.addEventListener('click', () => {
    if(vez === 0) {
        Campo2.textContent = x
        Campo2.style.color = 'red'
        vez ++
    } else if(vez === 1) {
        Campo2.textContent = o
        Campo2.style.color = 'blue'
        vez = vez - 1
    }

    if(Campo1.textContent === Campo2.textContent && Campo3.textContent === Campo1.textContent || Campo2.textContent === Campo5.textContent && Campo8.textContent === Campo2.textContent) {
        setTimeout(() => {

            TelaVencedor(Campo2.textContent);

            if(Campo1.textContent === Campo2.textContent && Campo3.textContent === Campo1.textContent) {

                LinhaVencedorHorizontal(0,76,470)

            } else if(Campo2.textContent === Campo5.textContent && Campo8.textContent === Campo2.textContent) {

                LinhaVencedorVertical(233,0,470)

            }

        },100)
     }

    Campo2.style.pointerEvents = "none"
})

Campo3.addEventListener('click', () => {
    if(vez === 0) {
        Campo3.textContent = x
        Campo3.style.color = 'red'
        vez ++  
    } else if(vez === 1) {
        Campo3.textContent = o
        Campo3.style.color = 'blue'
        vez = vez - 1
    }

    if(Campo1.textContent === Campo2.textContent && Campo3.textContent === Campo1.textContent || Campo3.textContent === Campo6.textContent && Campo9.textContent === Campo3.textContent || Campo3.textContent === Campo5.textContent && Campo7.textContent === Campo3.textContent) {
        setTimeout(() => {

            TelaVencedor(Campo3.textContent);
    
            if(Campo1.textContent === Campo2.textContent && Campo3.textContent === Campo1.textContent) {

                LinhaVencedorHorizontal(0,76,470)

            } else if(Campo3.textContent === Campo6.textContent && Campo9.textContent === Campo3.textContent) {

                LinhaVencedorVertical(391,0,470)

            } else if(Campo3.textContent === Campo5.textContent && Campo7.textContent === Campo3.textContent) {

                LinhaVencedorDiagonal(466,0,0,466)

            }
        },100)
     }

    Campo3.style.pointerEvents = "none"
})

Campo4.addEventListener('click', () => {
    if(vez === 0) {
        Campo4.textContent = x
        Campo4.style.color = 'red'
        vez ++
    } else if(vez === 1) {
        Campo4.textContent = o
        Campo4.style.color = 'blue'
        vez = vez - 1
    }
    if(Campo4.textContent === Campo5.textContent && Campo4.textContent === Campo6.textContent || Campo4.textContent === Campo1.textContent && Campo4.textContent === Campo7.textContent) {
        setTimeout(() => {

            TelaVencedor(Campo4.textContent)
         
            if(Campo4.textContent === Campo5.textContent && Campo4.textContent === Campo6.textContent) {

                LinhaVencedorHorizontal(0,233,470)

            } else if(Campo4.textContent === Campo1.textContent && Campo4.textContent === Campo7.textContent) {

                LinhaVencedorVertical(75,0,470)

            }

        },100)
     }

    Campo4.style.pointerEvents = "none"
})

Campo5.addEventListener('click', () => {
    if(vez === 0) {
        Campo5.textContent = x
        Campo5.style.color = 'red'
        vez ++
    } else if(vez === 1) {
        Campo5.textContent = o
        Campo5.style.color = 'blue'
        vez = vez - 1;
    }

    if(Campo4.textContent === Campo5.textContent && Campo5.textContent === Campo6.textContent || Campo2.textContent === Campo5.textContent && Campo2.textContent === Campo8.textContent || Campo1.textContent === Campo5.textContent && Campo1.textContent === Campo9.textContent || Campo3.textContent === Campo5.textContent && Campo3.textContent === Campo7.textContent) {
        setTimeout(() => {

            TelaVencedor(Campo5.textContent)

            if(Campo4.textContent === Campo5.textContent && Campo5.textContent === Campo6.textContent) {

                LinhaVencedorHorizontal(0,233,470)
  
            } else if(Campo2.textContent === Campo5.textContent && Campo2.textContent === Campo8.textContent ){

                LinhaVencedorVertical(233,0,470)

            } else if(Campo1.textContent === Campo5.textContent && Campo1.textContent === Campo9.textContent) {

                LinhaVencedorDiagonal(0,0,470,470)

            } else if(Campo3.textContent === Campo5.textContent && Campo3.textContent === Campo7.textContent) {

                LinhaVencedorDiagonal(466,0,0,466)

            }

        },100)
     }

    Campo5.style.pointerEvents = "none"
})

Campo6.addEventListener('click', () => {
    if(vez === 0) {
        Campo6.textContent = x
        Campo6.style.color = 'red'
        vez ++
    } else if(vez ===1) {
        Campo6.textContent = o;
        Campo6.style.color = 'blue'
        vez = vez - 1
    }

    if(Campo4.textContent === Campo5.textContent && Campo4.textContent === Campo6.textContent || Campo3.textContent === Campo6.textContent && Campo3.textContent === Campo9.textContent) {
        setTimeout(() => {
         
            TelaVencedor(Campo6.textContent)

            if(Campo4.textContent === Campo5.textContent && Campo4.textContent === Campo6.textContent) {

                LinhaVencedorHorizontal(0,233,470)

            } else if(Campo3.textContent === Campo6.textContent && Campo3.textContent === Campo9.textContent) {

                LinhaVencedorVertical(391,0,470);

            }

        },100)
     }

    Campo6.style.pointerEvents = "none"
})

Campo7.addEventListener('click', () => {
    if(vez === 0) {
        Campo7.textContent = x
        Campo7.style.color = 'red'
        vez ++
    } else if(vez === 1) {
        Campo7.textContent = o;
        Campo7.style.color = 'blue'
        vez = vez - 1
    }

    if(Campo1.textContent === Campo4.textContent && Campo1.textContent === Campo7.textContent || Campo7.textContent === Campo8.textContent && Campo7.textContent === Campo9.textContent || Campo7.textContent === Campo5.textContent && Campo7.textContent === Campo3.textContent) {
        setTimeout(() => {
         
            TelaVencedor(Campo7.textContent)

            if(Campo7.textContent === Campo8.textContent && Campo7.textContent === Campo9.textContent) {

                LinhaVencedorHorizontal(0,392,470)

            } else if(Campo1.textContent === Campo4.textContent && Campo1.textContent === Campo7.textContent) {

                LinhaVencedorVertical(75,0,470);

            } else if(Campo7.textContent === Campo5.textContent && Campo7.textContent === Campo3.textContent) {

                LinhaVencedorDiagonal(466,0,0,466);

            }

        },100)
     }

    Campo7.style.pointerEvents = "none"
})

Campo8.addEventListener('click', () => {
    if(vez === 0) {
        Campo8.textContent = x
        Campo8.style.color = 'red'
        vez ++
    } else if(vez === 1) {
        Campo8.textContent = o;
        Campo8.style.color = 'blue'
        vez = vez - 1
    }

    if(Campo2.textContent === Campo5.textContent && Campo2.textContent === Campo8.textContent || Campo7.textContent === Campo8.textContent && Campo7.textContent === Campo9.textContent) {
        setTimeout(() => {
         
            TelaVencedor(Campo8.textContent);

            if(Campo7.textContent === Campo8.textContent && Campo7.textContent === Campo9.textContent) {

                LinhaVencedorHorizontal(0,392,470)

            } else if(Campo2.textContent === Campo5.textContent && Campo2.textContent === Campo8.textContent) {

                LinhaVencedorVertical(233,0,470)

            }

        },100)
     }

    Campo8.style.pointerEvents = "none"
})

Campo9.addEventListener('click', () => {
    if(vez === 0) {
        Campo9.textContent = x
        Campo9.style.color = 'red'
        vez ++
    } else if(vez === 1) {
        Campo9.textContent = o;
        Campo9.style.color = 'blue'
        vez = vez - 1
    }

    if(Campo7.textContent === Campo8.textContent && Campo7.textContent === Campo9.textContent || Campo3.textContent === Campo6.textContent && Campo3.textContent === Campo9.textContent || Campo1.textContent === Campo5.textContent && Campo1.textContent === Campo9.textContent) {
        setTimeout(() => {
        
            TelaVencedor(Campo9.textContent);

            if(Campo7.textContent === Campo8.textContent && Campo7.textContent === Campo9.textContent) {

                LinhaVencedorHorizontal(0,392,470)

            } else if( Campo3.textContent === Campo6.textContent && Campo3.textContent === Campo9.textContent) {

                LinhaVencedorVertical(391,0,470);

            } else if(Campo1.textContent === Campo5.textContent && Campo1.textContent === Campo9.textContent) {

                LinhaVencedorDiagonal(466,0,0,466)

            }

        },100)
     }

    Campo9.style.pointerEvents = "none"
})



// tornar o código responsivo