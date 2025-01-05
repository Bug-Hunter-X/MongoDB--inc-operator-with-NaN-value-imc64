```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6556565656")},{$inc:{count:NaN}});
```