export default (clientName: string, challengeString: string) => `
<html>
<head>
<script src="./app.js"></script>
<link rel="stylesheet" href="./style.css">
</head>
<body>
    
<div class="hero">
    <h1>Sign In with</h1>
    <img src="./logo.svg" />
</div>

<div id="content"></div>

<script>
  polkaSignIn(
      document.getElementById("content"),
      '${clientName}',
      '${challengeString}'
  )
</script>

</body>
</html>`;