#pragma strict

function Start () {

}

function Update () {

	if (Input.GetKeyDown(KeyCode.Escape)){

		if (SceneManagement.SceneManager.GetActiveScene().name == "Menu_Scene"){

			Application.Quit();

		}

		else if(SceneManagement.SceneManager.GetActiveScene().name == "Main_Scene"){

			Ball.game_over = false;
	    	Ball.collisions = 0;
	    	Ball.timer_start = false;
	    	SceneManagement.SceneManager.LoadScene("Menu_Scene");

		}

	}

}