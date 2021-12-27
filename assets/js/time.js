function renderTime() {
			var currentTime = new Date();
           /* var month = currentTime.getMonth() + 1; //months from 1-12
            var day = currentTime.getDate();
            var year = currentTime.getFullYear(); */
			var diem = "AM";
			var h = currentTime.getHours();
			var m = currentTime.getMinutes();
			var s = currentTime.getSeconds();
			setTimeout('renderTime()',1000);
			if (h == 0) {
				h = 12;
			} else if (h > 12) { 
				h = h - 12;
				diem="PM";
			}
			if (h < 10) {
				h = "0" + h;
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}
	/*	document.getElementById('date').innerHTML=""+day+"."+month+"."+year+"";  */
			var myClock = document.getElementById('clockDisplay');
			myClock.textContent = h + ":" + m + ":" + s + " " + diem;
			myClock.innerText = h + ":" + m + ":" + s + " " + diem;
			}
			renderTime();
			

            