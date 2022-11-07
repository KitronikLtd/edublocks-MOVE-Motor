Blockly.Python['import_move_motor'] = function(block) {
  var code = 'from KitronikMOVEMotor import *\n';
  return code;
};

Blockly.Python['move_motor_init'] = function(block) {
  var variable_buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var code = variable_buggy + ' = MOVEMotor()\n';
  return code;
};

Blockly.Python['move_motor_speed'] = function(block) {
  var text_text = block.getFieldValue('slider');
  var code = text_text;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['move_motor_direction'] = function(block) {
  var variable_buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var dropdown_motor_side = block.getFieldValue('motor_side');
  var value_motor_speed = Blockly.Python.valueToCode(block, 'motor_speed', Blockly.Python.ORDER_ATOMIC);
  var code = variable_buggy + '.' + dropdown_motor_side + 'Motor(' + value_motor_speed + ')\n';
  return code;
};

Blockly.Python['move_motor_stop'] = function(block) {
  var variable_buggy = Blockly.Python.variableDB_.getName(block.getFieldValue('buggy'), Blockly.Variables.NAME_TYPE);
  var code = variable_buggy + '.StopMotors()\n';
  return code;
};
