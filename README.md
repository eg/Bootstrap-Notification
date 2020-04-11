# Bootstrap Notification 
Lightweight <b>(8kb)</b> Notification for Bootstrap.

<img src='https://raw.githubusercontent.com/eg/Bootstrap-Notification/master/img/preview.jpg' alt='bootstrap notification' style='width:690px; height: 367px;'>


# Getting started
```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="src/bootstrap-notification.css">

<!-- Latest compiled and minified JavaScript -->
<script src="src/bootstrap-notification-min.js"></script>
```


# How to use it
```javascript
bsNotification({
    image: 'img/image.jpg', // Notification Image
    title: 'Title', // Title
    text: 'Notification Text', // Text
    time: "just now", // Time
    autoClose: "2000", // Auto Close Time
    color: false, // Bg class
    shadow: false // Shadow
})
```


# Options
<table>
  <tr>
    <td><b>image</b></td>
    <td>source of notification image</td>
  </tr>
  <tr>
    <td><b>title</b></td>
    <td>Notification Title</td>
  </tr>
  <tr>
    <td><b>text</b></td>
    <td>Notification Text or Description</td>
  </tr>
  <tr>
    <td><b>time</b></td>
    <td>source of notification Time</td>
  </tr>
  <tr>
    <td><b>autoClose</b></td>
    <td>Auto close notification after activated in ms value</td>
  </tr>
  <tr>
    <td><b>color</b></td>
    <td>
      false (light)<br>
      .bg-primary <br>
      .bg-secondary <br>
      .bg-success <br>
      .bg-warning <br>
      .bg-danger <br>
      .bg-info <br>
      .bg-dark
    </td>
  </tr>
  <tr>
    <td><b>shadow</b></td>
    <td>true / false</td>
  </tr>
</table>
