Blockly.Blocks['import_move_motor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from KitronikMOVEMotor import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#02AD4D");
      this.setTooltip("Imports Kitronik :MOVE Motor library");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['move_motor_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(" = MOVEMotor()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("Initialise Kitronik :MOVE Motor");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_speed'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldSlider("255", "-255", "255", "1", "1", "Value"), 'slider');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF");
      this.setTooltip("Sets the speed of the :MOVE's motors");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['move_motor_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["Left", "Left"], ["Right", "Right"]]), "motor_side")
        .appendField("Motor(")
    this.appendValueInput("motor_speed")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("Drive the :MOVE's motors");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".StopMotors()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("Stop the :MOVE's motors");
  this.setHelpUrl("");
  }
};
