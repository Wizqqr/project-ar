// function clock(){
//     let date = new Date(),
//            hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
//            minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
//            seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
//            let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//            let days = date.getDay();
//      document.getElementById("clock").innerHTML = hours + ':' + minutes + ':' + seconds;
//     let day = document.getElementById("dayOfWeek");
//     day.innerHTML = dayOfWeek[days];
//   }
//   setInterval(clock, 1000);
//   clock();