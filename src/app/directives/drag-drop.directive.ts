

import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild, AfterContentInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';

export interface PositionType {
  x: number;
  y: number;
}

@Directive({selector: '[appDragable]'})
export class DragCropDirective implements AfterContentInit, OnDestroy {
  @Input() readonly containerId = 'container';

  private _location: PositionType = {x: 0, y: 0};
  @Input()
  set location(location: PositionType) {
    if (location.x !== this._location.x || location.y !== this._location.y) {
      this.changeElPositionTo(location);
      this._location = location;
      this.locationChange.emit(this._location);
    }
  }
  get location(): PositionType { return this._location; }

  @Output() locationChange = new EventEmitter<PositionType>();

  private containerElement: any;
  containerCoor: { top: number, left: number, width: number, height: number};

  elMouseClickCoor: { top: number, left: number}; // the click position relative to the element (relative to the top left corner).
  translateVector: PositionType = {x: 0, y: 0}; // how much we move from the start

  isMouseDown = false;


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.containerElement = this.el.nativeElement.closest('#' + this.containerId);
    this.containerCoor = this.getCoords(this.containerElement);
    const elCoor =  this.getCoords(this.el.nativeElement);
    this._location = {x: elCoor.left, y: elCoor.top};
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event) {
    this.isMouseDown = true;
    this.elMouseClickCoor = {left: event.pageX, top: event.pageY};
    this.translateVector = this.getElementTranslateProperty(this.el.nativeElement);
    this.registerContainersOnMouseMoveEvent();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown)// the if should always fail the way we handle registration and deletion of the event listener.
      return;
    // if (this.isPoseInsideContainer(event.pageX, event.pageY)) { // if inside the container we can move the el to the new coor
      this.moveElToMousePose(event.pageX, event.pageY);
    // }
}
  /*@HostListener('mouseup')*/
  onMouseUpFnc = (event) => this.onMouseUp(event);
  onMouseUp(event: MouseEvent) {
    this.unregisterContainersOnMouseMoveEvent();
    this.isMouseDown = false;
    const elementCoor = this.getCoords(this.el.nativeElement);
    this.location = {x: elementCoor.left, y: elementCoor.top};
  }

  moveElToMousePose(posX: number, posY: number): void {// taking into account the offset
    const newTranslateVector: {x: number, y: number} = {x: (posX - this.elMouseClickCoor.left + this.translateVector.x), y: (posY - this.elMouseClickCoor.top + this.translateVector.y)};
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(' + newTranslateVector.x + 'px,' + newTranslateVector.y + 'px)');
  }

  getCoords(elem): {top: number, left: number, width: number, height: number} { // crossbrowser version
    const box = elem.getBoundingClientRect();

    const body = document.body;
    const docEl = document.documentElement;

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    //  return { top: Math.round(top), left: Math.round(left), width: Math.round(box.width), height: Math.round(box.height)};
    return {top: top, left: left, width: box.width, height: box.height};
  }

  isPoseInsideContainer(posX: number, posY: number): boolean {
    return ((posX > this.containerCoor.left && posX < this.containerCoor.left + this.containerCoor.width) &&
            (posY > this.containerCoor.top && posY < this.containerCoor.top + this.containerCoor.height));
  }

  mouseMoveFnc = (event) => this.onMouseMove(event);
  registerContainersOnMouseMoveEvent(): void {
    // this.containerElement.addEventListener('mousemove', this.mouseMoveFnc);
    document.addEventListener('mousemove', this.mouseMoveFnc);
    document.addEventListener('mouseup', this.onMouseUpFnc);
  }

  unregisterContainersOnMouseMoveEvent(): void {
    // this.containerElement.removeEventListener('mousemove', this.mouseMoveFnc);
    document.removeEventListener('mousemove', this.mouseMoveFnc);
    document.removeEventListener('mouseup', this.onMouseUpFnc);
  }

  getElementTranslateProperty(el): PositionType {
    const style = window.getComputedStyle(el);
    const transform = style.getPropertyValue('transform');
    if (transform === 'none')
      return {x: 0, y: 0};
    let tmp = transform.split('(')[1];
    tmp = tmp.split(')')[0];
    const values = tmp.split(',');
    return {x: +values[4], y: +values[5]};
  }

  changeElPositionTo(newPosition: PositionType): void {
    const translateVector = this.getElementTranslateProperty(this.el.nativeElement);
    const currentElementCoor = this.getCoords(this.el.nativeElement);
    const newTranslateVector: {x: number, y: number} = {x: (newPosition.x - currentElementCoor.left + translateVector.x), y: (newPosition.y - currentElementCoor.top + translateVector.y)};
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(' + newTranslateVector.x + 'px,' + newTranslateVector.y + 'px)');
  }

  ngOnDestroy(): void {
    this.unregisterContainersOnMouseMoveEvent();
  }
}
