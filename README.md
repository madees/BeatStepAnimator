# BeatStepAnimator
Example of Chataigne DS100 OSC Module and ADM-OSC usage with Arturia BeatStep midi controller as a Live Object Animator as mixing console side car or for musician on stage.

A simple interface to generate Soundscape sound object animation in live situation.

![](https://github.com/madees/BeatStepAnimator/blob/main/BeatStep.jpg)

![](https://github.com/madees/BeatStepAnimator/blob/main/Dashboard.JPG)

It provides 9 animators, that can move maximum 17 objects :

### With BeatStep in CNTRL mode (red)
Each animator use a vertical slice of the controller. bottom buttons are activates, top buttons are tap triggers. The two rotary encoders above are principal parameters.
You can tap animator #1 button to sync tempo, or sync it to BeatStep internal tempo.
Above each XY pad you can set the remote object number.
Each animator has its own number of beat steps count setting, you can resync all with "reset phase", desync them by individual "phase shift" button, or on the opposite each tap reset individual phase.

* 4x "Trajectorizer" (Anims 1-4) : moves objects along trajectories. Start position and speed as rotary button parameters. Tap with upper button to launch manually, activate with lower button to auto trig on each beat step. You can activate "SYM" to control two symetrical (left/right) objects with the same animator. "Beats" parameter is the number of beats count for each auto trigger, you can shift the beat if it is set to more than one, a flashing light helps you to see the settings.
* 2x "Randomizer" (Anims 5-6) : set object position along trajectories, with random jitter and position as rotary button parameters. Tap to generate a new position, activate to auto generate on each beat step. Paired objects have same position on trajectory, but jitter random generated positions are different.

  Pressing "reset all phase" will reset all time shifts between those 6 animators.
  Resync all will reset all to the first beat.
  
* 2x "Circlellizer" (Anims 7-8) : moves objects with circular LFO, random jitter and start position as rotary button parameters. "Tap" to set rotation speed ("tap/cycle" is the number of tap for a full circle), "reset & Activate" to launch rotation and reset phase (center front). . You can set with below XY pads the center of rotation and distance as circle radius. Paired objects have their own radius, and phase shift from first object. "Auto tap" sync the rotation speed to global BPM, taking also "tap/cycle" parameter.

The big knob is mapped to all DS100 outputs level. !!! it will overwrite all matrix ouptus levels !!!

### With BeatStep in SEQ mode (blue)
Anim 9 "Stepseqzer" setting for DS100 remote object number.
Each step parameter is mapped to positions on Trajectory9.
With BeatStep in STOP mode, you can preset positions on each step. Buttons will activate those steps in PLAY mode.

The big knob is BeatStep tempo setting.

### BPM sync
There are four options:
* Beatstep : use its internal BPM generator. Can be changed with big know in SEQ mode.
* EXT : use another MIDI device to receive clock.
* Tap 7 : use first Circlellizer tapped tempo to setup BPM
* Tap 8 : use second Circlellizer tapped tempo to setup BPM
* Ableton : use Ableton Link to setup BPM. It will also reset all animators to first beat at each bar.

## How to setup
1. First use Arturia's Midi Control Center to setup BeatStep parameters mapping from configuration file Beatstep.pfi
2. In Chataigne, install DS100 OSC and ADM-OSC modules (in Chataigne/Files menu/Community module manager...). You can also download the modules from https://github.com/madees/ and manually unzip and copy in your ..Chataigne/modules/ folder).
3. Download from this repository the .noisette and all filters scripts .js in the same folder.
5. Launch Chataigne and open this .noisette.
6. It should show the Dashboard full screen, if not check View menu to show Dashboard.
7. Activate and set IP/port of needed outputs
8. Check that the MIDI module for BeatStep is set to the correct MIDI interface.
9. IMPORTANT NOTE : unfortunately, the XY visualisation is vertically opposite to DS100 orientation, and this setting isn't stored in the file.
>> SO YOU SHOULD RIGHT CLIC ON EVERY XY SQUARE AND SELECT "Invert Y" OPTION each time you re-open Chataigne, until Dashboard update fix.

You can play directly with predefined trajectories. If you want to customize them, they are Curve2D in each Sequences>Mapping2D.
Press Alt+Tab or F11 to exit full screen. Got to view>layout>default layout to restore Chatainge layout if needed.

There is a "close app" in Dashboard button bottom left.

## About Chataigne
For global support on how to use Chataigne and its modules, or this example project, please visit the forum : http://benjamin.kuperberg.fr/chataigne/forum or join us on Discord : https://discord.com/invite/ngnJ5z 

If you need any help, my contact on Discord is also "madees". Any feedback or ideas on improvements or features are welcome !
