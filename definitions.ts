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
        .appendField(new Blockly.FieldSlider("255", "0", "255", "1", "1", "Speed"), 'slider');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF");
      this.setTooltip("Sets the speed of the :MOVE's motors");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['move_motor_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".motorOn(")
        .appendField(new Blockly.FieldDropdown([["l", "l"], ["r", "r"]]), "motor_side")
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([["f", "f"], ["r", "r"]]), "motor_direction")
        .appendField(",");
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

Blockly.Blocks['move_motor_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".motorOff(")
        .appendField(new Blockly.FieldDropdown([["l", "l"], ["r", "r"]]), "motor_side")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Stop the :MOVE's motors");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_servo_angle'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldSlider("180", "0", "180", "1", "1", "Angle"), 'slider');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF");
      this.setTooltip("Sets the angle of the :MOVE's servos");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['move_motor_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".goToPosition(")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), "servo_number")
        .appendField(",");
    this.appendValueInput("servo_angle")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Sets the angle of the :MOVE's servos");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_set_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".setLED(")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]]), "led_number")
        .appendField(", (");
    this.appendValueInput("parameters")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("))");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Sets the value of the :MOVE's LEDs");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_set_leds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".setLEDs((");
    this.appendValueInput("parameters")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("))");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Sets the value of the :MOVE's LEDs");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_show_leds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".showLEDs()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Shows the updated values of the :MOVE's LEDs");
    this.setHelpUrl("");
  }
};
