class Publication{
    constructor(Title, Text, P_Date){
        this.Title = Title;
        this.Text = Text;
        this.P_Date = new Date(P_Date);
    }
    getDate(){
        return this.P_Date;
    }
}
const public1 = new Publication('Hola','Que estes bien','11-14-2020');
console.log(public1.getDate());