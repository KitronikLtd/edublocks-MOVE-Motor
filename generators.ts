Blockly.Python['import_move_motor'] = function(block) {
  var code = 'from KitronikMOVEMotor import *\n';
  return code;
};

Blockly.Python['move_motor_init'] = function(block) {
  var buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var code = buggy + ' = MOVEMotor()\n';
  return code;
};

Blockly.Python['move_motor_speed'] = function(block) {
  var speed = block.getFieldValue('slider');
  var code = speed;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['move_motor_on'] = function(block) {
  var buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var motor_side = block.getFieldValue('motor_side');
  var motor_direction = block.getFieldValue('motor_direction');
  var motor_speed = Blockly.Python.valueToCode(block, 'motor_speed', Blockly.Python.ORDER_ATOMIC);
  var code = buggy + '.motorOn(' + motor_side + ', ' + motor_direction + ', ' + motor_speed + ')\n';
  return code;
};

Blockly.Python['move_motor_off'] = function(block) {
  var buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var motor_side = block.getFieldValue('motor_side');
  var code = buggy + '.motorOff(' + motor_side + ')\n';
  return code;
};

Blockly.Python['move_motor_servo_angle'] = function(block) {
  var angle = block.getFieldValue('slider');
  var code = angle;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['move_motor_position'] = function(block) {
  var buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var servo_number = block.getFieldValue('servo_number');
  var servo_angle = Blockly.Python.valueToCode(block, 'servo_angle', Blockly.Python.ORDER_ATOMIC);
  var code = buggy + '.goToPosition(' + servo_number + ', ' + servo_angle + ')\n';
  return code;
};

Blockly.Python['move_motor_set_led'] = function(block) {
  var buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var led_number = block.getFieldValue('led_number');
  var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
  var code = buggy + '.setLED(' + led_number + ', (' + parameters + '))\n';
  return code;
};

Blockly.Python['move_motor_set_leds'] = function(block) {
  var buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
  var code = buggy + '.setLEDs((' + parameters + '))\n';
  return code;
};

Blockly.Python['move_motor_show_leds'] = function(block) {
  var buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var code = buggy + '.showLEDs()\n';
  return code;
};
