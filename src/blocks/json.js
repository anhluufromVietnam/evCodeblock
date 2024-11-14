// json.js
import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([

  {
    "type": "text_block",
    "message0": "khối chữ %1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "abc"
      }
    ],
    "output": "String",
    "colour": 230
  },
  {
    "type": "number_block",
    "message0": "khối số %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "value": 0,
        "min": -Infinity,
        "max": Infinity
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_add",
    "message0": "(%1) + (%2)",
    "args0": [
      {
        "type": "field_number",
        "name": "A",
        "check": "Number"
      },
      {
        "type": "field_number",
        "name": "B",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_subtract",
    "message0": "(%1) - (%2)",
    "args0": [
      {
        "type": "field_number",
        "name": "A",
        "check": "Number"
      },
      {
        "type": "field_number",
        "name": "B",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_multiply",
    "message0": "(%1) * (%2)",
    "args0": [
      {
        "type": "field_number",
        "name": "A",
        "check": "Number"
      },
      {
        "type": "field_number",
        "name": "B",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_divide",
    "message0": "(%1) / (%2)",
    "args0": [
      {
        "type": "field_number",
        "name": "A",
        "check": "Number"
      },
      {
        "type": "field_number",
        "name": "B",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_random_int",
    "message0": "lấy ngẫu nhiên từ %1 đến %2",
    "args0": [
      {
        "type": "field_number",
        "name": "FROM",
        "check": "Number"
      },
      {
        "type": "field_number",
        "name": "TO",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_modulo",
    "message0": "%1 chia lấy dư cho %2",
    "args0": [
      {
        "type": "field_number",
        "name": "DIVIDEND",
        "check": "Number"
      },
      {
        "type": "field_number",
        "name": "DIVISOR",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_round",
    "message0": "làm tròn %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "check": "Number"
      }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_compare",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "field_number",
        "name": "A",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["=", "EQ"],
          [">", "GT"],
          ["<", "LT"],
          [">=", "GTE"],
          ["<=", "LTE"]
        ]
      },
      {
        "type": "field_number",
        "name": "B",
        "check": "Number"
      }
    ],
    "output": "Boolean",
    "colour": 230
  }
]);