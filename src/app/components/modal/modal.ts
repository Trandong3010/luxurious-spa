import { CommonModule } from '@angular/common';
import { Component, computed, inject, Type } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
})
export class Modal {
  private readonly _store = inject(ModalStore);

  protected close() {
    this._store.close();
  }

  protected isOpen = computed(() => this._store.isOpen());
  protected title = computed(() => this._store.title());
  protected subTitle = computed(() => this._store.sub_title());
  protected content = computed(() => this._store.content());
  protected action = computed(() => this._store.action());
}

export const ModalStore = signalStore(
  { providedIn: 'root' },
  withState({
    isOpen: false, // Modal visibility state
    content: null as Type<any> | null, // Save content component type
    title: '', // Title of the modal
    sub_title: '', // Subtitle of the modal
    action: [{ text: '', icon: '', callback: () => {} }], // Array of action buttons
  }),
  withMethods((store) => ({
    // Method to open the modal
    open<T>(
      component: Type<T> | null = null, // Component to render inside the modals
      title: string = '',
      sub_title: string = '',
      action = [{ text: '', icon: '', callback: () => {} }]
    ) {
      // Update the state to open the modal with provided details
      patchState(store, { isOpen: true, content: component, title, sub_title, action });
    },
    // Method to close the modal
    close() {
      patchState(store, { isOpen: false });
    },
  }))
);
