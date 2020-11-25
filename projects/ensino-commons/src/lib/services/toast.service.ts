import { Injectable, Injector } from '@angular/core';
import { GlobalPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastComponent } from '../components/toast/toast.component';
import { ToastData } from '../models/toast-data.model';
import { ToastRef } from '../models/toast-ref.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private lastToast: ToastRef;

  constructor(private overlay: Overlay, private parentInjector: Injector) {}

  show(data: ToastData): ToastRef {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  getPositionStrategy(): GlobalPositionStrategy {
    return this.overlay
      .position()
      .global()
      .top(this.getPosition())
      .right('var(--padding)');
  }

  getPosition(): string {
    const topOffset = 110;

    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible
      ? this.lastToast.getPosition().bottom - 15
      : topOffset;

    const viewLimit =
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) -
      topOffset +
      15;

    return `calc(var(--padding) + ${
      position >= viewLimit ? topOffset : position
    }px)`;
  }

  getInjector(
    data: ToastData,
    toastRef: ToastRef,
    parentInjector: Injector
  ): Injector {
    return Injector.create({
      providers: [
        { provide: ToastData, useValue: data },
        { provide: ToastRef, useValue: toastRef },
      ],
      parent: parentInjector,
    });
  }
}
