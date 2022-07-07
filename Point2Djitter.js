/*
MD 28/06/2022 
This function takes Point2D and add an amount of random jitter to its values.
The amount can be set by Amplitude variable
*/

var Amplitude = script.addFloatParameter("Amplitude", "Amplitude of jitter", 0.5, 0, 1);

function filter(inputs, minValues, maxValues, multiplexIndex)
{
	var result = [];
	result[0] = [inputs[0][0]+(Amplitude.get()*(Math.random()-0.5)) , inputs[0][1]+(Amplitude.get()*(Math.random()-0.5))];
	return result;
}
