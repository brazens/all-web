document.write("\
<body onload=\"showImage()\">\n\
    <script type=\"text/javascript\">\n\
      var errorimg= new Array();\n\
      errorimg[0]=\"https://images.emojiterra.com/google/android-11/512px/1f916.png\";\n\
      errorimg[1]=\"https://images.emojiterra.com/google/android-11/512px/1f916.png\";\n\
      errorimg[2]=\"https://images.emojiterra.com/google/android-11/512px/1f916.png\";\n\
      errorimg[3]=\"https://littledeep.com/wp-content/uploads/2020/01/littledeep_illustration_banana_style1.png\";\n\
\n\
      \n\
      function showImage()\n\
      {\n\
          var imgNum=Math.round(Math.random()*3);\n\
          var objImg=document.getElementById(\"errorimg\");\n\
          objImg.src=errorimg[imgNum];\n\
      }\n\
    </","script>\n\
    <div class=\"row\">\n\
        <div class=\"page404\">\n\
          <h1 class=\"text404\">404</h1>\n\
        <h3 id=\"url\"></h3>\n\
        <a class=\"goback\" href=\"https://videt.xyz\">go back</a>\n\
        </div>\n\
      <div class=\"page404\">\n\
        <img height=\"300px\" id=\"errorimg\">\n\
      </div>\n\
    </div>\n\
\n\
    <script>\n\
        document.getElementById(\"url\").innerHTML = \n\
        \"The connected path<br>\" + window.location.href + \"does not exist.\";\n\
    </","script>\n\
  </body>");
