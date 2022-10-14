#pragma strict

/*private var ray : Ray;
private var hit : RaycastHit;*/

public var cam: Camera;

var launch : boolean;
var begin : boolean;
var ball_rigidbody : Rigidbody2D;
public static var collisions :  int;
var in_play : boolean;
public static var game_over : boolean;
public static var time_start : float;
public static var timer_start : boolean;

function Start () {

	launch = false;
	begin = true;
	ball_rigidbody = this.GetComponent(Rigidbody2D);

}

function Update () {

	if (game_over){

		Destroy(GameObject.Find("Ball"));
		iTween.MoveTo(GameObject.Find("Game Over"), iTween.Hash("position", Vector3(0, -3.9, 0), "islocal", true, "time", 1));
		iTween.MoveTo(GameObject.Find("Flip Symbol Right"), iTween.Hash("position", Vector3(5, -3.7, 0), "islocal", true, "time", 1));
		iTween.MoveTo(GameObject.Find("Flip Symbol Left"), iTween.Hash("position", Vector3(-5, -3.7, 0), "islocal", true, "time", 1));
		GameObject.Find("Home Symbol").transform.position.x = 0;
		iTween.ScaleTo(GameObject.Find("Home Symbol"), iTween.Hash("scale", Vector3(0.15, 0.15, 0.15), "islocal", true, "time", 2));

	}

	if (in_play){

		if (Mathf.Sqrt(Mathf.Pow((GameObject.Find("Ball").transform.position.x - 0), 2) + Mathf.Pow((GameObject.Find("Ball").transform.position.y - (-0.2)), 2)) > 2.5){

			in_play = false;
			game_over = true;

		}

		if (collisions >= 50){

			game_over = true;

		}

	}

	if (in_play && ball_rigidbody.velocity.magnitude < 2.5){

		ball_rigidbody.velocity = ball_rigidbody.velocity * 2;

	}

	if (begin){

		Begin();
		begin = false;

	}

	if (launch){

		ball_rigidbody.velocity = Vector2.up * 3.5;
		launch = false;
	}

}

function OnCollisionEnter2D(collision: Collision2D){

	if (collision.gameObject.name == "Circle"){

		collisions += 1;
		GameObject.Find("Collisions Cue").GetComponent(Animation).Play();

		/*iTween.ScaleTo(GameObject.Find("Ball"), iTween.Hash("scale", Vector3(this.transform.localScale.x-0.0001, this.transform.localScale.y-0.0001, this.transform.localScale.z-0.0001), "islocal", true, "time", 1));
		GameObject.Find("Ball").GetComponent(TrailRenderer).startWidth -= 0.001;
		GameObject.Find("Ball").GetComponent(TrailRenderer).time -= 0.001;*/

	}

}

function Begin(){

	yield WaitForSeconds(1);

	iTween.MoveTo(GameObject.Find("Collisions"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Timer"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 1));

	yield WaitForSeconds(1);

	GameObject.Find("Deflectors").transform.position.x = 0;
	iTween.ScaleTo(GameObject.Find("Deflectors"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Flip Symbol Right"), iTween.Hash("position", Vector3(1.6, -3.7, 0), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Flip Symbol Left"), iTween.Hash("position", Vector3(-1.6, -3.7, 0), "islocal", true, "time", 1));

	yield WaitForSeconds(1);

	time_start = Time.time;
	timer_start = true;
	launch = true;
	in_play = true;

}

