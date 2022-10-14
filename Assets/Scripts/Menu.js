#pragma strict

public var cam: Camera;

function Start () {

	iTween.MoveTo(GameObject.Find("© 2017"), iTween.Hash("position", Vector3(0, -0.25, 0), "islocal", true, "time", 1));

}

function Update () {

	//Original Code from online
	/*var mousePos : Vector3 = Input.mousePosition;
    mousePos.z = 10;

    var screenPos : Vector3 = cam.ScreenToWorldPoint(mousePos);

    var hit : RaycastHit2D = Physics2D.Raycast(screenPos,Vector2.zero);

    if(hit){

    	print (hit.collider.name);

    }*/

    if(Input.GetMouseButtonDown(0)){

	    var mousePos : Vector3 = Input.mousePosition;
	    mousePos.z = 10;

	    var screenPos : Vector3 = cam.ScreenToWorldPoint(mousePos);

	    var hit : RaycastHit2D = Physics2D.Raycast(screenPos,Vector2.zero);

	    if(hit){

	    	if (hit.transform.name == "Play Button"){

	    		SceneManagement.SceneManager.LoadScene("Main_Scene");

	    	}

	    	if (hit.transform.name == "Exit Button"){

	    		Application.Quit();

	    	}

	    }

    }



    Begin();

}

function Begin(){

	GameObject.Find("Play Button").GetComponent(Rigidbody2D).isKinematic = false;
	GameObject.Find("Exit Button").GetComponent(Rigidbody2D).isKinematic = false;

	iTween.MoveTo(GameObject.Find("© 2017"), iTween.Hash("position", Vector3(0, -4.4, 0), "islocal", true, "time", 1));
	yield WaitForSeconds(0.5);
	iTween.MoveTo(GameObject.Find("Developed by"), iTween.Hash("position", Vector3(-0.95, -3.7, 0), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Deebthik"), iTween.Hash("position", Vector3(1.25, -3.7, 0), "islocal", true, "time", 1));

}