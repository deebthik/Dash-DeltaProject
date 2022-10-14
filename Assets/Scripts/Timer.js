#pragma strict

function Start () {

}

function Update () {

	if (!Ball.game_over && Ball.timer_start){

		//var time_string : String = String.Format("{0:00}:{1:00}", (Time.time)/60, (Time.time)%60);
		GameObject.Find("Timer Value").GetComponent(TextMesh).text = (parseInt((Time.time-Ball.time_start)/60)).ToString("00") + ":" + (parseInt((Time.time-Ball.time_start)%60)).ToString("00");
		//Tip for the above statement^ : Converting the time.time/blabla values to int using parseInt solved the problem of the timer not going beyond 2 minutes, it used to go 1:59, 1:60 then back to 1:00. It's alright now :D

	}
}
