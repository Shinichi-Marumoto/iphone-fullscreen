# Full screen display for iPhone like krpano.

- Just before closing the body tag, place it to load the js file.

```
  <script src="iphone-fullscreen.js"></script>
</body>
```

- When using for your own elements, use the query parameter fsc in the src attribute. ```[tag ID]```

```
<body>
  <div id="your_container"></div>
  <script src="iphone-fullscreen.js?fsc=your_container" type="text/javascript"></script>
</body>
```

- When using the safe-area-inset-bottom, use the query parameter sab in the src attribute. ```[bool]```

```
<script src="iphone-fullscreen.js?sab=true" type="text/javascript"></script>
```

## Examples.

#### Use with krpano replace the standard one.
```
  <script type="text/javascript" src="js/iphone-fullscreen.js?fsc=pano"></script>
</body>
```

#### Use with shapespark.

- Please enclose the elements under the body tag in ```<div id="container">```

```
<body>
  <div id="container">
  ...
  <div>
  ...
  <script type="text/javascript" src="js/iphone-fullscreen.js?fsc=container"></script>
</body>
```
