# BeatStepAnimator
Example of Chataigne DS100 OSC Module usage with Arturia BeatStep as a Live Object Animator.

A simple interface to generate Soundscape sound object animation in live situation.

It provides 9 animators, that can move maximum 13 objects :

### With BeatStep in CNTRL mode (red)
Each animator use a vertical slice of the controller. bottom buttons are activates, top buttons are tap triggers. The two rotary encoders above are principal parameters.
You can tap animator #1 button to sync tempo, or sync it to BeatStep internal tempo.
Above each XY pad you can set the DS100 remote object number.
Each animator has its own number of beat steps count setting, you can resync all with "reset phase", desync them by individual "phase shift" button, or on the opposite each tap reset individual phase.

* 4x Travellizer (Anims 1-4) : moves objects along trajectories. Start position and speed as rotary button parameters. Tap to launch manually, activate to auto launch on each beat step. You can activate "SYM" to control two symetrical (left/right) objects with the same animator.
* 2x Randomizer (Anims 5-6) : set object position along trajectories, with random jitter and position as rotary button parameters. Tap to generate a new position, activate to auto generate on each beat step. You can sync 
* 2x Travelizer (Anims 7-8) : moves objects with circular LFO, rotation speed and random jitter as rotary button parameters. Tap to reset phase (center front), activate to launch rotation. You can set Rate high to have smooth displacement (default 20 Hz), or sync it with BPM. You can set with below XY pads the center of rotation and distance as circle radius.

The big knob is mapped to all DS100 outputs level.

### With BeatStep in SEQ mode (blue)
Anim9 setting for DS100 remote object number.
Each step parameter is mapped to positions on Trajectory9.
The big knob is default tempo setting.

## How to setup
1. First install DS100 OSC module (in Chataigne/Files menu/Community module manager...). You can also download the module folder from https://github.com/madees/dbaudio-DS100-Chataigne-Module/archive/master.zip and manually unzip and copy the DS100 OSC module master folder in your ..Chataigne/modules/ folder).
2. Download the .noisette and all .js in the same folder.
3. Launch Chataigne and open this .noisette.
4. IP of DS100 device should be setup accordingly in DS100 module OSC output settings (default is 192.168.1.100).
5. Check that the MIDI module for BeatStep is set to the correct MIDI interface.
5. View the Dashboard full screen

All objects are send to the default global Coordinate mapping set in DS100 module (#1).
You can play directly with predefined trajectories. If you want to customize them, they are Curve2D in each Sequences>Mapping2D.

## About Chataigne
For global support on how to use Chataigne and its modules, or this example project, please visit the forum : http://benjamin.kuperberg.fr/chataigne/forum or join us on Discord : https://discord.com/invite/ngnJ5z 

If you need any help, my contact on Discord is also "madees". Any feedback or ideas on improvements or features are welcome !
