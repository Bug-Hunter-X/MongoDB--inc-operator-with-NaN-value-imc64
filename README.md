# MongoDB $inc operator with NaN value
This example demonstrates an issue that may arise when using MongoDB's `$inc` operator with a `NaN` value. The `$inc` operator is designed to increment a numerical field by a specified amount. However, supplying `NaN` results in unexpected behavior.  The correct approach is to use a numeric value to increment the field appropriately.

## Bug
The original code attempts to increment the `count` field by `NaN`. This leads to the field not being updated correctly, or potentially causing an error.

## Solution
The solution provides the correct usage, incrementing the field by a valid numerical value, ensuring the expected update behavior.
