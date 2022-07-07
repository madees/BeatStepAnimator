

/* ********** GENERAL SCRIPTING **********************

		This templates shows what you can do in this is module script
		All the code outside functions will be executed each time this script is loaded, meaning at file load, when hitting the "reload" button or when saving this file
*/


// You can add custom parameters to use in your script here, they will be replaced each time this script is saved
var lastNoteOn = script.addIntParameter("Last Note On","Last received Note On as integer",0,0,127); 		//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1

//Here are all the type of parameters you can create
/*
var myTrigger = script.addTrigger("My Trigger", "Trigger description"); 									//This will add a trigger (button)
var myBoolParam = script.addBoolParameter("My Bool Param","Description of my bool param",false); 			//This will add a boolean parameter (toggle), defaut unchecked
var myFloatParam = script.addFloatParameter("My Float Param","Description of my float param",.1,0,1); 		//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1
var myIntParam = script.addIntParameter("My Int Param","Description of my int param",2,0,10); 				//This will add an integer number parameter (stepper), default value of 2, with a range between 0 and 10
var myStringParam = script.addStringParameter("My String Param","Description of my string param", "cool");	//This will add a string parameter (text field), default value is "cool"
var myColorParam = script.addColorParameter("My Color Param","Description of my color param",0xff0000ff); 	//This will add a color parameter (color picker), default value of opaque blue (ARGB)
var myP2DParam = script.addPoint2DParameter("My P2D Param","Description of my p2d param"); 					//This will add a point 2d parameter
var myP3DParam = script.addPoint3DParameter("My P3D Param","Description of my p3d param"); 					//This will add a point 3d parameter
var myTargetParam = script.addTargetParameter("My Target Param","Description of my target param"); 			//This will add a target parameter (to reference another parameter)
var myEnumParam = script.addEnumParameter("My Enum Param","Description of my enum param",					//This will add a enum parameter (dropdown with options)
											"Option 1", 1,													//Each pair of values after the first 2 arguments define an option and its linked data
											"Option 2", 5,												    //First argument of an option is the label (string)
											"Option 3", "banana"											//Second argument is the value, it can be whatever you want
											); 	

var myFileParam = script.addFileParameter("My File Param", "Description of my file param");					//Adds a file parameter to browse for a file. Can have a third argument "directoryMode" 										
*/


//you can also declare custom internal variable
//var myValue = 5;

/*
 The init() function will allow you to init everything you want after the script has been checked and loaded
 WARNING it also means that if you change values of your parameters by hand and set their values inside the init() function, they will be reset to this value each time the script is reloaded !
*/
function init()
{
	//myFloatParam.set(5); //The .set() function set the parameter to this value.
	//myColorParam.set([1,.5,1,1]);	//for a color parameter, you need to pass an array with 3 (RGB) or 4 (RGBA) values.
	//myP2DParam.set([1.5,-5]); // for a Point2D parameter, you need to pass 2 values (XY)
	//myP3DParam.set([1.5,2,-3]); // for a Point3D parameter, you need to pass 3 values (XYZ)
}

/*
 This function will be called each time a parameter of your script has changed
*/
function scriptParameterChanged(param)
{
	//You can use the script.log() function to show an information inside the logger panel. To be able to actuallt see it in the logger panel, you will have to turn on "Log" on this script.
	script.log("Parameter changed : "+param.name); //All parameters have "name" property
	if(param.is(myTrigger)) 
	{
		script.log("Trigger !"); //You can check if two variables are the reference to the same parameter or object with the method .is()
		//Here we can for example show a "Ok cancel" box. The result will be called in the messageBoxCallback function below
		//util.showOkCancelBox("myBoxId", "Super warning!", "This is a warning for you", "warning", "Got it","Naaah");
	}
	else if(param.is(myEnumParam))
	{
		script.log("Key = "+param.getKey()+", data = "+param.get()); //The enum parameter has a special function getKey() to get the key associated to the option. .get() will give you the data associated
	}
	else
	{
		script.log("Value is "+param.get()); //All parameters have a get() method that will return their value
	} 
}

/*
 This function, if you declare it, will launch a timer at 50hz, calling this method on each tick
*/
/*
function update(deltaTime)
{
	script.log("Update : "+util.getTime()+", delta = "+deltaTime); //deltaTime is the time between now and last update() call, util.getTime() will give you a timestamp relative to either the launch time of the software, or the start of the computer.
}
*/

/*
 This function, if you declare it, will be called when after a user has made a choice from a okCancel box or YesNoCancel box that you launched from this script 
*/
/*
function messageBoxCallback(id, result)
{
	script.log("Message box callback : "+id+" > "+result); //deltaTime is the time between now and last update() call, util.getTime() will give you a timestamp relative to either the launch time of the software, or the start of the computer.
}
*/

/* ********** MODULE SPECIFIC SCRIPTING **********************

	The "local" variable refers to the object containing the scripts. In this case, the local variable refers to the module.
	It means that you can access any control inside  this module by accessing it through its address.
	For instance, if the module has a float value named "Density", you can access it via local.values.density
	Then you can retrieve its value using local.values.density.get() and change its value using local.values.density.set()
*/

/*
 This function will be called each time a parameter of this module has changed, meaning a parameter or trigger inside the "Parameters" panel of this module
 This function only exists because the script is in a module
*/
function moduleParameterChanged(param)
{
	if(param.isParameter())
	{
		script.log("Module parameter changed : "+param.name+" > "+param.get());
	}else 
	{
		script.log("Module parameter triggered : "+param.name);	
	}
}

/*
 This function will be called each time a value of this module has changed, meaning a parameter or trigger inside the "Values" panel of this module
 This function only exists because the script is in a module
*/
function moduleValueChanged(value)
{
	if(value.isParameter())
	{
		script.log("Module value changed : "+value.name+" > "+value.get());	
	}else 
	{
		script.log("Module value triggered : "+value.name);	
	}
}

/* ********** MIDI MODULE SPECIFIC SCRIPTING ********************* */
/*

MIDI Modules have specific methods that can be used to send MIDI events such as noteOn, noteOff, controlChange and sysEx messages from Script.
If you want to send a MIDI event from this script, you can do the following :

local.sendNoteOn(1, 12, 127); //This will send a NoteOn Event on channel 1, pitch 12, velocity 127
local.sendNoteOff(1, 12); //This will send a NoteOff Event on chanenl 1, pitch 12
local.sendCC(3, 20, 65); //This will send a ControlChange on channel 3, number 20, value 65
local.sendSysEx(15,20,115,10); //This will send 4 bytes as a SysEx message
local.sendPitchWheel (3, 2000);
local.sendChannelPressure (1, 67);
local.sendAfterTouch (3, 20, 65);
*/

/*
You can intercept MIDI Events with the functions below
*/

function noteOnEvent(channel, pitch, velocity)
{
	script.log("Note on received "+channel+", "+pitch+", "+velocity);
	if(channel==1) lastNoteOn.set(pitch);
}


function noteOffEvent(channel, pitch, velocity)
{
	script.log("Note off received "+channel+", "+pitch+", "+velocity);
}

function ccEvent(channel, number, value)
{
	script.log("ControlChange received "+channel+", "+number+", "+value);
}


function ccEvent(channel, number, value)
{
	script.log("ControlChange received "+channel+", "+number+", "+value);
}


function sysExEvent(data)
{
	script.log("Sysex Message received, "+data.length+" bytes :");
	for(var i=0; i < data.length; i++)
	{
		script.log(" > "+data[i]);
	}
}

function pitchWheelEvent(channel, value) 
{
	script.log("PitchWheel received "+channel+", "+value);
}

function channelPressureEvent(channel, value) 
{
	script.log("Channel Pressure received "+channel+", "+value);
}

function afterTouchEvent(channel, note, value) 
{
	script.log("After Touch received "+channel+", "+note+", "+value);
}
