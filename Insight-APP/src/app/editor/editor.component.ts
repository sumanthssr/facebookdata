import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

 content: string;


 public editor;
  public editorContent = '';
  public editorOptions = {
    placeholder: "insert content..."
  };

 constructor(private post: PostService) {}

onEditorBlured(quill) {
    //console.log('editor blur!', quill);
  }

 onEditorFocused(quill) {
    //console.log('editor focus!', quill);
  }

 onEditorCreated(quill) {
    this.editor = quill;
    //console.log('quill is ready! this is current quill instance object', quill);
  }

 onContentChanged({ quill, html, text }) {
    //console.log('quill content is changed!', quill, html, text);
  }

 ngOnInit() {
    
   

 }


 save(content: string) {

   this.editorContent = content;
    this.post.postContent(this.editorContent);
  }

  
}