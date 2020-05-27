const data = {
  "recipes": [
    {
      "id": 0,
      "title": "starter",
      "directions": [
        [
          "flour",
          "a scale that measures in grams",
          "a dedicated glass container that has a cover. A canning jar could work."
        ],
        {
          "direction": "Mix equal parts water and flour in the dedicated container. Recommendation: start with 50 grams of each."
        },
        {
          "direction": "Stir virorously. Cover/close and leave for 48 hours.",
          "time": 48
        },
        {
          "direction": "Lift cover/lid. Feel free to scoop and/or stir. Check for activity (bubbles).",
          "prompt": "Is there activity?",
          "status": false,
          "time": 24
        },
        {
          "direction": "Discard some starter. Feed the remaining starter by adding equal parts flour and water. Example: if the remaining starter is 50 grams, feed by adding 50 grams water and 50 grams flour.",
          "time": 24
        },
        {
          "direction": "Lift cover/lid. Feel free to scoop and/or stir. Check for activity (bubbles).",
          "prompt": "Is there activity?",
          "status": false,
          "time": 24
        },
        {
          "direction": "Discard some starter. Feed the remaining starter by adding equal parts flour and water. Example: if the remaining starter is 50 grams, feed by adding 50 grams water and 50 grams flour.",
          "time": 24
        },
        {
          "direction": "Lift cover/lid. Feel free to scoop and/or stir. Check for activity (bubbles).",
          "prompt": "Is there activity?",
          "status": false,
          "time": 24
        },
        {
          "direction": "Test starter. Put a tablespoon of starter in a cup/bowl of water. If it floats, it's ready to be used.",
          "prompt": "Did it float?",
          "status": false,
          "repeat": "Feed the starter.",
          "time": 12
        },
        {
          "direction": "To maintain your starter, feed it the morning and night before you use it. If you aren't actively baking, store it in the refrigerator and feed it once a week."
        }
      ]
    },
    {
      "id": 1,
      "title": "basic loaf",
      "directions": [
        [
          "active starter (floats in water)",
          "flour",
          "salt",
          "a large glass bowl",
          "beeswax wrap, a lid for the large bowl, or plastic wrap",
          "a banneton/proofing basket",
          "a scale that measures in grams",
          "parchment paper (wax paper will not work)",
          "a lame (a serated knife can work in a pinch)",
          "a dutch oven (or any oven-safe pot with an oven-safe lid)"
        ],
        {
          "direction": "Mix 500 grams of flour and 350 grams of water. Use your hand or a sturdy spoon to mix until there are no dry bits. Cover bowl and let the dough rest (autolyse).",
          "time": .5
        },
        {
          "direction": "Add 50 grams of starter and 10 grams salt to your dough. Mix gently and thouroughly. Cover and leave.",
          "time": 1
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 1
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 1.5
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 2
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 3
        },
        {
          "direction": "Flour your proofing basket. Stretch and fold the dough. Then scoop the dough up with both hands, and place into the proofing basket. Cover and leave.",
          "time": .5
        },
        {
          "direction": "Place your dutch oven (without lid) into the oven. Preheat to 500 degrees.",
          "time": .5
        },
        {
          "direction": "Cut off enough parchment paper to cover the bottom of your dutch oven. Remove the cover from the proofing basket. Put parchment paper over the proofing basket, like a lid, and flip over, onto the counter. The parchment paper is now on the counter, the dough is on top, and the proofing basket can be pulled up and away.",
        },
        {
          "direction": "Bring out the dutch oven and drop your dough (including parchment paper) into it.",
        },
        {
          "direction": "Wet your lame. Score the dough with the lame. Make a shallow X with swift, confident cuts.",
        },
        {
          "direction": "Put on the dutch oven lid. Put the dutch oven into the oven and bake.",
          "time": 30
        },
        {
          "direction": "Take off the lid of the dutch oven. Lower the temperature to 450 degrees. Continue baking.",
          "time": 20
        },
        {
          "direction": "Take the loaf out of the dutch oven and place directly on the rack in the oven. Lower the temperature to 400 degrees. Continue baking.",
          "time": 10
        },
        {
          "direction": "Remove bread from oven and turn off oven. Place on rack or counter to cool. Try to wait until the bread is cool before cutting, as it is still baking."
        }
      ]
    },
    {
      "id": 2,
      "title": "basic baguette",
      "directions": [
        [
          "active starter (floats in water)",
          "flour",
          "salt",
          "a large glass bowl",
          "beeswax wrap, a lid for the large bowl, or plastic wrap",
          "a banneton/proofing basket",
          "a scale that measures in grams",
          "parchment paper (no, wax paper will not work)",
          "a lame (a serated knife can work in a pinch)",
          "a cookie sheet",
          "an oven safe container that can hold water"
        ],
        {
          "direction": "Mix 500 grams of flour and 350 grams of water. Use your hand or a sturdy spoon to mix until there are no dry bits. Cover bowl and let the dough rest (autolyse).",
          "time": .5
        },
        {
          "direction": "Add 50 grams of starter and 10 grams salt to your dough. Mix gently and thouroughly. Cover and leave.",
          "time": 1
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 1
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 1.5
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 2
        },
        {
          "direction": "Stretch and fold the dough. Stretch and pull an edge out and fold it into the middle. Rotate the bowl and grab the next edge. 5 rotations should get every edge folded inward. Cover and leave.",
          "time": 3
        },
        {
          "direction": "Flour your proofing basket. Stretch and fold the dough. Then scoop the dough up with both hands, and place into the proofing basket. Cover and leave.",
          "time": .5
        },
        {
          "direction": "Place racks so you have a high rack and a low rack. Preheat oven to 500 degrees. Fill oven-safe water container with plenty of water and put on lower rack.",
          "time": .5
        },
        {
          "direction": "Cut off enough parchment paper to cover your cookie sheet. Remove the cover from the proofing basket."
        },
        {
          "direction": "Place dough on a floured surface. Cut in half. Shaped into two long rolls. Place on cookie sheet."
        },
        {
          "direction": "Wet your lame. Score the dough with the lame. Make about 5 shallow diagonal slashes down each loaf."
        },
        {
          "direction": "Put the cookie sheet with loaves into the oven, on the higher rack, and bake. Try to do this quickly, to keep the steam inside the oven.",
          "time": .5
        },
        {
          "prompt": "Does the bread look golden brown?",
          "status": false,
          "time": .25
        },
        {
          "direction": "Remove bread from oven and turn off oven. Place on rack or counter to cool. Try to wait until the bread is cool before cutting, as it is still baking.",
          "time": 1
        },
        {
          "direction": "If the oven is cool, remove water container from oven and discard water."
        }
      ]
    }
  ],
  "user": {
    "id": "a",
    "name": "Rainbow",
    "unlocked": [0]
  }
}

export default data
