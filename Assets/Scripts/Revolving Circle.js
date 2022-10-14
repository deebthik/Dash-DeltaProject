#pragma strict

var begin : boolean;
var revolve : boolean;

function Start () {

	begin = true;
	revolve = false;

}

function Update () {

	if (begin){

		Begin();
		begin = false;

	}

	if (revolve && !Ball.game_over){

		this.transform.position.x = 0;
		this.transform.Rotate(Vector3.forward * 30);

	}

	else if (revolve && Ball.game_over){

		this.transform.Rotate(Vector3.back * 30);

	}
	
}

function Begin(){

	yield WaitForSeconds(3.2);
	revolve = true;

}