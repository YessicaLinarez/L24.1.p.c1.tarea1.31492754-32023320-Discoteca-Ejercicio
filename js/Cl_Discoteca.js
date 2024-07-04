export default class Cl_Discoteca{
    constructor(){
        this.acumTotal = 0.0;
        this.contRumbera = 0;
        this.contRMayor21 = 0;
        this.contRumbero = 0;
    }
    procesarRumbero(ru){
        this.acumTotal+=ru.calcularPago();
    
        if(ru.sexo == 'F'){
            this.contRumbera++; 
        }

        if(ru.edad >= 21 && ru.sexo == 'F'){
            this.contRMayor21++;
        }
            if(ru.sexo == 'M'){
                this.contRumbero++;
        }   
    }
        
    devolveracumTotal(){
        return this.acumTotal;
    }
    devolvercontRumbera(){
        return this.contRumbera;
    }
    devolvercontRMayor21(){
        return this.contRMayor21;
    }

    calcularPorcentaje(){
        return this.contRMayor21*100/this.contRumbera;
    }
    

    porcRumberaM(){
        if(this.contRumbera >0){
            return (this.contRMayor21 * 100)/this.contRumbera;
        }
        else{return 0}
    }

    asisteciaMayor(){
        if(this.contRumbera > this.contRumbero)
            return 'Femenino';
        else
        if(this.contRumbera < this.contRumbero)
            return 'Masculino'
        else
            return 'Ambos'
    }
}