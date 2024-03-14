import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';

import { CodeExample } from '../code-examples/examples-provider';

@Component({
  selector: 'app-source-code-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './source-code-section.component.html',
  styleUrl: './source-code-section.component.scss',
})
export class SourceCodeSectionComponent {
  @Input()
  code?: CodeExample | null;
}
