#pragma strict

var set_rotation_forward : boolean;
var set_rotation_back : boolean;

public static var clockwise : boolean;
public static var anticlockwise : boolean;

public var cam: Camera;

function Start () {

	set_rotation_forward = false;
	set_rotation_back = true;

	clockwise = true;
	anticlockwise = false;

}

function Update () {

	if (Input.GetMouseButtonDown(0)){

		var mousePos : Vector3 = Input.mousePosition;
	    mousePos.z = 10;

	    var screenPos : Vector3 = cam.ScreenToWorldPoint(mousePos);

	    var hit : RaycastHit2D = Physics2D.Raycast(screenPos,Vector2.zero);

	    if(hit){

	    	if (hit.transform.name == "Home Symbol"){

	    		Ball.game_over = false;
	    		Ball.collisions = 0;
	    		Ball.timer_start = false;
	    		SceneManagement.SceneManager.LoadScene("Menu_Scene");

	    	}

	    	if (hit.transform.name == "Flip Symbol Right"){

	    		if (GameObject.Find("Deflector 1 Parent").transform.localRotation.z == 0){

	    			iTween.RotateTo(GameObject.Find("Deflector 1 Parent"), iTween.Hash("rotation", Vector3(0, 0, 180), "islocal", true, "time", 1));

	    		}else{

	    			iTween.RotateTo(GameObject.Find("Deflector 1 Parent"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 1));

	    		}

	    	}

	    	else if (hit.transform.name == "Flip Symbol Left"){

	    		if (GameObject.Find("Deflector 2 Parent").transform.localRotation.z == 0){

	    			iTween.RotateTo(GameObject.Find("Deflector 2 Parent"), iTween.Hash("rotation", Vector3(0, 0, 180), "islocal", true, "time", 1));

	    		}else{

	    			iTween.RotateTo(GameObject.Find("Deflector 2 Parent"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 1));

	    		}

	    	}else{

	    		Change_Direction();

	    	}

	    }else{

	    	Change_Direction();

	    }

	}

	if (clockwise){

		GameObject.Find("Deflectors").transform.Rotate(Vector3.back * 2.5);
		
	}

	else if (anticlockwise){

		GameObject.Find("Deflectors").transform.Rotate(Vector3.forward * 2.5);

	}

}

function Change_Direction(){

	if (clockwise){

		clockwise = false;
		anticlockwise = true;
		return null;

	}

	if (anticlockwise){

		clockwise = true;
		anticlockwise = false;
		return null;

	}

}

