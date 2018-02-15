import {Component} from '@angular/core';
import {MarkdownPipe} from './markdown.pipe';


@Component({
    selector: 'app-root',
    styleUrls: ["app.component.css"],
    pipes: [MarkdownPipe],
    template: `
      <div class="row">
        <div class="col-md-12 pageTitle">Markdown Previewer</div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <form>
            <textarea class="form-control inputArea" [(ngModel)]="defaultContent" name="inputArea"></textarea>
          </form>
        </div>
        <div class="col-md-5 outputArea" [innerHTML]="defaultContent | markdown"></div>
        <div class="col-md-1"></div>
      </div>
    `
})
export class AppComponent {
  defaultContent = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\'monospace\', ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

 *[Matt Leonard](http://www.mattleonard.io)* `;

}
