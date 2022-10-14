#pragma strict

function Start () {

}

function Update () {

	GameObject.Find("Collisions Value").GetComponent(TextMesh).text = (Ball.collisions).ToString();

}