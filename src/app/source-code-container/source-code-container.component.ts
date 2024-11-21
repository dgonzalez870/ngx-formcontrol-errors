import {
  Component,
  OnInit,
} from '@angular/core';

import {
  CodeExample,
  getCodeExamples,
  loadCodeLanguages,
} from '../code-examples/examples-provider';
import {
  SourceCodeSectionComponent,
} from '../source-code-section/source-code-section.component';

@Component({
    selector: 'app-source-code-container',
    imports: [SourceCodeSectionComponent],
    templateUrl: './source-code-container.component.html',
    styleUrl: './source-code-container.component.scss'
})
export class SourceCodeContainerComponent implements OnInit {
  codeExamples!: CodeExample[];

  ngOnInit(): void {
    loadCodeLanguages();
    this.codeExamples = getCodeExamples();
  }
}
