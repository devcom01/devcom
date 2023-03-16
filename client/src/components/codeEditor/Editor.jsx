
import React, { useEffect, useState } from 'react'
// import CodeMirror from "codemirror"
// import Firepad from "firepad"
const Firepad = window.Firepad;
const firebase = window.firebase;
const CodeMirror = window.CodeMirror;

function getExampleRef() {
  var ref = firebase.database().ref();
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
  }
  if (typeof console !== 'undefined') {
    console.log('Firebase data: ', ref.toString());
  }
  return ref;
}

const Editor = () => {
const [trynotrender,setaha]=useState("")
  useEffect(()=> {
    const firebaseConfig = {

      apiKey:proces.env.apikey,
      authDomain:process.env.auth,
      databaseURL:process.env.url


    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
  }
    
  var firepadDiv = document.getElementById('codeeditor');
  var firepadRef = getExampleRef();

  //// Create CodeMirror (with lineWrapping on).
  var codeMirror = CodeMirror(firepadDiv, {
    lineNumbers: true,
    mode: 'javascript'
  })

  //// Create Firepad (with rich text toolbar and shortcuts enabled).
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
    richTextToolbar: true,
    shortcuts: {
      'Cmd-Enter': 'newlineAndIndentContinueMarkdownList',
      'Cmd-Shift-Enter': 'newlineAndIndentContinueMarkdownList'
    },
    defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  });


  //// Initialize contents.
  firepad.on('ready', function() {
 
      firepad.setHtml('<span style="font-size: 24px;">Rich-text editing with <span style="color: red">Firepad!</span></span><br/><br/>Collaborative-editing made easy.\n');
 
  });
}
   ,[setaha]) 

    return (
    <div id ='codeeditor' style={{height:"100%"}}>
         
      
    </div>
  )
}

export default Editor
