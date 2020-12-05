class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
        this.calc = this.calc.bind(this);  
        this.inp = this.inp.bind(this);  
    }
    calc(){
        let x = this.state.x; //Ежемесячный платёж
        let s = this.state.s; //Сумма кредита
        let p = this.state.p; //Ежемесячная процентная ставка
        let n = this.state.n; //Cрок кредита
        let pm = p/100/12;
        x = Math.round(s*(pm+(pm/((1+pm)**n-1))));//Аннуитент
        if(x>0){
            this.setState({
                x:x
            })
        }
    }
    inp(e){
        let val = parseInt(e.target.value);
        if(e.target.id == "n"){
            if(e.target.value==""){
                val = 0;
            }
            this.setState({
                n: val,
            })
        }
        if(e.target.id == "s"){
            if(e.target.value==""){
                val = 0;
            }
            this.setState({
                s: val,
            })
        }
        if(e.target.id == "p"){
            if(e.target.value==""){
                val = 0;
            }
            this.setState({
                p: val,
            })
        }
        if(e.target.id == "x"){
            if(e.target.value==""){
                val = 0;
            }
            this.setState({
                x: val,
            })
        }
    }
    render(){
        return <div className="form">
            <h2>Расчет аннуитетного платежа</h2>
            <div className="text">
            <p>Cрок кредита(Месяцев):</p>
            <p>Сумма кредита(руб):</p>
            <p>Процентная ставка(Год/%):</p>
            <p>Ежемесячный платёж(руб):</p>
            </div>
            <div className="inputs">
            <input id="n" onChange={this.inp} value={this.state.n} onKeyUp={this.calc}></input>
            <input id="s" onChange={this.inp} value={this.state.s} onKeyUp={this.calc}></input>
            <input id="p" onChange={this.inp} value={this.state.p} onKeyUp={this.calc}></input>
            <input id="x" onChange={this.inp} value={this.state.x} onKeyUp={this.calc}></input>
            </div>
        </div>
    }
}