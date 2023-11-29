function Greeting() {
    let hrs = new Date().getHours();
    let greet = "";
    if(hrs < 12){
      greet = "Morning";
    } else if(hrs < 18){
        greet = "Afternoon";
    } else {
        greet = "Evening";
    }
    return (
    <h3>Good {greet}!</h3>
  )
}
export default Greeting;