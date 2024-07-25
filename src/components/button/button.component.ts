import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() classNames: string = 'btn-primary btn-small fw-normal';
  @Input() label: string = 'Button';
  @Input() icon?: string;
  @Output() onClick = new EventEmitter<Event>();
}
