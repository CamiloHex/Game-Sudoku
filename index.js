//funcion que resuelve el sudoku.
function Sudoku(){
    //Se crea una matriz 9x9 para contener los datos iniciales ingresados
    let sudoku = new Array() 
    for (let fila=0; fila<9; fila++){
        sudoku[fila] = []
        for (let columna=0; columna<9; columna++)
        sudoku[fila][columna]=0;
    }
    //Se llena la matriz inicial con los datos capturados por los inputs
    let i = 1
    for (let fila=0; fila<9; fila++){
        for (let columna=0; columna<9; columna++){
            sudoku[fila][columna] = document.getElementById('dato'+i).value
            i = i+1
        }
    }
   
    let finalizo = false /* Mantiene el ciclo hasta que resuelva el Sudoku */
    let ciclos = 0 /* Lleva el número de iteraciones */
    let solucion = new Array() /* Tablero en el que se trabaja */
    for (let fila=0; fila<9; fila++){
        solucion[fila] = []
        for (let columna=0; columna<9; columna++)
        solucion[fila][columna]=0;
    }
    let DESTRUYE = 700
    do{
        for(let fila=0; fila<9; fila++){
            for(let columna=0; columna<9; columna++)
            if(sudoku[fila][columna] != 0) solucion[fila][columna] = sudoku[fila][columna]
        }
        let numValido = true;
        do{
            let posX = Math.floor(Math.random()*9)
            let posY = Math.floor(Math.random()*9)
            let numero = Math.floor(Math.random()*9)+1
            numValido=true
            155
            for(let cont=0; cont<9; cont++)
            if(solucion[cont][posY] == numero || solucion[posX][cont] == numero)
            numValido = false
            if(numValido) solucion[posX][posY] = numero
        }while(!numValido)
            
        for(let cuadroX=0; cuadroX<=6; cuadroX+=3)
        for(let cuadroY=0; cuadroY<=6; cuadroY+=3){
            let numRepite=0
            for(let valor=1; valor<=9; valor++){
                numRepite=0;
                for(let posX=0; posX<3; posX++)
                for(let posY=0; posY<3; posY++){
                    if(solucion[cuadroX+posX][cuadroY+posY]==valor) numRepite++
                    if (numRepite>1) break 
                }
                if(numRepite>1)
                for(let posX=0; posX<3; posX++)
                for(let posY=0; posY<3; posY++)
                if(solucion[cuadroX+posX][cuadroY+posY] == valor)
                solucion[cuadroX+posX][cuadroY+posY] = 0
            }        
        }
        finalizo=true
        for(let posX=0; posX<9; posX++)
        for(let posY=0; posY<9; posY++)
        if(solucion[posX][posY] == 0) finalizo=false
        ciclos++
        if(ciclos%DESTRUYE == 0)
        for(let posX=0; posX<9; posX++)
        for(let posY=0; posY<9; posY++)
        if(Math.floor(Math.random()*3) == 0)
        solucion[posX][posY] = 0
    } while (!finalizo)
    
    //Ciclo para agregar la solucion a la matrix final.
    j = 1
    for(let posX=0; posX<9; posX++){
        for(let posY=0; posY<9; posY++){
            let prov = solucion[posX][posY]
            document.querySelector('#datofin'+j).value = prov
            j += 1
        }    
    }
    
}





